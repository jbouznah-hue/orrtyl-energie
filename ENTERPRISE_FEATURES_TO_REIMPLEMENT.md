# Features Enterprise a reimplementer

> Fork : `jbouznah-hue/crm-enr` (PRIVE)
> Base : Twenty CRM (twentyhq/twenty) sous AGPL-3.0
>
> Ce document liste les fonctionnalites marquees `@license Enterprise`
> qui doivent etre **reimplementees from scratch**.
>
> **154 fichiers inutiles SUPPRIMES** (Billing, Usage, Enterprise Licensing, Website)
> **137 fichiers restants** a reimplementer selon les priorites ci-dessous.

---

## Priorite 1 : ROW-LEVEL PERMISSIONS (RLS)

**Statut : A REIMPLEMENTER POUR LE MVP**
**Fichiers Enterprise : 60**
**Complexite : HAUTE**

### Pourquoi c'est critique

Dans un CRM ENR multi-tenant, chaque commercial doit voir uniquement SES leads et
SES dossiers. Sans RLS, tous les utilisateurs d'un tenant voient toutes les donnees.
C'est inacceptable meme en MVP.

### Ce que fait la version Enterprise de Twenty

- Systeme de predicats configurables par role (AND/OR)
- UI de construction de filtres dans les settings roles
- Application des predicats au niveau ORM (chaque requete DB est filtree)
- Validation des predicats a l'ecriture (un user ne peut pas creer un record hors de son scope)
- Types partages (predicat, groupe, operandes, operateurs)

### Fichiers a supprimer (60)

#### Server - ORM layer (4 fichiers)
```
packages/twenty-server/src/engine/twenty-orm/utils/apply-row-level-permission-predicates.util.ts
packages/twenty-server/src/engine/twenty-orm/utils/build-row-level-permission-record-filter.util.ts
packages/twenty-server/src/engine/twenty-orm/utils/validate-rls-predicates-for-records.util.ts
packages/twenty-server/src/engine/twenty-orm/utils/is-record-matching-rls-row-level-permission-predicate.util.ts
```

#### Server - Metadata module (20+ fichiers)
```
packages/twenty-server/src/engine/metadata-modules/row-level-permission-predicate/
packages/twenty-server/src/engine/metadata-modules/flat-row-level-permission-predicate/
```

#### Server - Migration handlers
```
packages/twenty-server/src/engine/workspace-manager/workspace-migration/workspace-migration-runner/action-handlers/row-level-permission-predicate/
packages/twenty-server/src/engine/workspace-manager/workspace-migration/workspace-migration-builder/builders/row-level-permission-predicate/
```

#### Frontend - Settings UI (14+ fichiers)
```
packages/twenty-front/src/modules/settings/roles/role-permissions/object-level-permissions/record-level-permissions/
packages/twenty-front/src/modules/settings/roles/graphql/fragments/rowLevelPermissionPredicate*.ts
packages/twenty-front/src/modules/settings/roles/graphql/hooks/useUpsertRowLevelPermissionPredicatesMutation.ts
packages/twenty-front/src/modules/settings/roles/graphql/mutations/upsertRowLevelPermissionPredicatesMutation.ts
```

#### Frontend - Record hooks (2 fichiers)
```
packages/twenty-front/src/modules/object-record/hooks/useBuildRecordInputFromRLSPredicates.ts
packages/twenty-front/src/modules/object-record/record-field/ui/meta-types/hooks/useFilteredSelectOptionsFromRLSPredicates.ts
```

#### Shared types (5 fichiers)
```
packages/twenty-shared/src/types/RowLevelPermissionPredicate.ts
packages/twenty-shared/src/types/RowLevelPermissionPredicateGroup.ts
packages/twenty-shared/src/types/RowLevelPermissionPredicateGroupLogicalOperator.ts
packages/twenty-shared/src/types/RowLevelPermissionPredicateOperand.ts
packages/twenty-shared/src/types/RowLevelPermissionPredicateValue.ts
```

### Strategie de reimplementation

1. **Phase MVP** : Filtre simple par `ownerId` sur chaque entite
   - Middleware NestJS qui injecte un filtre `WHERE owner_id = current_user_id`
   - Configurable par role : "voir tout" (admin/manager) vs "voir les siens" (commercial)
   - Pas d'UI complexe de predicats, juste un toggle par role

2. **Phase V2** : Systeme de predicats complet
   - UI builder de regles (type "si champ X = valeur Y, alors visible")
   - Support des groupes logiques AND/OR
   - Integration ORM pour filtrage automatique
   - Predicats par role ET par objet custom (Dossier ENR, Contact, etc.)

---

## Priorite 2 : AUDIT LOGS

**Statut : A REIMPLEMENTER POST-MVP**
**Fichiers Enterprise : 11**
**Complexite : FACILE**

### Pourquoi c'est utile

Traçabilite des actions : qui a modifie quel dossier, quand. Important pour
la conformite RGPD et la gestion d'equipe. Pas bloquant pour le MVP mais
necessaire rapidement apres.

### Ce que fait la version Enterprise

- Stockage des evenements dans ClickHouse
- Resolver GraphQL pour requeter les logs
- Cron de nettoyage des vieux logs
- Filtre par entite, par utilisateur, par date

### Fichiers a supprimer (11)
```
packages/twenty-server/src/engine/core-modules/event-logs/event-logs.module.ts
packages/twenty-server/src/engine/core-modules/event-logs/event-logs.resolver.ts
packages/twenty-server/src/engine/core-modules/event-logs/event-logs.service.ts
packages/twenty-server/src/engine/core-modules/event-logs/event-logs.exception.ts
packages/twenty-server/src/engine/core-modules/event-logs/filters/event-logs-graphql-api-exception.filter.ts
packages/twenty-server/src/engine/core-modules/event-logs/utils/event-logs-graphql-api-exception-handler.util.ts
packages/twenty-server/src/engine/core-modules/event-logs/cleanup/event-log-cleanup.module.ts
packages/twenty-server/src/engine/core-modules/event-logs/cleanup/commands/event-log-cleanup.cron.command.ts
packages/twenty-server/src/engine/core-modules/event-logs/cleanup/crons/event-log-cleanup.cron.job.ts
packages/twenty-server/src/engine/core-modules/event-logs/cleanup/jobs/event-log-cleanup.job.ts
packages/twenty-server/src/engine/core-modules/event-logs/cleanup/services/event-log-cleanup.service.ts
```

### Strategie de reimplementation

- Table PostgreSQL `audit_logs` (pas besoin de ClickHouse pour notre volume)
- Colonnes : `id, user_id, action, entity_type, entity_id, changes_json, created_at`
- NestJS interceptor global qui log automatiquement les mutations GraphQL
- API simple pour consulter les logs avec filtres
- Cron de purge (> 12 mois)

---

## Priorite 3 : SSO (SAML / OIDC)

**Statut : A REIMPLEMENTER QUAND CLIENTS GRANDS COMPTES**
**Fichiers Enterprise : 58 (22 server + 36 frontend)**
**Complexite : MOYENNE**

### Pourquoi c'est utile

Les grandes entreprises ENR (installateurs nationaux, energeticiens) exigent
la connexion via leur annuaire d'entreprise (Azure AD, Google Workspace, Okta).
Pas necessaire tant que tes clients sont des PME.

### Ce que fait la version Enterprise

- Configuration SAML 2.0 (certificat X.509, metadata XML)
- Configuration OIDC (client ID/secret, discovery URL)
- UI complete de gestion des providers SSO
- Guards d'authentification SAML et OIDC
- Selection du provider SSO au login

### Fichiers a supprimer (58)

#### Server (22)
```
packages/twenty-server/src/engine/core-modules/sso/              (service, resolver, entity, DTOs)
packages/twenty-server/src/engine/core-modules/auth/strategies/saml.auth.strategy.ts
packages/twenty-server/src/engine/core-modules/auth/strategies/oidc.auth.strategy.ts
packages/twenty-server/src/engine/core-modules/auth/guards/saml-auth.guard.ts
packages/twenty-server/src/engine/core-modules/auth/guards/oidc-auth.guard.ts
packages/twenty-server/src/engine/core-modules/auth/guards/enterprise-features-enabled.guard.ts
packages/twenty-server/src/engine/core-modules/auth/controllers/sso-auth.controller.ts
packages/twenty-server/src/engine/core-modules/auth/dto/get-authorization-url-for-sso.*
packages/twenty-server/src/engine/core-modules/auth/dto/available-workspaces.dto.ts
```

#### Frontend (36)
```
packages/twenty-front/src/modules/settings/security/components/SSO/    (6 composants)
packages/twenty-front/src/modules/settings/security/graphql/           (5 mutations/queries)
packages/twenty-front/src/modules/settings/security/hooks/             (3 hooks + 3 tests)
packages/twenty-front/src/modules/settings/security/states/            (1 state)
packages/twenty-front/src/modules/settings/security/types/             (1 type)
packages/twenty-front/src/modules/settings/security/utils/             (3 utils + 1 test)
packages/twenty-front/src/modules/settings/security/validation-schemas/(1 schema)
packages/twenty-front/src/modules/auth/sign-in-up/hooks/useSSO.ts
packages/twenty-front/src/modules/auth/sign-in-up/components/internal/SignInUpSSOIdentityProviderSelection.tsx
packages/twenty-front/src/modules/auth/graphql/fragments/availableSSOIdentityProvidersFragment.ts
packages/twenty-front/src/pages/settings/security/SettingsSecuritySSOIdentifyProvider.tsx
```

### Strategie de reimplementation

- Utiliser `passport-saml` et `passport-openidconnect` (packages npm open source)
- Table `sso_providers` (type, config JSON, tenant_id)
- UI simplifiee : formulaire SAML (entity ID, SSO URL, certificat) + formulaire OIDC (client ID, secret, discovery)
- Guard NestJS qui redirige vers le bon provider

---

## Priorite 4 : CUSTOM DOMAINS

**Statut : OPTIONNEL - LONG TERME**
**Fichiers Enterprise : 7**
**Complexite : FACILE**

### Pourquoi c'est utile

Permettre a chaque client ENR d'utiliser son propre domaine (crm.installateur-xyz.fr)
au lieu de installateur-xyz.ton-crm.fr. Feature premium de differenciation.

### Fichiers a supprimer (7)
```
packages/twenty-server/src/engine/core-modules/dns-manager/services/dns-manager.service.ts
packages/twenty-server/src/engine/core-modules/cloudflare/guards/cloudflare-secret.guard.ts
packages/twenty-server/src/engine/core-modules/cloudflare/controllers/dns-cloudflare.controller.ts
packages/twenty-front/src/modules/settings/domains/          (3 fichiers)
packages/twenty-front/src/pages/settings/domains/SettingsCustomDomainPage.tsx
```

### Strategie de reimplementation

- Traefik (deja sur Coolify) gere nativement les domaines custom avec Let's Encrypt
- Table `custom_domains` (domain, tenant_id, verified, ssl_status)
- Verification DNS par CNAME + endpoint de validation
- UI : champ texte + statut de verification

---

## A SUPPRIMER SANS REIMPLEMENTER

Ces features sont specifiques a l'offre cloud de Twenty.com et n'ont aucune
utilite pour un CRM ENR self-hosted.

### Billing / Stripe (127 fichiers)

Tout le systeme de facturation Stripe de Twenty. Inutile.
```
packages/twenty-server/src/engine/core-modules/billing/
packages/twenty-server/src/engine/core-modules/billing-webhook/
```
**Action** : Supprimer + mettre `IS_BILLING_ENABLED=false`

### Usage Tracking (15 fichiers)

Metering de l'usage (API calls, records) pour la facturation cloud.
```
packages/twenty-server/src/engine/core-modules/usage/
```
**Action** : Supprimer

### Enterprise Core / Licensing (13 fichiers)

Systeme de cle de licence JWT pour valider l'abonnement Enterprise.
```
packages/twenty-server/src/engine/core-modules/enterprise/
packages/twenty-front/src/modules/settings/enterprise/
packages/twenty-front/src/modules/information-banner/components/enterprise/
packages/twenty-front/src/pages/settings/enterprise/
```
**Action** : Supprimer

### Website Enterprise Pages (~21 fichiers)

Pages marketing du site twenty.com (pricing, checkout).
```
packages/twenty-website/
packages/twenty-website-new/
```
**Action** : Supprimer le package entier (pas partie du CRM)

---

## Resume

| Feature | Fichiers | Priorite | Complexite | Quand |
|---------|----------|----------|------------|-------|
| **Row-Level Permissions** | 60 | **P0 - MVP** | Haute | Sprint 1-2 |
| **Audit Logs** | 11 | P1 - Post-MVP | Facile | Sprint 3 |
| **SSO (SAML/OIDC)** | 58 | P2 - Grands comptes | Moyenne | Sprint 5+ |
| **Custom Domains** | 7 | P3 - Premium | Facile | Sprint 8+ |
| ~~Billing/Stripe~~ | 127 | Supprimer | N/A | Jamais |
| ~~Usage Tracking~~ | 15 | Supprimer | N/A | Jamais |
| ~~Enterprise Licensing~~ | 13 | Supprimer | N/A | Jamais |
| **TOTAL** | **291** | | | |

---

## Notes legales

- Tous les fichiers listes ci-dessus portent la mention `/* @license Enterprise */`
- Ils sont sous licence commerciale Twenty, PAS sous AGPL-3.0
- Ils doivent etre **supprimes** du fork avant distribution
- Les reimplementations sont du code original, sous la licence du fork (AGPL-3.0)
- Les notices de copyright Twenty dans les fichiers AGPL doivent etre conservees
