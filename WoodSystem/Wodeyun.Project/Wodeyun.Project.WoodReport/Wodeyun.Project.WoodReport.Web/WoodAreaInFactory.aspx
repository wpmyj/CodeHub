﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WoodAreaInFactory.aspx.cs" Inherits="Wodeyun.Project.WoodReport.Web.WoodAreaInFactory" %>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Wodeyun Project WoodReport</title>
    <link href="/Scripts/easyui/themes/default/easyui.css" rel="stylesheet" type="text/css" />
    <link href="/Scripts/easyui/themes/icon.css" rel="stylesheet" type="text/css" />
    <link href="/Styles/Style.css" rel="stylesheet" type="text/css" />
    <script src="/Scripts/jquery/jquery-1.8.0.min.js"></script>
    <script src="/Scripts/easyui/jquery.easyui.min.js" type="text/javascript"></script>
    <script src="/Scripts/easyui/datagrid-groupview.js" type="text/javascript"></script>
    <script src="/Scripts/easyui/locale/easyui-lang-zh_CN.js" type="text/javascript"></script>
    <script src="/Scripts/json/json2.js" type="text/javascript"></script>
    <script src="/Scripts/moment/moment.min.js" type="text/javascript"></script>
    <script src="/Scripts/Javascript.js"></script>
    <script src="/Scripts/WoodAreaInFactory.js"></script>
</head>
<body>
    <form>
        <table width="100%" height="100%">
            <tr>
                <td height="28px">
                    <table>
                        <tr>
                            <td id="Buttons">
                                <a href="#" class="easyui-linkbutton" plain="true"><font color="red">本月</font></a>
                                <a href="#" class="easyui-linkbutton" plain="true"><font color="normal">上月</font></a>
                                <a href="#" class="easyui-linkbutton" plain="true"><font color="normal">Month 2</font></a>
                                <a href="#" class="easyui-linkbutton" plain="true"><font color="normal">Month 3</font></a>
                                <a href="#" class="easyui-linkbutton" plain="true"><font color="normal">Month 4</font></a>
                                <a href="#" class="easyui-linkbutton" plain="true"><font color="normal">Month 5</font></a>
                                <a href="#" class="easyui-linkbutton" plain="true"><font color="normal">Month 6</font></a>
                                <a href="#" class="easyui-linkbutton" plain="true"><font color="normal">Month 7</font></a>
                                <a href="#" class="easyui-linkbutton" plain="true"><font color="normal">Month 8</font></a>
                                <a href="#" class="easyui-linkbutton" plain="true"><font color="normal">Month 9</font></a>
                                <a href="#" class="easyui-linkbutton" plain="true"><font color="normal">Month 10</font></a>
                                <a href="#" class="easyui-linkbutton" plain="true"><font color="normal">Month 11</font></a>
                            </td>
                            <td>
                                <input id="Year" class="easyui-numberspinner" style="width: 52px;" /></td>
                            <td>年</td>
                            <td class="Td-Combo">
                                <select id="Month" class="easyui-combobox" style="width: 48px">
                                    <option value="01" selected>01月</option>
                                    <option value="02">02月</option>
                                    <option value="03">03月</option>
                                    <option value="04">04月</option>
                                    <option value="05">05月</option>
                                    <option value="06">06月</option>
                                    <option value="07">07月</option>
                                    <option value="08">08月</option>
                                    <option value="09">09月</option>
                                    <option value="10">10月</option>
                                    <option value="11">11月</option>
                                    <option value="12">12月</option>
                                </select>
                            </td>
                            <td>
                                <img id="Query" class="Button" style="display: normal" src="/Images/Query.gif" /></td>
                            <td style="width: 10px">&nbsp;</td>
                            <td>
                                <img id="Excel" class="Button" style="display: normal" src="/Images/Excel.gif" /></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table id="Grid" class="easyui-datagrid" fit="true" data-options="singleSelect:true,
                        rownumbers:false,
                        pagination:true,
                        pageSize:15,
                        pageList:[15,50,100,Setter.Max]">
                        <thead>
                            <tr>
                                <th data-options="field:'Area'" width="150px">片区</th>
                                <th data-options="field:'Bang_Time'" width="100px">首磅日期</th>
                                <th data-options="field:'jWeight'" width="100px">净重(吨)</th>
                                <th data-options="field:'SumjWeight'" width="100px">净重合计(吨)</th>
                                <th data-options="field:'scale'" width="100px">占比(%)</th>
                                <th data-options="field:'Totalscale'" width="100px">总占比(%)</th>
                            </tr>
                        </thead>
                    </table>
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
