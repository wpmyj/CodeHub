﻿using System;

using Wodeyun.Bf.Base.Webs;

namespace Wodeyun.Bf.Account.Web
{
    public partial class Index : BasePage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            this.No = "Account";
            this.Load();
        }
    }
}