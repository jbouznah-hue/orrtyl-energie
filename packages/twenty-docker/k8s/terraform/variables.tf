######################
# Required Variables #
######################
variable "orrtyl-crm_pgdb_admin_password" {
  type        = string
  description = "TwentyCRM password for postgres database."
  sensitive   = true
}

variable "orrtyl-crm_app_hostname" {
  type        = string
  description = "The protocol, DNS fully qualified hostname, and port used to access TwentyCRM in your environment. Ex: https://crm.example.com:443"
}

######################
# Optional Variables #
######################
variable "orrtyl-crm_app_name" {
  type        = string
  default     = "orrtyl-crm"
  description = "A friendly name prefix to use for every component deployed."
}

variable "orrtyl-crm_server_image" {
  type        = string
  default     = "orrtyl/twenty:latest"
  description = "TwentyCRM server image for the server deployment. This defaults to latest. This value is also used for the workers image."
}

variable "orrtyl-crm_db_image" {
  type        = string
  default     = "orrtyl/twenty-postgres-spilo:latest"
  description = "TwentyCRM image for database deployment. This defaults to latest."
}

variable "orrtyl-crm_server_replicas" {
  type        = number
  default     = 1
  description = "Number of replicas for the TwentyCRM server deployment. This defaults to 1."
}

variable "orrtyl-crm_worker_replicas" {
  type        = number
  default     = 1
  description = "Number of replicas for the TwentyCRM worker deployment. This defaults to 1."
}

variable "orrtyl-crm_db_replicas" {
  type        = number
  default     = 1
  description = "Number of replicas for the TwentyCRM database deployment. This defaults to 1."
}

variable "orrtyl-crm_server_data_mount_path" {
  type        = string
  default     = "/app/packages/twenty-server/.local-storage"
  description = "TwentyCRM mount path for servers application data. Defaults to '/app/packages/twenty-server/.local-storage'."
}

variable "orrtyl-crm_db_pv_path" {
  type        = string
  default     = ""
  description = "Local path to use to store the physical volume if using local storage on nodes."
}

variable "orrtyl-crm_server_pv_path" {
  type        = string
  default     = ""
  description = "Local path to use to store the physical volume if using local storage on nodes."
}

variable "orrtyl-crm_db_pv_capacity" {
  type        = string
  default     = "10Gi"
  description = "Storage capacity provisioned for database persistent volume."
}

variable "orrtyl-crm_db_pvc_requests" {
  type        = string
  default     = "10Gi"
  description = "Storage capacity reservation for database persistent volume claim."
}

variable "orrtyl-crm_server_pv_capacity" {
  type        = string
  default     = "10Gi"
  description = "Storage capacity provisioned for server persistent volume."
}

variable "orrtyl-crm_server_pvc_requests" {
  type        = string
  default     = "10Gi"
  description = "Storage capacity reservation for server persistent volume claim."
}

variable "orrtyl-crm_namespace" {
  type        = string
  default     = "orrtyl-crm"
  description = "Namespace for all TwentyCRM resources"
}

variable "orrtyl-crm_redis_replicas" {
  type        = number
  default     = 1
  description = "Number of replicas for the TwentyCRM Redis deployment. This defaults to 1."
}

variable "orrtyl-crm_redis_image" {
  type        = string
  default     = "redis/redis-stack-server:latest"
  description = "TwentyCRM image for Redis deployment. This defaults to latest."
}

variable "orrtyl-crm_docker_data_mount_path" {
  type        = string
  default     = "/app/docker-data"
  description = "TwentyCRM mount path for servers application data. Defaults to '/app/docker-data'."
}

variable "orrtyl-crm_docker_data_pv_path" {
  type        = string
  default     = ""
  description = "Local path to use to store the physical volume if using local storage on nodes."
}

variable "orrtyl-crm_docker_data_pv_capacity" {
  type        = string
  default     = "100Mi"
  description = "Storage capacity provisioned for server persistent volume."
}

variable "orrtyl-crm_docker_data_pvc_requests" {
  type        = string
  default     = "100Mi"
  description = "Storage capacity reservation for server persistent volume claim."
}
