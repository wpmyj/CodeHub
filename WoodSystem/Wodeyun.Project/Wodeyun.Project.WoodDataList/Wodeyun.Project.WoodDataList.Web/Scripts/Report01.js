﻿$(function () {
    var grid = $('#Grid');
    Eventer.Page(grid, Events.Page); // 注意！分页事件不能在onClickRow事件之前进行初始化
    grid.datagrid("getColumnOption", "TimeOfStation").formatter = Events.ToDateTime;
    grid.datagrid("getColumnOption", "GPS").formatter = Events.ToMeter;
    grid.datagrid("getColumnOption", "PhotoNumber").formatter = Events.ToNumber;
    grid.datagrid("getColumnOption", "Description").formatter = Events.ToText;
    grid.datagrid("getColumnOption", "ArriveDate").formatter = Events.ToDateTime;

    $('#txtStartDate').datebox('setValue', moment().format('YYYY-MM-DD'));
    $('#txtEndDate').datebox('setValue', moment().format('YYYY-MM-DD'));

    $('#Query').bind('click', Events.OnQuery);
    $('#Excel').bind('click', Events.OnExcel);

    Events.GetGrid(null);
});

var Events = {
    Service: 'WoodDataList',

    ToNumber: function (value) {
        if (value == null) return '';

        var htmlValue = "";
        if (parseInt(value) == 0) htmlValue = "<span style=\"color:red;\">0</span> 张";
        else htmlValue = value + " 张";

        return htmlValue;
    },

    ToMeter: function (value) {
        if (value == null) return '';

        var htmlValue = "";
        if (parseFloat(value) > 5000) htmlValue = "<span style=\"color:red;\">" + value + "</span> 米";
        else htmlValue = value + " 米";

        return htmlValue;
    },

    ToText: function (value) {
        if (value == null) return '';

        return $.parseJSON(value).Name;
    },

    ToDateTime: function (value) {
        if (value == null) return '';

        return moment(value).format('YYYY-MM-DD HH:mm');
    },

    GetGrid: function (callback) {
        var startDate = Eventer.Get($('#txtStartDate'));
        var endDate = Eventer.Get($('#txtEndDate'));

        var grid = $('#Grid');
        var gridOptons = grid.datagrid('options');
        var pageSize = gridOptons.pageSize;
        var rowStart = (gridOptons.pageNumber - 1) * pageSize + 1;

        var supplier = Eventer.Get($('#txtSupplier')).toUpperCase();
        var license = Eventer.Get($('#txtLicense')).toUpperCase();
        var palce = Eventer.Get($('#txtPlace'));

        Eventer.Grid(grid, Events.Service, 'GetReport01BySearchWithPaging', [startDate, endDate, rowStart, pageSize, supplier, license, palce], callback);
    },

    Page: function () {
        Events.GetGrid(null);
    },

    OnQuery: function () {
        var grid = $('#Grid');
        grid.datagrid('options').pageNumber = 1;
        grid.datagrid('getPager').pagination('refresh', {
            pageNumber: 1
        });

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

                if (column == 'TimeOfStation') result = Events.ToDateTime(result);
                if (column == 'GPS') result = Events.ToMeter(result);
                if (column == 'PhotoNumber') result = Events.ToNumber(result);
                if (column == 'Description') result = Events.ToText(result);
                if (column == 'ArriveDate') result = Events.ToDateTime(result);

                cell.Value = (result == null ? '' : $('<div>' + result + '</div>').text());
            };

            var GetFilter = function () {
                return '日期：从 ' + Eventer.Get($('#txtStartDate')) + " 到 " + Eventer.Get($('#txtEndDate'));
            };

            var excel;
            try
            {
                excel = new ActiveXObject('Excel.Application');
            }
            catch (exception)
            {
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

            sheet.Cells(1, 1) = '移动检查站原始数据清单';
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

                sheet.Columns(i + 1).ColumnWidth = column.width / 8;
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
