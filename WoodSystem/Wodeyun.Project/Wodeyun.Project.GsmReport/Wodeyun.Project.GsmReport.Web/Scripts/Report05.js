﻿$(function () {
    $('#Grid').datagrid({ loadFilter: Events.OnGrid });

    for (var i = 0; i < $('#Buttons').find('a').length; i++) {
        $('#Buttons').find('a').eq(i).bind('click', { index: i }, Events.OnClick);
    }
    $('#Query').bind('click', Events.OnQuery);
    $('#Excel').bind('click', Events.OnExcel);

    for (var i = 2; i < $('#Buttons').find('a').length; i++) {
        $('#Buttons').find('a').eq(i).find('font').html(moment().add('months', -i).format('MM') + '月');
    }
    $('#Year').numberspinner('setValue', moment().add('years', -1).format('YYYY'));
    $('#Month').combobox('setValue', moment().format('M'));

    Events.GetGrid(moment().format('YYYY-MM'), 1, $('#Grid').datagrid('options').pageSize);
});

var Events = {
    Service: 'GsmReport',

    GetMonth: function () {
        for (var i = 0; i < $('#Buttons').find('a').length; i++) {
            if ($('#Buttons').find('a').eq(i).find('font').attr('color') == '#ff0000') return moment().add('months', -i).format('YYYY-MM');
        }

        return Eventer.Get($('#Year')) + '-' + Eventer.Get($('#Month'));
    },

    GetGrid: function (month, start, length, callback) {
        var footer = function () {
            var items = $('#Grid').datagrid('getRows');
            var count = 0;
            
            for (var i = 0; i < items.length; i++) {
                count = count + items[i].Count;
            }

            $('#Grid').datagrid('reloadFooter', [{ Area: '<font color="red">合计</font>', Count: '<font color="red"><b>' + count + '</b></font>' }]);

            if (callback != null) callback();
        };

        Eventer.Grid($('#Grid'), Events.Service, 'GetReport05ByMonthAndStartAndLength', [month, start, length], footer);

        for (var i = 0; i < $('#Buttons').find('a').length; i++) {
            $('#Buttons').find('a').eq(i).find('font').attr('color', (month == moment().add('months', -i).format('YYYY-MM') ? 'red' : 'normal'));
        }
    },

    Page: function () {
        var pageNumber = $('#Grid').datagrid('options').pageNumber;
        var pageSize = $('#Grid').datagrid('options').pageSize;

        Events.GetGrid(Events.GetMonth(), (pageNumber - 1) * pageSize + 1, pageSize);
    },

    OnClick: function (event) {
        Events.GetGrid(moment().add('months', -event.data.index).format('YYYY-MM'), 1, $('#Grid').datagrid('options').pageSize);
    },

    OnQuery: function () {
        Events.GetGrid(Eventer.Get($('#Year')) + '-' + Eventer.Get($('#Month')), 1, $('#Grid').datagrid('options').pageSize);
    },

    OnExcel: function () {
        $('#Grid').datagrid('options').pageSize = Setter.Max;
        $('#Grid').datagrid('getPager').pagination('refresh', { pageSize: Setter.Max });

        var callback = function () {
            var SetValueAndStyle = function (cell, row, column) {
                var result = row[column];

                cell.Value = (result == null ? '' : $('<div>' + result + '</div>').text());

                if (column == 'Area' || column == 'Count') {
                    if ((result + '').indexOf('<font color="red">') != -1) cell.Font.ColorIndex = 3;
                    if ((result + '').indexOf('<b>') != -1) cell.Font.Bold = true;
                }
            };

            var GetFilter = function () {
                return '月份：' + Events.GetMonth();
            };

            var excel;
            try {
                excel = new ActiveXObject('Excel.Application');
            }
            catch (exception) {
                alert('您的浏览器不允许自动启动 Excel。\n'
                    + '请确认您已经安装有 Excel，并请按以下操作方式设置浏览器：\n'
                    + '1、在浏览器中点击“工具”菜单。\n'
                    + '2、在弹出的菜单中点击“Internet 选项”。\n'
                    + '3、在弹出的窗口中点击“安全”页签。\n'
                    + '4、在打开的页签中点击“自定义级别”按钮。\n'
                    + '5、在弹出的窗口中找到“ActiveX 控件和插件”下面的“对未标记为可安全执行脚本的 ActiveX 控件初始化并执行脚本”。\n'
                    + '6、点击上述项目下的“提示”单选框。\n'
                    + '7、点击“确定”按钮关闭所有弹出的窗口。');
                return;
            }
            var workbook = excel.Workbooks.Add();
            var sheet = workbook.ActiveSheet;

            excel.Visible = true;
            excel.UserControl = true;

            sheet.Cells(1, 1) = '月属地汇总表';
            sheet.Cells(2, 1) = GetFilter();

            var columns = $('#Grid').datagrid('getColumnFields');
            for (var i = 0; i < columns.length; i++) {
                sheet.Cells(4, i + 1).Value = $('#Grid').datagrid('getColumnOption', columns[i]).title;
            }

            sheet.Range('A1:' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.substring(columns.length - 1, columns.length) + '1').MergeCells = true;
            sheet.Range('A2:' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.substring(columns.length - 1, columns.length) + '2').MergeCells = true;
            sheet.Cells(1, 1).HorizontalAlignment = 3;
            sheet.Cells(2, 1).HorizontalAlignment = 3;
            sheet.Rows(1).Font.Bold = true;
            for (var i = 0; i < columns.length; i++) {
                var column = $('#Grid').datagrid('getColumnOption', columns[i]);

                sheet.Columns(i + 1).ColumnWidth = column.width / 8;
                sheet.Columns(i + 1).Font.Size = 9;
                sheet.Columns(i + 1).WrapText = true;
            }
            sheet.Rows(4).Font.Bold = true;

            var rows = $('#Grid').datagrid('getRows');
            for (var i = 0; i < rows.length; i++) {
                sheet.Rows(4 + i + 1).Select;
                for (var j = 0; j < columns.length; j++) {
                    SetValueAndStyle(sheet.Cells(4 + i + 1, j + 1), rows[i], columns[j]);
                }
            }

            var footers = $('#Grid').datagrid('getFooterRows');
            for (var i = 0; i < footers.length; i++) {
                sheet.Rows(4 + rows.length + i + 1).Select;
                for (var j = 0; j < columns.length; j++) {
                    SetValueAndStyle(sheet.Cells(4 + rows.length + i + 1, j + 1), footers[i], columns[j]);
                }
            }
        };

        Events.GetGrid(Events.GetMonth(), 1, $('#Grid').datagrid('options').pageSize, callback);
    },

    OnGrid: function (data) {
        Eventer.Page($('#Grid'), Events.Page);

        return data;
    }
};
