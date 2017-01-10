"use strict";
var ModelEventName = (function () {
    function ModelEventName(modelName) {
        this.listChange = modelName + 'ListChange';
        this.contentChange = modelName + 'ContentChange';
        this.add = function (id) { return modelName + 'Add.' + id; };
        this.remove = function (id) { return modelName + 'Remove.' + id; };
        this.change = function (id) { return modelName + '.' + id; };
    }
    return ModelEventName;
}());
ModelEventName.AccountCategory = new ModelEventName('AccountCategory');
ModelEventName.AccountSystem = new ModelEventName('AccountSystem');
ModelEventName.Alert = new ModelEventName('Alert');
ModelEventName.AlertFilter = new ModelEventName('AlertFilter');
ModelEventName.AlertSettings = new ModelEventName('AlertSettings');
ModelEventName.AmazonS3Credentials = new ModelEventName('AmazonS3Credentials');
ModelEventName.BootEnvironment = new ModelEventName('BootEnvironment');
ModelEventName.Calendar = new ModelEventName('Calendar');
ModelEventName.CalendarTask = new ModelEventName('CalendarTask');
ModelEventName.CryptoCertificate = new ModelEventName('CryptoCertificate');
ModelEventName.Database = new ModelEventName('Database');
ModelEventName.Debug = new ModelEventName('Debug');
ModelEventName.DetachedVolume = new ModelEventName('DetachedVolume');
ModelEventName.Directory = new ModelEventName('Directory');
ModelEventName.DirectoryserviceConfig = new ModelEventName('DirectoryserviceConfig');
ModelEventName.DirectoryServices = new ModelEventName('DirectoryServices');
ModelEventName.Disk = new ModelEventName('Disk');
ModelEventName.DiskUsage = new ModelEventName('DiskUsage');
ModelEventName.DockerCollection = new ModelEventName('DockerCollection');
ModelEventName.DockerConfig = new ModelEventName('DockerConfig');
ModelEventName.DockerContainer = new ModelEventName('DockerContainer');
ModelEventName.DockerContainerBridge = new ModelEventName('DockerContainerBridge');
ModelEventName.DockerContainerCreator = new ModelEventName('DockerContainerCreator');
ModelEventName.DockerContainerLogs = new ModelEventName('DockerContainerLogs');
ModelEventName.DockerContainerSection = new ModelEventName('DockerContainerSection');
ModelEventName.DockerHost = new ModelEventName('DockerHost');
ModelEventName.DockerImage = new ModelEventName('DockerImage');
ModelEventName.DockerImagePull = new ModelEventName('DockerImagePull');
ModelEventName.EncryptedVolumeActions = new ModelEventName('EncryptedVolumeActions');
ModelEventName.EncryptedVolumeImporter = new ModelEventName('EncryptedVolumeImporter');
ModelEventName.FreenasCredentials = new ModelEventName('FreenasCredentials');
ModelEventName.Group = new ModelEventName('Group');
ModelEventName.ImportableDisk = new ModelEventName('ImportableDisk');
ModelEventName.Ipmi = new ModelEventName('Ipmi');
ModelEventName.KerberosKeytab = new ModelEventName('KerberosKeytab');
ModelEventName.KerberosRealm = new ModelEventName('KerberosRealm');
ModelEventName.Mail = new ModelEventName('Mail');
ModelEventName.NetworkConfig = new ModelEventName('NetworkConfig');
ModelEventName.NetworkHost = new ModelEventName('NetworkHost');
ModelEventName.NetworkInterface = new ModelEventName('NetworkInterface');
ModelEventName.NetworkInterfaceBridgeProperties = new ModelEventName('NetworkInterfaceBridgeProperties');
ModelEventName.NetworkInterfaceLaggProperties = new ModelEventName('NetworkInterfaceLaggProperties');
ModelEventName.NetworkInterfaceVlanProperties = new ModelEventName('NetworkInterfaceVlanProperties');
ModelEventName.NetworkRoute = new ModelEventName('NetworkRoute');
ModelEventName.NtpServer = new ModelEventName('NtpServer');
ModelEventName.Peer = new ModelEventName('Peer');
ModelEventName.Permissions = new ModelEventName('Permissions');
ModelEventName.Replication = new ModelEventName('Replication');
ModelEventName.ReplicationOptions = new ModelEventName('ReplicationOptions');
ModelEventName.RsyncdModule = new ModelEventName('RsyncdModule');
ModelEventName.Section = new ModelEventName('Section');
ModelEventName.SectionSettings = new ModelEventName('SectionSettings');
ModelEventName.Service = new ModelEventName('Service');
ModelEventName.ServiceDc = new ModelEventName('ServiceDc');
ModelEventName.ServiceDyndns = new ModelEventName('ServiceDyndns');
ModelEventName.ServicesCategory = new ModelEventName('ServicesCategory');
ModelEventName.ServiceUps = new ModelEventName('ServiceUps');
ModelEventName.Share = new ModelEventName('Share');
ModelEventName.SshCredentials = new ModelEventName('SshCredentials');
ModelEventName.SupportCategory = new ModelEventName('SupportCategory');
ModelEventName.SupportTicket = new ModelEventName('SupportTicket');
ModelEventName.SystemAdvanced = new ModelEventName('SystemAdvanced');
ModelEventName.SystemGeneral = new ModelEventName('SystemGeneral');
ModelEventName.SystemSection = new ModelEventName('SystemSection');
ModelEventName.SystemTime = new ModelEventName('SystemTime');
ModelEventName.SystemUi = new ModelEventName('SystemUi');
ModelEventName.Task = new ModelEventName('Task');
ModelEventName.Tunable = new ModelEventName('Tunable');
ModelEventName.Update = new ModelEventName('Update');
ModelEventName.User = new ModelEventName('User');
ModelEventName.Vm = new ModelEventName('Vm');
ModelEventName.VmConfig = new ModelEventName('VmConfig');
ModelEventName.VmDevice = new ModelEventName('VmDevice');
ModelEventName.VmReadme = new ModelEventName('VmReadme');
ModelEventName.VmVolume = new ModelEventName('VmVolume');
ModelEventName.VmwareCredentials = new ModelEventName('VmwareCredentials');
ModelEventName.VmwareDataset = new ModelEventName('VmwareDataset');
ModelEventName.VmwareDatastore = new ModelEventName('VmwareDatastore');
ModelEventName.Volume = new ModelEventName('Volume');
ModelEventName.VolumeDataset = new ModelEventName('VolumeDataset');
ModelEventName.VolumeDatasetProperties = new ModelEventName('VolumeDatasetProperties');
ModelEventName.VolumeDatasetPropertyAtime = new ModelEventName('VolumeDatasetPropertyAtime');
ModelEventName.VolumeDatasetPropertyCasesensitivity = new ModelEventName('VolumeDatasetPropertyCasesensitivity');
ModelEventName.VolumeDatasetPropertyCompression = new ModelEventName('VolumeDatasetPropertyCompression');
ModelEventName.VolumeDatasetPropertyDedup = new ModelEventName('VolumeDatasetPropertyDedup');
ModelEventName.VolumeDatasetPropertyQuota = new ModelEventName('VolumeDatasetPropertyQuota');
ModelEventName.VolumeDatasetPropertyRefquota = new ModelEventName('VolumeDatasetPropertyRefquota');
ModelEventName.VolumeDatasetPropertyRefreservation = new ModelEventName('VolumeDatasetPropertyRefreservation');
ModelEventName.VolumeDatasetPropertyReservation = new ModelEventName('VolumeDatasetPropertyReservation');
ModelEventName.VolumeDatasetPropertyVolblocksize = new ModelEventName('VolumeDatasetPropertyVolblocksize');
ModelEventName.VolumeImporter = new ModelEventName('VolumeImporter');
ModelEventName.VolumeSnapshot = new ModelEventName('VolumeSnapshot');
ModelEventName.VolumeVdevRecommendations = new ModelEventName('VolumeVdevRecommendations');
ModelEventName.ZfsTopology = new ModelEventName('ZfsTopology');
ModelEventName.ZfsVdev = new ModelEventName('ZfsVdev');
exports.ModelEventName = ModelEventName;