resource "kubernetes_namespace" "orrtyl-crm" {
  metadata {
    annotations = {
      name = var.orrtyl-crm_namespace
    }

    name = var.orrtyl-crm_namespace
  }
}
