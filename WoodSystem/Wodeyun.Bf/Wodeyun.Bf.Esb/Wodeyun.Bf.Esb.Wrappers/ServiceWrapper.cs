//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.18034
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Wodeyun.Bf.Esb.Wrappers
{
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="Wodeyun.Bf.Esb.Wrappers.IServiceInterface")]
    public interface IServiceInterface
    {
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/SaveEntity", ReplyAction="http://tempuri.org/IBaseInterface/SaveEntityResponse")]
        Wodeyun.Gf.Entities.Entity SaveEntity(Wodeyun.Gf.Entities.Entity entity);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/SaveEntities", ReplyAction="http://tempuri.org/IBaseInterface/SaveEntitiesResponse")]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(object[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(int[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.EntityCollection))]
        Wodeyun.Gf.Entities.Entity SaveEntities(object[] entities);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/DeleteEntityByUnique", ReplyAction="http://tempuri.org/IBaseInterface/DeleteEntityByUniqueResponse")]
        Wodeyun.Gf.Entities.Entity DeleteEntityByUnique(int unique);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/DeleteEntitiesByUniques", ReplyAction="http://tempuri.org/IBaseInterface/DeleteEntitiesByUniquesResponse")]
        Wodeyun.Gf.Entities.Entity DeleteEntitiesByUniques(int[] uniques);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetEntityByField", ReplyAction="http://tempuri.org/IBaseInterface/GetEntityByFieldResponse")]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(object[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(int[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.EntityCollection))]
        Wodeyun.Gf.Entities.Entity GetEntityByField(string field, object value, string connect);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetEntities", ReplyAction="http://tempuri.org/IBaseInterface/GetEntitiesResponse")]
        Wodeyun.Gf.Entities.EntityCollection GetEntities();
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetEntitiesWithDeletedAndUpdated", ReplyAction="http://tempuri.org/IBaseInterface/GetEntitiesWithDeletedAndUpdatedResponse")]
        Wodeyun.Gf.Entities.EntityCollection GetEntitiesWithDeletedAndUpdated();
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetEntitiesByStartAndLength", ReplyAction="http://tempuri.org/IBaseInterface/GetEntitiesByStartAndLengthResponse")]
        Wodeyun.Gf.Entities.EntityCollection GetEntitiesByStartAndLength(int start, int length);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetEntitiesWithDeletedAndUpdatedByStartAndLengt" +
            "h", ReplyAction="http://tempuri.org/IBaseInterface/GetEntitiesWithDeletedAndUpdatedByStartAndLengt" +
            "hResponse")]
        Wodeyun.Gf.Entities.EntityCollection GetEntitiesWithDeletedAndUpdatedByStartAndLength(int start, int length);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetEntitiesByField", ReplyAction="http://tempuri.org/IBaseInterface/GetEntitiesByFieldResponse")]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(object[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(int[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.EntityCollection))]
        Wodeyun.Gf.Entities.EntityCollection GetEntitiesByField(string field, object value, string connect);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetEntitiesWithDeletedAndUpdatedByField", ReplyAction="http://tempuri.org/IBaseInterface/GetEntitiesWithDeletedAndUpdatedByFieldResponse" +
            "")]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(object[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(int[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.EntityCollection))]
        Wodeyun.Gf.Entities.EntityCollection GetEntitiesWithDeletedAndUpdatedByField(string field, object value, string connect);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetEntitiesByFieldAndStartAndLength", ReplyAction="http://tempuri.org/IBaseInterface/GetEntitiesByFieldAndStartAndLengthResponse")]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(object[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(int[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.EntityCollection))]
        Wodeyun.Gf.Entities.EntityCollection GetEntitiesByFieldAndStartAndLength(string field, object value, string connect, int start, int length);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetEntitiesWithDeletedAndUpdatedByFieldAndStart" +
            "AndLength", ReplyAction="http://tempuri.org/IBaseInterface/GetEntitiesWithDeletedAndUpdatedByFieldAndStart" +
            "AndLengthResponse")]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(object[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(int[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.EntityCollection))]
        Wodeyun.Gf.Entities.EntityCollection GetEntitiesWithDeletedAndUpdatedByFieldAndStartAndLength(string field, object value, string connect, int start, int length);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetEntitiesByFilter", ReplyAction="http://tempuri.org/IBaseInterface/GetEntitiesByFilterResponse")]
        Wodeyun.Gf.Entities.EntityCollection GetEntitiesByFilter(Wodeyun.Gf.Entities.Entity filter, Wodeyun.Gf.Entities.Entity connector);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetEntitiesWithDeletedAndUpdatedByFilter", ReplyAction="http://tempuri.org/IBaseInterface/GetEntitiesWithDeletedAndUpdatedByFilterRespons" +
            "e")]
        Wodeyun.Gf.Entities.EntityCollection GetEntitiesWithDeletedAndUpdatedByFilter(Wodeyun.Gf.Entities.Entity filter, Wodeyun.Gf.Entities.Entity connector);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetEntitiesByFilterAndStartAndLength", ReplyAction="http://tempuri.org/IBaseInterface/GetEntitiesByFilterAndStartAndLengthResponse")]
        Wodeyun.Gf.Entities.EntityCollection GetEntitiesByFilterAndStartAndLength(Wodeyun.Gf.Entities.Entity filter, Wodeyun.Gf.Entities.Entity connector, int start, int length);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetEntitiesWithDeletedAndUpdatedByFilterAndStar" +
            "tAndLength", ReplyAction="http://tempuri.org/IBaseInterface/GetEntitiesWithDeletedAndUpdatedByFilterAndStar" +
            "tAndLengthResponse")]
        Wodeyun.Gf.Entities.EntityCollection GetEntitiesWithDeletedAndUpdatedByFilterAndStartAndLength(Wodeyun.Gf.Entities.Entity filter, Wodeyun.Gf.Entities.Entity connector, int start, int length);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetGridByMethodAndFieldsAndUnique", ReplyAction="http://tempuri.org/IBaseInterface/GetGridByMethodAndFieldsAndUniqueResponse")]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(object[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(int[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.EntityCollection))]
        Wodeyun.Gf.Entities.EntityCollection GetGridByMethodAndFieldsAndUnique(string method, object[] args, object[] fields, string unique);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetTreeByMethodAndFields", ReplyAction="http://tempuri.org/IBaseInterface/GetTreeByMethodAndFieldsResponse")]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(object[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(int[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.EntityCollection))]
        Wodeyun.Gf.Entities.EntityCollection GetTreeByMethodAndFields(string method, object[] args, object[] fields);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetGridByMethodAndParent", ReplyAction="http://tempuri.org/IBaseInterface/GetGridByMethodAndParentResponse")]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(object[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(int[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.EntityCollection))]
        Wodeyun.Gf.Entities.EntityCollection GetGridByMethodAndParent(string method, object[] args, string parent);
        
        [System.ServiceModel.Web.WebInvoke(BodyStyle = System.ServiceModel.Web.WebMessageBodyStyle.Wrapped)]
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IBaseInterface/GetTreeByMethodAndParentAndUniqueAndName", ReplyAction="http://tempuri.org/IBaseInterface/GetTreeByMethodAndParentAndUniqueAndNameRespons" +
            "e")]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(object[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(int[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.Entity[]))]
        [System.ServiceModel.ServiceKnownTypeAttribute(typeof(Wodeyun.Gf.Entities.EntityCollection))]
        Wodeyun.Gf.Entities.EntityCollection GetTreeByMethodAndParentAndUniqueAndName(string method, object[] args, string parent, string unique, string name);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IServiceInterfaceChannel : Wodeyun.Bf.Esb.Wrappers.IServiceInterface, System.ServiceModel.IClientChannel
    {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class ServiceInterfaceClient : System.ServiceModel.ClientBase<Wodeyun.Bf.Esb.Wrappers.IServiceInterface>, Wodeyun.Bf.Esb.Wrappers.IServiceInterface
    {
        
        public ServiceInterfaceClient()
        {
        }
        
        public ServiceInterfaceClient(string endpointConfigurationName) : 
                base(endpointConfigurationName)
        {
        }
        
        public ServiceInterfaceClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress)
        {
        }
        
        public ServiceInterfaceClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress)
        {
        }
        
        public ServiceInterfaceClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress)
        {
        }
        
        public Wodeyun.Gf.Entities.Entity SaveEntity(Wodeyun.Gf.Entities.Entity entity)
        {
            return base.Channel.SaveEntity(entity);
        }
        
        public Wodeyun.Gf.Entities.Entity SaveEntities(object[] entities)
        {
            return base.Channel.SaveEntities(entities);
        }
        
        public Wodeyun.Gf.Entities.Entity DeleteEntityByUnique(int unique)
        {
            return base.Channel.DeleteEntityByUnique(unique);
        }
        
        public Wodeyun.Gf.Entities.Entity DeleteEntitiesByUniques(int[] uniques)
        {
            return base.Channel.DeleteEntitiesByUniques(uniques);
        }
        
        public Wodeyun.Gf.Entities.Entity GetEntityByField(string field, object value, string connect)
        {
            return base.Channel.GetEntityByField(field, value, connect);
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetEntities()
        {
            return base.Channel.GetEntities();
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetEntitiesWithDeletedAndUpdated()
        {
            return base.Channel.GetEntitiesWithDeletedAndUpdated();
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetEntitiesByStartAndLength(int start, int length)
        {
            return base.Channel.GetEntitiesByStartAndLength(start, length);
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetEntitiesWithDeletedAndUpdatedByStartAndLength(int start, int length)
        {
            return base.Channel.GetEntitiesWithDeletedAndUpdatedByStartAndLength(start, length);
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetEntitiesByField(string field, object value, string connect)
        {
            return base.Channel.GetEntitiesByField(field, value, connect);
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetEntitiesWithDeletedAndUpdatedByField(string field, object value, string connect)
        {
            return base.Channel.GetEntitiesWithDeletedAndUpdatedByField(field, value, connect);
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetEntitiesByFieldAndStartAndLength(string field, object value, string connect, int start, int length)
        {
            return base.Channel.GetEntitiesByFieldAndStartAndLength(field, value, connect, start, length);
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetEntitiesWithDeletedAndUpdatedByFieldAndStartAndLength(string field, object value, string connect, int start, int length)
        {
            return base.Channel.GetEntitiesWithDeletedAndUpdatedByFieldAndStartAndLength(field, value, connect, start, length);
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetEntitiesByFilter(Wodeyun.Gf.Entities.Entity filter, Wodeyun.Gf.Entities.Entity connector)
        {
            return base.Channel.GetEntitiesByFilter(filter, connector);
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetEntitiesWithDeletedAndUpdatedByFilter(Wodeyun.Gf.Entities.Entity filter, Wodeyun.Gf.Entities.Entity connector)
        {
            return base.Channel.GetEntitiesWithDeletedAndUpdatedByFilter(filter, connector);
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetEntitiesByFilterAndStartAndLength(Wodeyun.Gf.Entities.Entity filter, Wodeyun.Gf.Entities.Entity connector, int start, int length)
        {
            return base.Channel.GetEntitiesByFilterAndStartAndLength(filter, connector, start, length);
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetEntitiesWithDeletedAndUpdatedByFilterAndStartAndLength(Wodeyun.Gf.Entities.Entity filter, Wodeyun.Gf.Entities.Entity connector, int start, int length)
        {
            return base.Channel.GetEntitiesWithDeletedAndUpdatedByFilterAndStartAndLength(filter, connector, start, length);
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetGridByMethodAndFieldsAndUnique(string method, object[] args, object[] fields, string unique)
        {
            return base.Channel.GetGridByMethodAndFieldsAndUnique(method, args, fields, unique);
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetTreeByMethodAndFields(string method, object[] args, object[] fields)
        {
            return base.Channel.GetTreeByMethodAndFields(method, args, fields);
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetGridByMethodAndParent(string method, object[] args, string parent)
        {
            return base.Channel.GetGridByMethodAndParent(method, args, parent);
        }
        
        public Wodeyun.Gf.Entities.EntityCollection GetTreeByMethodAndParentAndUniqueAndName(string method, object[] args, string parent, string unique, string name)
        {
            return base.Channel.GetTreeByMethodAndParentAndUniqueAndName(method, args, parent, unique, name);
        }
    }
}
