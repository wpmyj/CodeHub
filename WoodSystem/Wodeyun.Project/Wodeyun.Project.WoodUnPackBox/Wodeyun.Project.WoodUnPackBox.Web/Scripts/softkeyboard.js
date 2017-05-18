var inputContorl; //�����ؼ�����
var capsLockFlag; //��ĸ��Сд״̬��ʶ
capsLockFlag = true;

window.onload = function () {
    inputContorl = null;
    InitCalc();
}

// ��ȡԪ�ص�����
// ������oElement - Ԫ�ض���
function GetElementPos(oElement) {
    var x2 = 0;
    var y2 = 0;
    var width = oElement.offsetWidth;
    var height = oElement.offsetHeight;
    if (typeof (oElement.offsetParent) != 'undefined') {
        for (var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent) {
            posX += oElement.offsetLeft;
            posY += oElement.offsetTop;
        }
        x2 = posX + width;
        y2 = posY + height;
        return [posX, posY, x2, y2];
    }
    else {
        x2 = oElement.x + width;
        y2 = oElement.y + height;
        return [oElement.x, oElement.y, x2, y2];
    }
}

//��������̸�����
function InitCalc() {
    var objTempDiv = document.createElement("div");
    objTempDiv.innerHTML = "<div align=\"center\" id=\"softkeyboard\" name=\"softkeyboard\" style=\"position:absolute; left:0px; top:0px; width:auto; z-index:180;display:none; border:1px solid #B5ADF1;\"></div>";
    document.body.appendChild(objTempDiv);
}

//��������еĸ���ť�ĵ���¼��������ð�ť��CSS��ʽ
function BindCalcButtonClick() {
    var arrElemenOfButton = document.getElementById("softkeyboard").getElementsByTagName("input");
    var elemenNum = arrElemenOfButton.length;

    var tempElem;
    var tempButtonValue;

    for (var i = 0; i < elemenNum; i++) {
        tempElem = arrElemenOfButton[i];
        if (tempElem.getAttribute("bgtype") == null) continue; //ע�����bgtype�ǰ�ť���Զ�������
        if (tempElem.getAttribute("bgtype") == "n") {
            tempElem.className = "btn_num";
        }
        else if (tempElem.getAttribute("bgtype") == "l") {
            tempElem.className = "btn_letter";
        }
        else if (tempElem.getAttribute("bgtype") == "z") {
            tempElem.className = "btn_chinese";
        }
        else continue;

        tempButtonValue = tempElem.value;
        tempButtonValue = tempButtonValue.trim();
        if (tempButtonValue != "") {
            if (window.addEventListener) { // Mozilla, Netscape, Firefox
                tempElem.addEventListener('click', AddValue, false);
            } else { // IE
                tempElem.attachEvent('onclick', function () { AddValue(); });
            }
        }
    }
}

//�ַ���ȥ�����߿ո�
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

//���û���ѡ��ֵ��ʱ��ʾ�������ؼ��������Ѹ��������ؼ����������������볤�����˿���
function AddValue() {
    var srcElm = document.all ? window.event.srcElement : event.target;
    var thisButtonValue = srcElm.value;
    thisButtonValue = thisButtonValue.trim();
    if (inputContorl.value.length < inputContorl.maxLength) {
        inputContorl.value += thisButtonValue;
    }
}

//�������
//����:objTextBox -�����ؼ�����boardType -��������ͣ����紿�����ͣ�����ĸ�ͣ������Ǻ����ͣ�
function showkeyboard(objTextBox, boardType) {
    inputContorl = objTextBox;
    inputContorl.readOnly = 1;
    inputContorl.value = "";
    inputContorl.blur();
    capsLockFlag = true;

    /* ����Ҫ��ʾ�����ݲ���ʾ */
    var strHtml = "";

    /*  ����ʱע�����ڲ��table��id=tblCalc
        ÿ��ֵbutton��ť�����Զ�������bgtype */
    switch (boardType) {
        case "letter":
            {
                //����ĸ
                strHtml = "<table align=\"center\" style=\"border-width:0px;\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"table_title\" style=\"cursor: default;height:30px;vertical-align:middle; background-color:#B5ADF1; text-align:right;\"><span style=\"font-weight:bold; font-size:13px; color:#075BC3;\">�����</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class=\"btn_input\" type=\"button\" value=\"ʹ�ü�������\" onclick=\"closekeyboard(); inputContorl.value = ''; inputContorl.readOnly = 0; inputContorl.focus();\" /></td></tr><tr style=\"text-align:center;\"><td style=\"background-color:#FFFFFF;\"><table cellspacing=\"1\" cellpadding=\"0\"><tr><td><input bgtype=\"l\" type=\"button\" value=\" A \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" B \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" C \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" D \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" E \" /></td><td rowspan=\"2\"><input class=\"btn_letter\" type=\"button\" value=\"�˸�\" onclick=\"setpassvalue();\" style=\"width:60px; height:42px;\" /></td></tr><tr><td><input bgtype=\"l\" type=\"button\" value=\" F \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" G \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" H \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" I \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" J \" /></td></tr><tr><td><input bgtype=\"l\" type=\"button\" value=\" K \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" L \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" M \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" N \" /></td><td colspan=\"2\" rowspan=\"2\"><input class=\"btn_letter\" type=\"button\" onclick=\"capsLockText();\" value=\"�л���/Сд\" style=\"width:100%;height:42px;\" /></td></tr><tr><td><input bgtype=\"l\" type=\"button\" value=\" P \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" Q \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" R \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" S \" /></td></tr><tr><td><input bgtype=\"l\" type=\"button\" value=\" U \" /></td><td> <input bgtype=\"l\" type=\"button\" value=\" V \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" W \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" Y \" /></td><td colspan=\"2\" rowspan=\"2\"><input class=\"btn_letter\" type=\"button\" onclick=\"OverInput();\" value=\"ȷ��\" style=\"width:100%; height:42px;\" /></td></tr><tr><td><input bgtype=\"l\" type=\"button\" value=\" Z \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" O \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" T \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" X \" /></td></tr></table></td></tr></table>";
                break;
            }
        case "number":
            {
                //������
                strHtml = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-width:0px;\"><tr><td class=\"table_title\"  align=\"right\" valign=\"middle\" style=\"cursor: default;height:30px;background-color:#B5ADF1;\"><span style=\"font-weight:bold; font-size:13px; color:#075BC3;\">�����</span>&nbsp;<input class=\"btn_input\" type=\"button\" value=\"ʹ�ü�������\" onclick=\"closekeyboard(); inputContorl.value = ''; inputContorl.readOnly = 0; inputContorl.focus();\" style=\"width:86px;\" /></td></tr><tr align=\"center\"><td align=\"center\" bgcolor=\"#FFFFFF\"><table align=\"center\" border=\"0\" cellspacing=\"1\" cellpadding=\"0\"><tr align=\"left\" valign=\"middle\"><td><input type=\"button\" bgtype=\"n\" value=\" 1 \" /></td><td><input type=\"button\" bgtype=\"n\" value=\" 2 \" /></td><td><input type=\"button\" bgtype=\"n\" value=\" 3 \" /></td><td><input bgtype=\"n\" type=\"button\" value=\" 0 \" /></td><td><input class=\"btn_letter\" type=\"button\" value=\" �˸� \" onclick=\"setpassvalue();\"  style=\"width:60px;\" \></td></tr><tr align=\"left\" valign=\"middle\"><td><input type=\"button\" bgtype=\"n\" value=\" 4 \"></td><td><input type=\"button\" bgtype=\"n\" value=\" 5 \"></td><td><input type=\"button\" bgtype=\"n\" value=\" 6 \" /></td><td><input type=\"button\" bgtype=\"n\" value=\" . \" /></td><td><input class=\"btn_letter\" type=\"button\" disabled=\"disabled\" value=\"A-a\" style=\"width:60px;\" /></td></tr><tr align=\"left\" valign=\"middle\"><td><input type=\"button\" bgtype=\"n\" value=\" 7 \" /></td><td><input type=\"button\" bgtype=\"n\" value=\" 8 \" /></td><td><input type=\"button\" bgtype=\"n\" value=\" 9 \" /></td><td colspan=\"2\"><input class=\"btn_letter\" type=\"button\" onclick=\"OverInput();\" value=\"   ȷ��  \" style=\"width:86px;\" /></td></tr></table></td></tr></table>";
                break;
            }
        case "chinese":
            {
                //������
                strHtml = "<table align=\"center\" style=\"border-width:0px;\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"table_title\" style=\"cursor: default;height:34px;vertical-align:middle; background-color:#B5ADF1; text-align:right;\"><span style=\"font-weight:bold; font-size:13px; color:#075BC3;\">�����</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class=\"btn_input\" type=\"button\" value=\"ʹ�ü�������\" onclick=\"closekeyboard(); inputContorl.value = ''; inputContorl.readOnly = 0; inputContorl.focus();\" /></td></tr><tr style=\"text-align:center;\"><td style=\"background-color:#FFFFFF;\"><table cellspacing=\"1\" cellpadding=\"0\"><tr><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" ǭ \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td colspan=\"2\" rowspan=\"2\"><input class=\"btn_letter\" type=\"button\" onclick=\"OverInput();\" value=\"ȷ��\" style=\"width:100%; height:49px;\" /></td></tr><tr><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td></tr><tr><td><input bgtype=\"z\" type=\"button\" value=\" ԥ \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" ³ \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td colspan=\"2\" rowspan=\"2\"><input class=\"btn_letter\" type=\"button\" value=\"�˸�\" onclick=\"setpassvalue();\" style=\"width:100%; height:48px;\" /></td></tr><tr><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td></tr><tr><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td></tr><tr><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" ̨ \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td><td><input bgtype=\"z\" type=\"button\" value=\" �� \" /></td></tr></table></td></tr></table>";
                break;
            }
        case "numlet":
            {
                //���ֺ���ĸ
                strHtml = "<div align=\"center\" id=\"softkeyboard\" name=\"softkeyboard\" style=\"position:absolute; left:0px; top:0px; width:auto; z-index:180;display:block; border:1px solid #B5ADF1;\"><table align=\"center\" style=\"border-width:0px;\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"table_title\" style=\"cursor: default;height:30px;vertical-align:middle; background-color:#B5ADF1; text-align:right;\"><span style=\"font-weight:bold; font-size:13px; color:#075BC3;\">�����</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class=\"btn_input\" type=\"button\" value=\"ʹ�ü�������\" onclick=\"closekeyboard(); inputContorl.value = ''; inputContorl.readOnly = 0; inputContorl.focus();\" /></td></tr><tr style=\"text-align:center;\"><td style=\"background-color:#FFFFFF;\"><table cellspacing=\"1\" cellpadding=\"0\"><tr><td><input bgtype=\"n\" type=\"button\" value=\" . \" /></td><td><input bgtype=\"n\" type=\"button\" value=\" 0 \" /></td><td><input bgtype=\"n\" type=\"button\" value=\" 1 \" /></td><td><input bgtype=\"n\" type=\"button\" value=\" 2 \" /></td><td><input bgtype=\"n\" type=\"button\" value=\" 3 \" /></td><td><input bgtype=\"n\" type=\"button\" value=\" 4 \" /></td><td><input bgtype=\"n\" type=\"button\" value=\" 5 \" /></td><td><input bgtype=\"n\" type=\"button\" value=\" 6 \" /></td></tr><tr><td><input bgtype=\"n\" type=\"button\" value=\" 7 \" /></td><td><input bgtype=\"n\" type=\"button\" value=\" 8 \" /></td><td><input bgtype=\"n\" type=\"button\" value=\" 9 \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" A \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" B \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" C \" /></td><td colspan=\"2\" rowspan=\"2\"><input class=\"btn_letter\" type=\"button\" onclick=\"OverInput();\" value=\"ȷ��\" style=\"width:100%; height:42px;\" /></td></tr><tr><td><input bgtype=\"l\" type=\"button\" value=\" D \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" E \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" F \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" G \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" H \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" I \" /></td></tr><tr><td><input bgtype=\"l\" type=\"button\" value=\" J \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" K \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" L \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" M \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" N \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" V \" /></td><td colspan=\"2\" rowspan=\"2\"><input class=\"btn_letter\" type=\"button\" value=\"�˸�\" onclick=\"setpassvalue();\" style=\"width:100%; height:42px;\" /></td></tr><tr><td><input bgtype=\"l\" type=\"button\" value=\" P \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" Q \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" R \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" S \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" T \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" U \" /></td></tr><tr><td><input bgtype=\"l\" type=\"button\" value=\" O \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" W \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" X \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" Y \" /></td><td><input bgtype=\"l\" type=\"button\" value=\" Z \" /></td><td colspan=\"3\"><input class=\"btn_letter\" type=\"button\" onclick=\"capsLockText();\" value=\"�л���/Сд\" style=\"width:100%;\" /></td></tr></table></td></tr></table></div>";
                break;
            }
    }

    var objKeyBoard = document.getElementById("softkeyboard");
    objKeyBoard.innerHTML = strHtml;

    BindCalcButtonClick();

    /* ��������ʾ */
    if (null != hideSelect) hideSelect();
    var pos = GetElementPos(inputContorl);
    objKeyBoard.style.top = pos[1] + 22 + "px";
    objKeyBoard.style.left = pos[0] + "px";
    objKeyBoard.style.display = "block";
}

//ǿ������ҳ���ϵ�selectԪ�أ���ֹ������DIV�ڸǲ�סselect
function hideSelect() {
    var arrSelectElem = document.getElementsByTagName("select");
    var selectElemNum = arrSelectElem.length;
    for (var i = 0; i < selectElemNum; i++) {
        arrSelectElem[i].style.visibility = "hidden";
    }
}

//�������
function OverInput() {
    closekeyboard();
    inputContorl.readOnly = 1;
    inputContorl.focus();
}

//�ر������
function closekeyboard() {
    document.getElementById("softkeyboard").style.display = "none";

    if (null != unhideSelect) unhideSelect();
}

//������ʾҳ���ﱻ���ص�selectԪ��
function unhideSelect() {
    var arrSelectElem = document.getElementsByTagName("select");
    var selectElemNum = arrSelectElem.length;
    for (var i = 0; i < selectElemNum; i++) {
        arrSelectElem[i].style.visibility = "visible";
    }
}

//��ĸ��Сд�л�
function capsLockText() {
    var arrElemenOfButton = document.getElementById("softkeyboard").getElementsByTagName("input");
    var elemenNum = arrElemenOfButton.length;

    var tempElem;
    var tempButtonValue;

    for (var i = 0; i < elemenNum; i++) {
        tempElem = arrElemenOfButton[i];
        if (tempElem.getAttribute("bgtype") == null) continue;
        if (tempElem.getAttribute("bgtype") == "l") {
            tempButtonValue = tempElem.value;
            tempButtonValue = tempButtonValue.trim();
            if (capsLockFlag) tempElem.value = " " + String.fromCharCode(tempButtonValue.charCodeAt(0) + 32) + " ";
            else tempElem.value = " " + String.fromCharCode(tempButtonValue.charCodeAt(0) - 32) + " "
        }
    }
    capsLockFlag = !capsLockFlag;
}

//�˸�
function setpassvalue() {
    var valueLength = inputContorl.value.length;
    var newValue = inputContorl.value.substr(0, valueLength - 1);
    inputContorl.value = newValue;
}