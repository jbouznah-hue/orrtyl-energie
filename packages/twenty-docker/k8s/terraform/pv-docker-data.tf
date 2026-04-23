resource "kubernetes_persistent_volume" "docker_data" {
  metadata {
    name = "${var.orrtyl-crm_app_name}-docker-data-pv"
  }
  spec {
    storage_class_name = "default"
    capacity = {
      storage = var.orrtyl-crm_docker_data_pv_capacity
    }
    access_modes = ["ReadWriteOnce"]
    # refer to Terraform Docs for your specific implementation requirements
    # https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/persistent_volume
    persistent_volume_source {
      local {
        path = var.orrtyl-crm_docker_data_pv_path
      }
    }
  }
}
