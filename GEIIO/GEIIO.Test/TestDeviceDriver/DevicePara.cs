﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestDeviceDriver
{
    [Serializable]
    public class DevicePara:GEIIO.Device.DeviceParameter
    {
        public override object Repair()
        {
            return new DevicePara();
        }
    }
}
