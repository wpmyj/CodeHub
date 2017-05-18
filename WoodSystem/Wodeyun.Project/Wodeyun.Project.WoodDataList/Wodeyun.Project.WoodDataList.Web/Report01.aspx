﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Report01.aspx.cs" Inherits="Wodeyun.Project.WoodDataList.Web.Report01" %>

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Wodeyun Project WoodDataList</title>
    <link href="/Scripts/easyui/themes/default/easyui.css" rel="stylesheet" type="text/css" />
    <link href="/Scripts/easyui/themes/icon.css" rel="stylesheet" type="text/css" />
    <link href="/Styles/Style.css" rel="stylesheet" type="text/css" />
    <script src="/Scripts/jquery/jquery-1.8.0.min.js"></script>
    <script src="/Scripts/easyui/jquery.easyui.min.js" type="text/javascript"></script>
    <script src="/Scripts/easyui/locale/easyui-lang-zh_CN.js" type="text/javascript"></script>
    <script src="/Scripts/json/json2.js" type="text/javascript"></script>
    <script src="/Scripts/moment/moment.min.js" type="text/javascript"></script>
    <script src="/Scripts/Javascript.js"></script>
    <script src="/Scripts/Report01.js"></script>
  </head>
  <body>
    <form>
      <table width="100%" height="100%">
        <tr>
          <td height="28px">
            <table>
              <tr>
                <td>进站时间从</td>
                <td><input id="txtStartDate" type="text" class="easyui-datebox" style="width:100px;" /></td>
                <td style="width:10px">到</td>
                <td><input id="txtEndDate" type="text" class="easyui-datebox" style="width:100px;" /></td>
                <td style="width:10px">&nbsp;</td>
                  <td>站点:</td>
                  <td><input id="txtPlace" type="text" style="width:60px;" /></td>
                <td style="width:10px">&nbsp;</td>
                  <td>货主:</td>
                  <td><input id="txtSupplier" type="text" style="width:60px;" /></td>
                <td style="width:10px">&nbsp;</td>
                  <td>车牌号:</td>
                  <td><input id="txtLicense" type="text" style="width:80px;" /></td>
                <td style="width:10px">&nbsp;</td>
                <td><img id="Query" class="Button" style="display:normal" src="/Images/Query.gif" /></td>
                <td style="width:20px">&nbsp;</td>
                <td><img id="Excel" class="Button" style="display:normal" src="/Images/Excel.gif" /></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table id="Grid" class="easyui-datagrid" fit="true" data-options="singleSelect:true,rownumbers:true,pagination:true,pageSize:15,pageList:[15,50,100,Setter.Max]">
		          <thead>
			          <tr>
				  <th data-options="field:'Place'" width="50px">站 点</th>
                  <th data-options="field:'TimeOfStation'" width="100px">进站时间</th>
                  <th data-options="field:'License'" width="75px">车牌号</th>
                  <th data-options="field:'GPS'" width="100px">GPS（发卡点）</th>
                  <th data-options="field:'PhotoNumber'" width="60px">共有照片</th>
                  <th data-options="field:'Description'" width="60px">工作人员</th>
				  <th data-options="field:'Tree'" width="55px">品 种</th>
                  <th data-options="field:'Area'" width="120px">木材来源</th>
                  <th data-options="field:'Supplier'" width="40px">货 主</th>
                  <th data-options="field:'ArriveDate'" width="100px">到厂时间</th>
			      </tr>
		          </thead>
	          </table>
          </td>
        </tr>
      </table>
    </form>
  </body>
</html>
