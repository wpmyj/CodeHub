path "C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0A\bin\NETFX 4.0 Tools"

svcutil "http://localhost:16020/WoodLaboratoryConfirmeService.svc?wsdl"^
        /o:"Wodeyun.Project.WoodLaboratoryConfirme.Wrappers\WoodLaboratoryConfirmeWrapper.cs"^
        /r:"..\..\Wodeyun.Gf\Wodeyun.Gf.Entities\bin\Debug\Wodeyun.Gf.Entities.dll"^
        /n:*,Wodeyun.Project.WoodLaboratoryConfirme.Wrappers^
        /syncOnly^
        /noConfig
				
path "..\..\Wodeyun.Gf\Wodeyun.Gf.Tools\Wodeyun.Gf.Tools.SvcFixer\bin\Debug"

Wodeyun.Gf.Tools.SvcFixer "Wodeyun.Project.WoodLaboratoryConfirme.Wrappers\WoodLaboratoryConfirmeWrapper.cs"
