﻿$(function () {
    var grid = $('#Grid');
    Eventer.Page(grid, Events.Page); // 注意！分页事件不能在onClickRow事件之前进行初始化
    grid.datagrid("getColumnOption", "WeighTime").formatter = Events.ToDateTime;
    grid.datagrid("getColumnOption", "AvgWater").formatter = Events.ToFixed;
    grid.datagrid("getColumnOption", "AvgSkin").formatter = Events.ToFixed;
    grid.datagrid("getColumnOption", "AvgScrap").formatter = Events.ToFixed;

    var aLinkS = $('#Buttons').find('a');
    var linkCount = aLinkS.length;
    for (var i = 0; i < linkCount; i++) {
        aLinkS.eq(i).bind('click', { index: i }, Events.OnClick);
    }
    for (var i = 2; i < linkCount; i++) {
        aLinkS.eq(i).find('font').html(moment().add('months', -i).format('MM') + '月');
    }

    $('#Year').numberspinner('setValue', moment().add('years', 0).format('YYYY'));
    $('#Month').combobox('setValue', moment().format('M'));

    $('#Query').bind('click', Events.OnQuery);
    $('#Excel').bind('click', Events.OnExcel);

    Events.GetGrid(null);
});

var Events = {
    Service: 'WoodReport',

    ResetPager: function () {
        var grid = $('#Grid');
        grid.datagrid('options').pageNumber = 1;
        grid.datagrid('getPager').pagination('refresh', {
            pageNumber: 1
        });
    },

    ToFixed: function (value) {
        if (value == null) return '';

        return value.toFixed(2) + "%";
    },

    ToDateTime: function (value) {
        if (value == null) return '';

        var arryDate = value.split('-');

        return parseInt(arryDate[1], 10) + "月" + arryDate[2] + "日";
    },

    GetMonth: function () {
        var aLinkS = $('#Buttons').find('a');
        var linkCount = aLinkS.length;
        for (var i = 0; i < linkCount; i++) {
            if (aLinkS.eq(i).find('font').attr('color') == '#ff0000') return moment().add('months', -i).format('YYYY-MM');
        }

        return Eventer.Get($('#Year')) + '-' + Eventer.Get($('#Month'));
    },

    GetGrid: function (callback) {
        var grid = $('#Grid');
        var gridOptons = grid.datagrid('options');
        var pageSize = gridOptons.pageSize;
        var rowStart = (gridOptons.pageNumber - 1) * pageSize + 1;

        var month = Events.GetMonth();

        Eventer.Grid(grid, Events.Service, 'GetReport02ByMonthAndStartAndLength', [month, rowStart, pageSize], callback);
    },

    Page: function () {
        Events.GetGrid(null);
    },

    OnClick: function (event) {
        var month = moment().add('months', -event.data.index).format('YYYY-MM');
        var itemsOfAlink = $('#Buttons').find('a');
        var itemCount = itemsOfAlink.length;
        for (var i = 0; i < itemCount; i++) {
            itemsOfAlink.eq(i).find('font').attr('color', (month == moment().add('months', -i).format('YYYY-MM') ? 'red' : 'normal'));
        }

        Events.ResetPager();

        Events.GetGrid(null);
    },

    OnQuery: function () {
        var itemsOfAlink = $('#Buttons').find('a');
        var itemCount = itemsOfAlink.length;
        for (var i = 0; i < itemCount; i++) {
            itemsOfAlink.eq(i).find('font').attr('color', 'normal');
        }

        Events.ResetPager();

        Events.GetGrid(null);
    },

    OnExcel: function () {
        if (confirm("该操作将花费较多的时间，数据量较大时甚至可能会超过10分钟，如果您的电脑性能较差，则不建议操作。是否继续？\n\n请注意，在等待的过程中，请不要随意点击，否则可能会终止操作。") == false) return;

        var grid = $('#Grid');
        var gridOptons = grid.datagrid('options');
        gridOptons.pageNumber = 1;
        gridOptons.pageSize = Setter.Max;
        grid.datagrid('getPager').pagination('refresh', {
            pageNumber: 1,
            pageSize: Setter.Max
        });

        var callback = function () {
            var SetValueAndStyle = function (cell, row, column) {
                var result = row[column];

                if (column == 'WeighTime') result = Events.ToDateTime(result);
                else result = Events.ToFixed(result);

                cell.Value = (result == null ? '' : $('<div>' + result + '</div>').text());
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

            sheet.Cells(1, 1) = '木片水份检验结果';
            sheet.Cells(2, 1) = GetFilter();

            var grid = $('#Grid');
            var columns = grid.datagrid('getColumnFields');
            var columnCount = columns.length;
            for (var i = 0; i < columnCount; i++) {
                sheet.Cells(4, i + 1).Value = grid.datagrid('getColumnOption', columns[i]).title;
            }
            
            sheet.Range('A1:' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.substring(columnCount - 1, columnCount) + '1').MergeCells = true;
            sheet.Range('A2:' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.substring(columnCount - 1, columnCount) + '2').MergeCells = true;
            sheet.Cells(1, 1).HorizontalAlignment = 3;
            sheet.Cells(2, 1).HorizontalAlignment = 3;
            sheet.Rows(1).Font.Bold = true;
            for (var i = 0; i < columnCount; i++) {
                var column = grid.datagrid('getColumnOption', columns[i]);

                sheet.Columns(i + 1).ColumnWidth = column.width / 16;
                sheet.Columns(i + 1).Font.Size = 9;
                sheet.Columns(i + 1).WrapText = true;
            }
            sheet.Rows(4).Font.Bold = true;

            var rows = grid.datagrid('getRows');
            var rowCount = rows.length;
            var currentRowIndex = 4; // 当前数据行的索引
            for (var i = 0; i < rowCount; i++) {
                currentRowIndex += 1;
                for (var j = 0; j < columnCount; j++) {
                    SetValueAndStyle(sheet.Cells(4 + i + 1, j + 1), rows[i], columns[j]);
                }
            }

            sheet.Range('A4:' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.substring(columnCount - 1, columnCount) + currentRowIndex).Borders.Weight = 2; // 设置单元格边框
        };

        Events.GetGrid(callback);
    }
};
