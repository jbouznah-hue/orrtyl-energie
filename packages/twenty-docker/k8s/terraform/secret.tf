locals {
  tokens = [
    "accessToken",
    "loginToken",
    "refreshToken",
    "fileToken"
  ]
}

resource "random_bytes" "this" {
  for_each = toset(local.tokens)

  length = 32
}

resource "kubernetes_secret" "orrtyl-crm_tokens" {
  metadata {
    name      = "tokens"
    namespace = kubernetes_namespace.orrtyl-crm.metadata.0.name
  }

  data = {
    accessToken  = random_bytes.this["accessToken"].base64
    loginToken   = random_bytes.this["loginToken"].base64
    refreshToken = random_bytes.this["refreshToken"].base64
    fileToken    = random_bytes.this["fileToken"].base64
  }
}
