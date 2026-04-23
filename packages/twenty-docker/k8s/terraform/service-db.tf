resource "kubernetes_service" "orrtyl-crm_db" {
  metadata {
    name      = "${var.orrtyl-crm_app_name}-db"
    namespace = kubernetes_namespace.orrtyl-crm.metadata.0.name
  }
  spec {
    selector = {
      app = "${var.orrtyl-crm_app_name}-db"
    }
    session_affinity = "ClientIP"
    port {
      port        = 5432
      target_port = 5432
    }

    type = "ClusterIP"
  }
}
