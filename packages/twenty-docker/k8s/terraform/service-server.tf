resource "kubernetes_service" "orrtyl-crm_server" {
  metadata {
    name      = "${var.orrtyl-crm_app_name}-server"
    namespace = kubernetes_namespace.orrtyl-crm.metadata.0.name
  }
  spec {
    selector = {
      app = "${var.orrtyl-crm_app_name}-server"
    }
    session_affinity = "ClientIP"
    port {
      name        = "http-tcp"
      port        = 3000
      target_port = 3000
    }

    type = "ClusterIP"
  }
}
