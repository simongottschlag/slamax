(()=>{"use strict";var a={767:(a,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0});const n=s(16),r=s(286);function l(a){try{const e=(0,r.validateInput)(a);return(0,n.CalculateMaxSlaUseCase)(e)}catch(a){return console.log("ERROR",a),a.message}}e.default=l,l([{name:"aws-lambda"}])},531:(a,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createNewServiceSlaAggregate=void 0;const n=s(620),r=s(502);e.createNewServiceSlaAggregate=function(a){const{serviceEntries:e,serviceSlas:s,serviceNamesList:n}=a;return new l(e,s,n)};class l{constructor(a,e,s){this.serviceEntries=a,this.serviceSlas=e,this.serviceNamesList=s}getServiceSlasFromEntries(){const a=this.serviceEntries;if(!a||0===a.length)throw new n.MissingServiceEntriesError("Missing service entries!");return a.map((a=>{if(!a.sla)throw new r.ServiceMissingSlaError("Service is missing SLA!");return parseFloat(a.sla)}))}calculateMaxSla(){return this.getServiceSlasFromEntries().reduce(((a,e)=>parseFloat((a=e*a/100).toFixed(2))))}}},546:(a,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.serviceSlaData=void 0;const n=s(464),r=s(58),l=s(976);e.serviceSlaData=[...n.slaDataAws,...r.slaDataAzure,...l.slaDataGcp]},464:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.slaDataAws=void 0,e.slaDataAws=[{name:"alexa-for-business",sla:99.9},{name:"amazon-api-gateway",sla:99.95},{name:"amazon-appstream",sla:99.9},{name:"amazon-athena",sla:99.9},{name:"amazon-aurora",sla:99.99},{name:"amazon-braket",sla:99.9},{name:"amazon-chime",sla:99.9},{name:"amazon-chime-voice-connector",sla:99.99},{name:"amazon-cloud-directory",sla:99.9},{name:"amazon-cloudfront",sla:99.9},{name:"amazon-cloudsearch",sla:99.9},{name:"amazon-cloudwatch",sla:99.9},{name:"amazon-cognito",sla:99.9},{name:"amazon-compute",sla:99.99},{name:"amazon-compute-instance",sla:99.5},{name:"amazon-connect",sla:99.99},{name:"amazon-detective",sla:99.9},{name:"amazon-devops-guru",sla:99.9},{name:"amazon-documentdb",sla:99.9},{name:"amazon-dynamodb-globaltables",sla:99.999},{name:"amazon-dynamodb",sla:99.99},{name:"amazon-ecs",sla:99.9},{name:"amazon-efs-onezone",sla:99.9},{name:"amazon-efs",sla:99.99},{name:"amazon-ecr",sla:99.9},{name:"amazon-eks",sla:99.95},{name:"amazon-elb",sla:99.99},{name:"amazon-elastic-transcoder",sla:99.9},{name:"amazon-emr",sla:99.9},{name:"amazon-eventbridge",sla:99.99},{name:"amazon-finspace",sla:99.9},{name:"amazon-forecast",sla:99.95},{name:"amazon-fraud-detector",sla:99.9},{name:"amazon-fsx",sla:99.99},{name:"amazon-gamelift",sla:99.9},{name:"amazon-guardduty",sla:99.9},{name:"amazon-healthlake",sla:99.9},{name:"amazon-inspector",sla:99.9},{name:"amazon-interactive-video-service",sla:99.9},{name:"amazon-kendra",sla:99.9},{name:"amazon-keyspaces",sla:99.99},{name:"amazon-kinesis",sla:99.9},{name:"amazon-lightsail-instance",sla:99.99},{name:"amazon-lightsail-managed",sla:99.95},{name:"amazon-location",sla:99.9},{name:"amazon-lookout",sla:99.9},{name:"amazon-ml",sla:99.9},{name:"amazon-macie",sla:99.9},{name:"amazon-managed-blockchain",sla:99.9},{name:"amazon-managed-grafana",sla:99.9},{name:"amazon-msk",sla:99.9},{name:"amazon-mwaa",sla:99.9},{name:"amazon-memorydb",sla:99.9},{name:"amazon-messaging",sla:99.9},{name:"amazon-monitron",sla:99.9},{name:"amazon-mq",sla:99.9},{name:"amazon-neptune-multiaz",sla:99.9},{name:"amazon-nimble-studio",sla:99.9},{name:"amazon-opensearch",sla:99.9},{name:"amazon-personalize",sla:99.9},{name:"amazon-qldb",sla:99.9},{name:"amazon-quicksight",sla:99.9},{name:"amazon-rds-proxy",sla:99.99},{name:"amazon-redshift",sla:99.9},{name:"amazon-rekognition",sla:99.9},{name:"amazon-rds-multiaz",sla:99.95},{name:"amazon-route53",sla:100},{name:"amazon-s3-replication-time-control",sla:99.9},{name:"amazon-sagemaker-batch",sla:99.9},{name:"amazon-sagemaker-online",sla:99.95},{name:"amazon-s3",sla:99.9},{name:"amazon-simple-workflow",sla:99.9},{name:"amazon-simpledb",sla:99.9},{name:"amazon-textract",sla:99.9},{name:"amazon-timestream",sla:99.99},{name:"amazon-user-engagement",sla:99.9},{name:"amazon-vpc-ip",sla:99.9},{name:"amazon-vpc-nat-gateway",sla:99.9},{name:"amazon-workdocs",sla:99.9},{name:"amazon-worklink",sla:99.9},{name:"amazon-workmail",sla:99.9},{name:"amazon-workspaces",sla:99.9},{name:"aws-amplify",sla:99.95},{name:"aws-mgn",sla:99.9},{name:"aws-appsync",sla:99.95},{name:"aws-audit-manager",sla:99.9},{name:"aws-backup",sla:99.9},{name:"aws-budgets",sla:99.9},{name:"aws-certificate-manager-privateca",sla:99.9},{name:"aws-client-vpn",sla:99.9},{name:"aws-cloud-map",sla:99.95},{name:"aws-cloudhsm",sla:99.95},{name:"aws-cloudtrail",sla:99.9},{name:"aws-codeartifact",sla:99.9},{name:"aws-codebuild",sla:99.9},{name:"aws-codecommit",sla:99.9},{name:"aws-codedeploy",sla:99.9},{name:"aws-codepipeline",sla:99.9},{name:"aws-compute-optimizer",sla:99.9},{name:"aws-config",sla:99.9},{name:"aws-cost-explorer-api",sla:99.9},{name:"aws-data-pipeline",sla:99.9},{name:"aws-dms",sla:99.9},{name:"aws-device-farm",sla:99.9},{name:"aws-direct-connect-target-999",sla:99.9},{name:"aws-direct-connect-target-9999",sla:99.99},{name:"aws-directory-service",sla:99.9},{name:"aws-drs",sla:99.9},{name:"aws-elemental-mediaconnect",sla:99.9},{name:"aws-elemental-mediaconvert",sla:99.9},{name:"aws-elemental-medialive",sla:99.9},{name:"aws-elemental-mediapackage",sla:99.9},{name:"aws-elemental-mediastore",sla:99.9},{name:"aws-elemental-mediatailor",sla:99.9},{name:"aws-firewall-manager",sla:99.9},{name:"aws-global-accelerator",sla:99.99},{name:"aws-glue",sla:99.9},{name:"aws-ground-station",sla:99.9},{name:"aws-hybrid-storage-and-data-transfer",sla:99.9},{name:"aws-iot-1-click",sla:99.9},{name:"aws-iot-analytics",sla:99.9},{name:"aws-iot-core",sla:99.9},{name:"aws-iot-device-defender",sla:99.9},{name:"aws-iot-device-management",sla:99.9},{name:"aws-iot-events",sla:99.9},{name:"aws-iot-greengrass",sla:99.9},{name:"aws-iot-sitewise",sla:99.9},{name:"aws-iot-things-graph",sla:99.9},{name:"aws-kms",sla:99.999},{name:"aws-lambda",sla:99.95},{name:"aws-migration-hub-refactor-spaces",sla:99.9},{name:"aws-network-firewall",sla:99.99},{name:"aws-opsworks",sla:99.9},{name:"aws-privatelink",sla:99.9},{name:"aws-resilience-hub",sla:99.9},{name:"aws-robomaker",sla:99.9},{name:"aws-secrets-manager",sla:99.9},{name:"aws-security-hub",sla:99.9},{name:"aws-service-catalog",sla:99.9},{name:"aws-shield-advanced",sla:100},{name:"aws-site-to-site-vpn",sla:99.95},{name:"aws-step-functions",sla:99.9},{name:"aws-systems-manager",sla:99.9},{name:"aws-transit-gateway",sla:99.99},{name:"aws-waf",sla:99.95},{name:"aws-xray",sla:99.9},{name:"amazon-elasticache-memcached-crossaz",sla:99.9}]},58:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.slaDataAzure=void 0,e.slaDataAzure=[{name:"azure-apim-standard",sla:99.95},{name:"azure-apim-premium-multiregion",sla:99.99},{name:"azure-apim-premium-multiaz",sla:99.99},{name:"azure-app-config",sla:99.9},{name:"azure-app-service",sla:99.95},{name:"azure-application-gateway",sla:99.95},{name:"azure-automation",sla:99.9},{name:"azure-ad-premium",sla:99.99},{name:"azure-ad-b2c",sla:99.99},{name:"azure-ad-ds",sla:99.9},{name:"azure-analysis-services",sla:99.9},{name:"azure-applied-ai-services",sla:99.9},{name:"azure-arc",sla:99.9},{name:"azure-backup",sla:99.9},{name:"azure-bastion",sla:99.95},{name:"azure-bot-services",sla:99.9},{name:"azure-cognitive-search",sla:99.9},{name:"azure-communication-services",sla:99.9},{name:"azure-cosmosdb-single",sla:99.99},{name:"azure-cosmosdb-multiregion",sla:99.999},{name:"azure-data-explorer",sla:99.9},{name:"azure-datalake-storage-gen1",sla:99.9},{name:"azure-data-share",sla:99.9},{name:"azure-database-mariadb",sla:99.99},{name:"azure-database-mysql",sla:99.99},{name:"azure-database-postgresql-single",sla:99.99},{name:"azure-database-postgresql-hyperscale",sla:99.95},{name:"azure-database-postgresql-flex-zoneredundant",sla:99.99},{name:"azure-database-postgresql-flex-samezone",sla:99.95},{name:"azure-database-postgresql-flex",sla:99.9},{name:"azure-databricks",sla:99.95},{name:"azure-ddos-protection",sla:99.99},{name:"azure-defender-standard",sla:99.9},{name:"azure-devops",sla:99.9},{name:"azure-digital-twins",sla:99.9},{name:"azure-dns",sla:100},{name:"azure-expressroute",sla:99.95},{name:"azure-firewall-singlezone",sla:99.95},{name:"azure-firewall-multizone",sla:99.99},{name:"azure-frontdoor",sla:99.99},{name:"azure-functions-consumption",sla:99.95},{name:"azure-functions-premium",sla:99.95},{name:"azure-guest-config-azurearc",sla:99.9},{name:"azure-health-data-services",sla:99.9},{name:"azure-information-protection",sla:99.9},{name:"azure-iot-central",sla:99.9},{name:"azure-iot-hub",sla:99.9},{name:"azure-iot-hub-dps",sla:99.9},{name:"azure-keyvault-hsm",sla:99.9},{name:"azure-aks-az",sla:99.95},{name:"azure-aks",sla:99.9},{name:"azure-lab-services",sla:99.9},{name:"azure-logic-apps",sla:99.9},{name:"azure-cassandra",sla:99.95},{name:"azure-cassandra-az",sla:99.99},{name:"azure-maps",sla:99.9},{name:"azure-monitor",sla:99.9},{name:"azure-log-analytics",sla:99.9},{name:"azure-application-insights",sla:99.9},{name:"azure-netapp-files",sla:99.99},{name:"azure-private-link",sla:99.99},{name:"azure-purview",sla:99.9},{name:"azure-redhat-openshift",sla:99.9},{name:"azure-route-server",sla:99.95},{name:"azure-signalr-service",sla:99.9},{name:"azure-site-recovery",sla:99.9},{name:"azure-spring-cloud",sla:99.9},{name:"azure-sql-general-zone",sla:99.995},{name:"azure-sql-general",sla:99.99},{name:"azure-sql-standard",sla:99.99},{name:"azure-sql-hyperscale-multi-replica",sla:99.99},{name:"azure-sql-hyperscale-one-replica",sla:99.95},{name:"azure-sql-hyperscale",sla:99.9},{name:"azure-sql-managed",sla:99.99},{name:"azure-stream-analytics",sla:99.9},{name:"azure-synapse-analytics",sla:99.9},{name:"azure-synapse-analytics-spark",sla:99},{name:"azure-timeseries-insights",sla:99.9},{name:"azure-vmware-solution",sla:99.9},{name:"azure-vmware-solution-cloudsimple",sla:99.9},{name:"azure-vnet-nat",sla:99.99},{name:"azure-web-pubsub",sla:99.9},{name:"azure-baremetal-ha-pair",sla:99.99},{name:"azure-baremetal-single",sla:99.9},{name:"azure-biztalk-standard",sla:99.9},{name:"azure-cache-standard",sla:99.9},{name:"azure-cache-enterprise",sla:99.99},{name:"azure-cache-enterprise-georeplica",sla:99.999},{name:"azure-cloud-services",sla:99.95},{name:"azure-vm-multi-instance",sla:99.95},{name:"azure-vm-single-premium-storage",sla:99.9},{name:"azure-cognitive-services-standard",sla:99.9},{name:"azure-cdn",sla:99.9},{name:"azure-cost-management",sla:99.9},{name:"azure-data-catalog",sla:99.9},{name:"azure-datalake-analytics",sla:99.9},{name:"azure-eventgrid",sla:99.99},{name:"azure-eventhub-standard",sla:99.95},{name:"azure-eventhub-premium",sla:99.99},{name:"azure-hdinsight",sla:99.9},{name:"azure-healthbot",sla:99.9},{name:"azure-keyvault",sla:99.99},{name:"azure-load-balancer",sla:99.99},{name:"azure-mlstudio-rrs",sla:99.95},{name:"azure-mlstudio-bes",sla:99.9},{name:"azure-media-services",sla:99.9},{name:"azure-mobile-services-standard",sla:99.9},{name:"azure-network-watcher",sla:99.9},{name:"azure-vm-ondemand-reservations",sla:99.9},{name:"azure-powerbi-embedded",sla:99.9},{name:"azure-remote-rendering",sla:99.9},{name:"azure-sap-ha",sla:99.99},{name:"azure-sap-single",sla:99.9},{name:"azure-scheduler",sla:99.9},{name:"azure-service-bus",sla:99.9},{name:"azure-spatial-anchors",sla:99.9},{name:"azure-sql-server-stretch-database",sla:99.9},{name:"azure-staticwebapps-standard",sla:99.95},{name:"azure-storage-ragrs-account",sla:99.99},{name:"azure-storage-ragrs-account-cool",sla:99.9},{name:"azure-storage-grs-storage",sla:99.9},{name:"azure-storage-grs-storage-cool",sla:99},{name:"azure-storsimple",sla:99.9},{name:"azure-traffic-manager",sla:99.9},{name:"azure-virtual-wan",sla:99.95},{name:"azure-appcenter",sla:99.9},{name:"azure-vpn-basic-expressroute",sla:99.9},{name:"azure-vpn-standard",sla:99.95},{name:"azure-vpn-standard-expressroute",sla:99.95},{name:"azure-win10-iot-core-services",sla:99.9}]},976:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.slaDataGcp=void 0,e.slaDataGcp=[{name:"gcp-ai-platform",sla:99.5},{name:"gcp-apigee-standard",sla:99},{name:"gcp-apigee-enterprise",sla:99.9},{name:"gcp-apigee-enterprise-multiregion",sla:99.99},{name:"gcp-app-engine",sla:99.95},{name:"gcp-cloud-translation",sla:99.9},{name:"gcp-baremetal",sla:99.9},{name:"gcp-bigquery",sla:99.99},{name:"gcp-bigtable-single-cluster",sla:99.9},{name:"gcp-bigtable-replicated-single-cluster-routing",sla:99.9},{name:"gcp-bigtable-replicated-multicluster-routing-3-or-more-regions",sla:99.999},{name:"gcp-bigtable-replicated-multicluster-routing-fewer-than-3-regions",sla:99.99},{name:"gcp-cloud-build",sla:99.95},{name:"gcp-cloud-cdn",sla:99.95},{name:"gcp-cloud-dlp",sla:99.5},{name:"gcp-cloud-dns",sla:100},{name:"gcp-external-key-manager",sla:99.5},{name:"gcp-cloud-filestore",sla:99.9},{name:"gcp-cloud-filestore-enterprise",sla:99.99},{name:"gcp-cloud-functions",sla:99.95},{name:"gcp-cloud-key-management",sla:99.95},{name:"gcp-cloud-key-management-service-account",sla:99.99},{name:"gcp-cloud-healthcare",sla:99.9},{name:"gcp-cloud-identity",sla:99.9},{name:"gcp-interconnect-production",sla:99.99},{name:"gcp-interconnect-noncritical",sla:99.9},{name:"gcp-cloud-hsm",sla:99.95},{name:"gcp-cloud-hsm-service-account",sla:99.99},{name:"gcp-cloud-nat",sla:99.9},{name:"gcp-natural-language",sla:99.9},{name:"gcp-cloud-run",sla:99.95},{name:"gcp-spanner-multiregion",sla:99.999},{name:"gcp-spanner-regional",sla:99.99},{name:"gcp-cloud-sql",sla:99.95},{name:"gcp-cloud-storage-multiregion",sla:99.95},{name:"gcp-cloud-storage-regional",sla:99.9},{name:"gcp-cloud-storage-reduced",sla:99},{name:"gcp-cloud-storage-turbo-time",sla:99},{name:"gcp-cloud-storage-turbo-volume",sla:99.9},{name:"gcp-cloud-storage-firebase-multiregion",sla:99.95},{name:"gcp-cloud-storage-firebase-regional",sla:99.9},{name:"gcp-cloud-storage-firebase-reduced",sla:99},{name:"gcp-cloud-tasks",sla:99.95},{name:"gcp-cloud-vision",sla:99.9},{name:"gcp-cloud-vpn-classic",sla:99.9},{name:"gcp-cloud-vpn-ha",sla:99.99},{name:"gcp-compute-engine-multizone",sla:99.99},{name:"gcp-compute-engine-single",sla:99.5},{name:"gcp-compute-engine-lb",sla:99.99},{name:"gcp-data-catalog",sla:99.9},{name:"gcp-dataflow",sla:99.9},{name:"gcp-dataplex",sla:99.5},{name:"gcp-dataproc",sla:99.5},{name:"gcp-datastore-multiregion",sla:99.95},{name:"gcp-datastore-regional",sla:99.9},{name:"gcp-dialogflow",sla:99.9},{name:"gcp-document-ai",sla:99.9},{name:"gcp-firestore-multiregion",sla:99.999},{name:"gcp-firestore-regional",sla:99.99},{name:"gcp-cloud-armor",sla:99.99},{name:"gcp-cloud-vmware-ftt2",sla:99.99},{name:"gcp-cloud-vmware-ftt1",sla:99.9},{name:"gcp-cloud-vmware-management",sla:99.9},{name:"gcp-gke-zonal",sla:99.5},{name:"gcp-gke-regional",sla:99.95},{name:"gcp-gke-autopilot",sla:99.95},{name:"gcp-gke-autopilot-multizone",sla:99.9},{name:"gcp-identity-platform",sla:99.95},{name:"gcp-iot-core",sla:99.9},{name:"gcp-managed-microsoft-ad",sla:99.9},{name:"gcp-memorystore",sla:99.9},{name:"gcp-network-connectivity-center",sla:99.95},{name:"gcp-operations",sla:99.95},{name:"gcp-pubsub",sla:99.95},{name:"gcp-pubsub-lite-regional",sla:99.95},{name:"gcp-pubsub-lite-zonal",sla:99.5},{name:"gcp-recaptcha-enterprise",sla:99.9},{name:"gcp-secret-manager",sla:99.95},{name:"gcp-security-command-center",sla:99.9},{name:"gcp-speech-to-text",sla:99.9},{name:"gcp-talent-solution",sla:99.9},{name:"gcp-text-to-speech",sla:99.9},{name:"gcp-workflows",sla:99.9},{name:"gcp-vertex-ai-prediction",sla:99.9},{name:"gcp-vertex-ai-custom",sla:99.5},{name:"gcp-video-intelligence",sla:99.9}]},258:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.InvalidServiceDataError=void 0;class s extends Error{constructor(a){super(a),this.name="InvalidServiceDataError",console.error(a)}}e.InvalidServiceDataError=s},786:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.InvalidServiceInputDataError=void 0;class s extends Error{constructor(a){super(a),this.name="InvalidServiceInputDataError",console.error(a)}}e.InvalidServiceInputDataError=s},234:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MissingItemsToValidateError=void 0;class s extends Error{constructor(a){super(a),this.name="MissingItemsToValidateError",console.error(a)}}e.MissingItemsToValidateError=s},620:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MissingServiceEntriesError=void 0;class s extends Error{constructor(a){super(a),this.name="MissingServiceEntriesError",console.error(a)}}e.MissingServiceEntriesError=s},502:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ServiceMissingSlaError=void 0;class s extends Error{constructor(a){super(a),this.name="ServiceMissingSlaError",console.error(a)}}e.ServiceMissingSlaError=s},558:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.UnknownInputError=void 0;class s extends Error{constructor(a){super(a),this.name="UnknownInputError",console.error(a)}}e.UnknownInputError=s},286:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.validateInput=void 0,e.validateInput=function(a){if(!Array.isArray(a))throw new Error("Input is not an array!");if(a.length>30)throw new Error("Input includes more than 30 objects!");if(JSON.stringify(a).length>2048)throw new Error("Input is too big!");return a}},403:(a,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createNewServiceEntries=void 0;const n=s(558),r=s(234),l=s(786);e.createNewServiceEntries=function(a){const{userInputs:e,serviceSlas:s,serviceNamesList:n}=a;return new t(e,s,n)};class t{constructor(a,e,s){if(this.serviceNamesList=s,!this.validateListOfItems(a))throw new l.InvalidServiceInputDataError("Service input data is invalid!");this.serviceSlas=e,this.serviceEntries=this.constructServiceEntries(a)}validateListOfItems(a){if(!a||0===a.length)throw new r.MissingItemsToValidateError("Missing items in list to validate!");return!a.map((a=>this.validateEntry(a))).includes(!1)}validateEntry(a){return!(!a.name||!(a.name.toLowerCase().startsWith("custom")&&a.sla&&a.description)&&!this.serviceNamesList.includes(a.name))}constructServiceEntries(a){return a.map((a=>{if(a.name.startsWith("custom")&&a.sla&&a.description){const{name:e,sla:s,description:n}=a;return{name:e,sla:s,description:n}}if(this.serviceNamesList.includes(a.name))return this.serviceSlas.filter((e=>e.name===a.name))[0];throw new n.UnknownInputError(`Unknown input found: ${JSON.stringify(a)} `)}))}getServiceEntries(){return this.serviceEntries}}},102:(a,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createNewServiceSlas=void 0;const n=s(234),r=s(258);e.createNewServiceSlas=function(a){const{serviceSlas:e}=a;return new l(e)};class l{constructor(a){if(this.serviceNamesList=a.map((a=>a.name)),!this.validateListOfItems(a))throw new r.InvalidServiceDataError("Service SLA data is invalid!");this.serviceSlas=a}validateListOfItems(a){if(!a||0===a.length)throw new n.MissingItemsToValidateError("Missing items in list to validate!");return!a.map((a=>this.validateServiceSla(a))).includes(!1)}validateServiceSla(a){return!(!a.name||!a.sla||!this.serviceNamesList.includes(a.name))}getServiceSlas(){return this.serviceSlas}getServiceNames(){return this.serviceNamesList}}},607:function(a,e,s){var n=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0}),e.SlaMax=void 0;var r=s(767);Object.defineProperty(e,"SlaMax",{enumerable:!0,get:function(){return n(r).default}})},16:(a,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CalculateMaxSlaUseCase=void 0;const n=s(531),r=s(403),l=s(102),t=s(546);e.CalculateMaxSlaUseCase=function(a){const e=(0,l.createNewServiceSlas)({serviceSlas:t.serviceSlaData}),s=e.getServiceSlas(),m=e.getServiceNames(),i=(0,r.createNewServiceEntries)({userInputs:a,serviceSlas:s,serviceNamesList:m}).getServiceEntries();return(0,n.createNewServiceSlaAggregate)({serviceEntries:i,serviceSlas:s,serviceNamesList:m}).calculateMaxSla()}}},e={},s=function s(n){var r=e[n];if(void 0!==r)return r.exports;var l=e[n]={exports:{}};return a[n].call(l.exports,l,l.exports,s),l.exports}(607);module.exports=s})();