using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Net.Mail;
using System.Net;
using System.IO;


/// <summary>
/// Summary description for SendEmail
/// </summary>
public class SendEmails
{
    public SendEmails()
    {
        //
        // TODO: Add constructor logic here
        //
    }
    /// <summary>
    /// �����ʼ�
    /// </summary>
    /// <param name="arrStrTO">������</param>
    /// <param name="strFrom">������</param>
    /// <param name="senderDisplayName">����������</param>
    /// <param name="userPswd">�û�����</param>
    /// <param name="strSubject">�ʼ�����</param>
    /// <param name="strBody">�ʼ�����</param>
    /// <param name="strHost">�ʼ������ַ</param>
    /// <param name="port">�ʼ�����˿�</param>
    /// <param name="strFilePath">����·��</param>
    /// <returns>�ɹ�����true,ʧ�ܷ���false</returns>
    public bool SendEmailTo(string arrStrTO, string strFrom, string senderDisplayName, string userPswd, string strSubject, string strBody, string strHost, int port, string strFilePath)
    {
        //�����ʺŵĵ�¼��
        string username = strFrom;
        //�ʼ�������
        MailAddress from = new MailAddress(strFrom/*, senderDisplayName*/);
        //�ʼ�������
        MailAddress to = new MailAddress(arrStrTO);
        SmtpClient smtp = new SmtpClient(strHost, port);
        //��ʹ��Ĭ��ƾ�ݷ��ʷ�����
        smtp.UseDefaultCredentials = false;
        smtp.Credentials = new NetworkCredential(username, userPswd);
        //ʹ��network���͵�smtp������
        smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
        MailMessage mailobj = new MailMessage(from, to);
        //��ӷ��ͺͳ���
        // mailobj.To.Add(""); 
        // mailobj.CC.Add("");
        //�ʼ�����
        mailobj.Subject = strSubject;
        //�ʼ�����
        mailobj.Body = strBody;
        //�ʼ�����html��ʽ
        mailobj.IsBodyHtml = true;
        //�ʼ������ʽ
        mailobj.BodyEncoding = Encoding.UTF8;
        //�ʼ����ȼ�
        mailobj.Priority = MailPriority.High;
        if (strFilePath != "")
        {
            //��Ӹ���
            Attachment attachment = new Attachment(strFilePath);
            mailobj.Attachments.Add(attachment);
        }
        try
        {
            //��ʼ�����ʼ�
            smtp.Send(mailobj);
            return true;
        }
        catch
        {
            return false;
        }
    }










    /// <summary>
    /// �����ʼ�
    /// </summary>
    /// <param name="arrStrTO">�ռ��˵�ַ</param>
    /// <param name="arrStrCC">CC��ַ</param>
    /// <param name="strFrom">�����˵�ַ</param>
    /// <param name="strSubject">�ʼ�����</param>
    /// <param name="strBody">�ʼ�����</param>
    /// <param name="strAttPath">�����ļ���ַ</param>
    /// <param name="strHost">�ʼ���������ַ</param>
    /// <returns></returns>
    public string SendEmail(string arrStrTO, string strFrom, string strSubject, string strBody, string strAttPath, string strHost)
    {

        MailMessage mail = new MailMessage();
        //�ռ��˵�ַ
        mail.To.Add(arrStrTO);
        ////CC�˵�ַ
        //mail.CC.Add(arrStrCC);
        //�����˵�ַ
        mail.From = new MailAddress(strFrom);
        //�ʼ�����
        mail.Subject = strSubject;
        //�ʼ�����
        mail.Body = strBody;

        //�������ΪHTML��ҳ�����·���
        //StreamReader sr=new StreamReader(@"c:\\zhouqiang.htm",Encoding.GetEncoding("gb2312"));
        //mail.Body = sr.ReadToEnd();

        //�ʼ����ݸ�ʽ
        mail.IsBodyHtml = true;
        //��Ӹ���
        if (!string.IsNullOrEmpty(strAttPath))
        {
            mail.BodyEncoding = Encoding.GetEncoding("gb2312");
            Attachment att = new Attachment(@strAttPath);
            mail.Attachments.Add(att);
        }

        //SMTP����
        SmtpClient smtp = new SmtpClient();
        smtp.Host = strHost;
        try
        {
            //����
            smtp.Send(mail);
            return "ok";
        }
        catch (Exception ex)
        {
            return ex.Message.ToString();
        }
    }


    /// <summary>
    /// �����ʼ�
    /// </summary>
    /// <param name="arrStrTO">�ռ��˵�ַ</param>
    /// <param name="arrStrCC">CC��ַ</param>
    /// <param name="strFrom">�����˵�ַ</param>
    /// <param name="strSubject">�ʼ�����</param>
    /// <param name="strBody">�ʼ�����</param>
    /// <param name="strAttPath">�����ļ���ַ</param>
    /// <param name="strHost">�ʼ���������ַ</param>
    /// <returns></returns>
    public string SendErroeEmail(string[] arrStrTO, string[] arrStrCC, string strFrom, string strSubject, string strBody, string strAttPath, string strHost)
    {

        MailMessage mail = new MailMessage();
        //�ռ��˵�ַ
        if (arrStrTO != null && arrStrTO.Length > 0)
        {
            foreach (string strTO in arrStrTO)
            {
                mail.To.Add(strTO);
            }
        }
        //CC�˵�ַ
        if (arrStrCC != null && arrStrCC.Length > 0)
        {
            foreach (string strCC in arrStrCC)
            {
                mail.CC.Add(strCC);
            }
        }
        //�����˵�ַ
        mail.From = new MailAddress(strFrom);
        //�ʼ�����
        mail.Subject = strSubject;
        //�ʼ�����
        mail.Body = strBody;

        //�������ΪHTML��ҳ�����·���
        //StreamReader sr=new StreamReader(@"c:\\zhouqiang.htm",Encoding.GetEncoding("gb2312"));
        //mail.Body = sr.ReadToEnd();

        //�ʼ����ݸ�ʽ
        mail.IsBodyHtml = true;
        //��Ӹ���
        if (!string.IsNullOrEmpty(strAttPath))
        {
            mail.BodyEncoding = Encoding.GetEncoding("gb2312");
            Attachment att = new Attachment(@strAttPath);
            mail.Attachments.Add(att);
        }

        //SMTP����
        SmtpClient smtp = new SmtpClient();
        smtp.Host = strHost;
        try
        {
            //����
            smtp.Send(mail);
            return "ok";
        }
        catch (Exception ex)
        {
            return ex.Message.ToString();
        }
    }


    /// <summary>           
    /// ��HttpWebRequestȡ����ҳԴ��           
    /// ���ڴ�BOM����ҳ����Ч��������ʲô���붼����ȷʶ��           
    /// </summary>           
    /// <param name="url">��ҳ��ַ"</param>            
    /// <returns>������ҳԴ�ļ�</returns>           
    public static string GetHtmlSource(string url)
    {
        //��������
        string html = "";
        HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
        request.Accept = "*/*"; //���������ļ�
        // ģ��ʹ��IE�����
        request.UserAgent = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.1.4322)";
        request.AllowAutoRedirect = true;//�Ƿ�����302            
        //request.CookieContainer = new CookieContainer();//cookie������            
        request.Referer = url; //��ǰҳ�������             
        HttpWebResponse response = (HttpWebResponse)request.GetResponse();
        Stream stream = response.GetResponseStream();
        StreamReader reader = new StreamReader(stream, Encoding.UTF8);
        html = reader.ReadToEnd();
        stream.Close();
        return html;
    }

}
