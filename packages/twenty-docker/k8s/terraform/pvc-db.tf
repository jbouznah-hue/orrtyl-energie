resource "kubernetes_persistent_volume_claim" "db" {
  metadata {
    name      = "${var.orrtyl-crm_app_name}-db-pvc"
    namespace = kubernetes_namespace.orrtyl-crm.metadata.0.name
  }
  spec {
    access_modes = ["ReadWriteOnce"]
    resources {
      requests = {
        storage = var.orrtyl-crm_db_pvc_requests
      }
    }
    volume_name = kubernetes_persistent_volume.db.metadata.0.name
  }
}
