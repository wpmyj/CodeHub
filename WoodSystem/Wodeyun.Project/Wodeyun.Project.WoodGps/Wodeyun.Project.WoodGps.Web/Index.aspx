﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="Wodeyun.Bf.WoodGps.Web.Index" %>

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Wodeyun Project WoodGps</title>
    <link href="/Scripts/easyui/themes/default/easyui.css" rel="stylesheet" type="text/css" />
    <link href="/Scripts/easyui/themes/icon.css" rel="stylesheet" type="text/css" />
    <link href="/Styles/Style.css" rel="stylesheet" type="text/css" />
    <script src="/Scripts/jquery/jquery-1.8.0.min.js"></script>
    <script src="/Scripts/easyui/jquery.easyui.min.js" type="text/javascript"></script>
    <script src="/Scripts/easyui/locale/easyui-lang-zh_CN.js" type="text/javascript"></script>
    <script src="/Scripts/json/json2.js" type="text/javascript"></script>
    <script src="/Scripts/moment/moment.min.js" type="text/javascript"></script>
    <script src="/Scripts/Javascript.js"></script>
    <script src="/Scripts/Index.js"></script>
  </head>
  <body>
    <form>
      <table width="100%" height="100%">
        <tr>
          <td width="400px" class="Td" style="vertical-align:top">
            <table id="Grid" class="easyui-datagrid" fit="true" data-options="singleSelect:true,rownumbers:true,pagination:true,pageSize:20">
		          <thead>
			          <tr>
				          <th data-options="field:'StationName'" width="371px">检查站名称</th>
			          </tr>
		          </thead>
	          </table>
          </td>
          <td width="400px" style="vertical-align:top">
            <table width="100%">
              <tr>
                <td id="Buttons" class="Td">
                  <img unique="Create" class="Button" src="/Images/Create.gif" />
                  <img unique="Delete" class="Button" style="display:none" src="/Images/Delete.gif" />
                  <img unique="Save" class="Button" style="display:none" src="/Images/Save.gif" />
                  <img unique="Cancel" class="Button" style="display:none" src="/Images/Cancel.gif" />
                  <img style="display:normal" src="/Images/Blank.gif" />
                </td>
              </tr>
              <tr>
                <td style="display:none;"><input id="Unique" type="text" title="序号" /></td>
              </tr>
            </table>
            <table width="100%">
              <tr>
                <td width="25%" class="Td">检查站名称：</td>
                <td width="75%" class="Td"><input id="txtStationName" type="text" class="easyui-validatebox" disabled="disabled" style="width:210px" data-options="required:true" maxlength="50" /> ( 如：隆安 )</td>
              </tr>
              <tr>
                <td class="Td">自动获取：</td>
                <td class="Td"><a id="aGetPos" href="JavaScript:void(0);" class="easyui-linkbutton" plain="false">获取当前所在的经纬度</a></td>
              </tr>
              <tr>
                <td class="Td">GPS纬度：</td>
                <td class="Td"><input id="txtLat" type="text" class="easyui-validatebox" disabled="disabled" style="width:100%" data-options="required:true" /></td>
              </tr>
              <tr>
                <td class="Td">GPS经度：</td>
                <td class="Td"><input id="txtLng" type="text" class="easyui-validatebox" disabled="disabled" style="width:100%" data-options="required:true" /></td>
              </tr>
              <tr>
                <td class="Td">&nbsp;</td>
                <td class="Td-Combo">
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td class="Td">&nbsp;</td>
                <td class="Td-Combo">
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td class="Td" style="vertical-align:top">说明：</td>
                <td class="Td-Combo">
                  请为每一个检查站设定好站点名称和GPS经纬度。
                  <br /><br />以便于分配检查站权限时指定哪些用户可以使用该检查站进行GPS定位拍照操作。
                  <br /><br />使用系统自动获取GPS经纬度时，请把平板电脑拿到检查站现场，开启木材收购系统，登录到当前页面后，点击按钮就可以自动获取。
                  <br /><br />注意！使用系统自动获取GPS经纬度功能时，请事先给该登录帐号分配好使用该平板电脑照相机的权限，以便登录者能使用安装在该平板电脑上的照相机功能和读取GPS经纬度的功能。
                </td>
              </tr>
            </table>
          </td>
          <td>&nbsp;</td>
        </tr>
      </table>
    </form>
  </body>
</html>
