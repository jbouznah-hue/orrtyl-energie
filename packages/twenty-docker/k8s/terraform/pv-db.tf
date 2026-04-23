resource "kubernetes_persistent_volume" "db" {
  metadata {
    name = "${var.orrtyl-crm_app_name}-db-pv"
  }
  spec {
    storage_class_name = "default"
    capacity = {
      storage = var.orrtyl-crm_db_pv_capacity
    }
    access_modes = ["ReadWriteOnce"]
    # refer to Terraform Docs for your specific implementation requirements
    # https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/persistent_volume
    persistent_volume_source {
      local {
        path = var.orrtyl-crm_db_pv_path
      }
    }
  }
}
