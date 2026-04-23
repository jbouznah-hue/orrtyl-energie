resource "kubernetes_persistent_volume_claim" "server" {
  metadata {
    name      = "${var.orrtyl-crm_app_name}-server-pvc"
    namespace = kubernetes_namespace.orrtyl-crm.metadata.0.name
  }
  spec {
    access_modes = ["ReadWriteOnce"]
    resources {
      requests = {
        storage = var.orrtyl-crm_server_pvc_requests
      }
    }
    volume_name = kubernetes_persistent_volume.server.metadata.0.name
  }
}
