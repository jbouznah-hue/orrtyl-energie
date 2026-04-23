resource "kubernetes_service" "orrtyl-crm_redis" {
  metadata {
    name      = "${var.orrtyl-crm_app_name}-redis"
    namespace = kubernetes_namespace.orrtyl-crm.metadata.0.name
  }
  spec {
    selector = {
      app = "${var.orrtyl-crm_app_name}-redis"
    }
    session_affinity = "ClientIP"
    port {
      port        = 6379
      target_port = 6379
    }

    type = "ClusterIP"
  }
}
