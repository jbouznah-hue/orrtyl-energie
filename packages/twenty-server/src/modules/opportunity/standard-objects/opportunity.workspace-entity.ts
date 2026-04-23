import {
  type ActorMetadata,
  type AddressMetadata,
  type CurrencyMetadata,
  FieldMetadataType,
  type LinksMetadata,
  type RichTextMetadata,
} from 'twenty-shared/types';

import { BaseWorkspaceEntity } from 'src/engine/twenty-orm/base.workspace-entity';
import { type FieldTypeAndNameMetadata } from 'src/engine/workspace-manager/utils/get-ts-vector-column-expression.util';
import { type EntityRelation } from 'src/engine/workspace-manager/workspace-migration/types/entity-relation.interface';
import { type AttachmentWorkspaceEntity } from 'src/modules/attachment/standard-objects/attachment.workspace-entity';
import { type CompanyWorkspaceEntity } from 'src/modules/company/standard-objects/company.workspace-entity';
import { type InstallateurWorkspaceEntity } from 'src/modules/installateur/standard-objects/installateur.workspace-entity';
import { type NoteTargetWorkspaceEntity } from 'src/modules/note/standard-objects/note-target.workspace-entity';
import { type PersonWorkspaceEntity } from 'src/modules/person/standard-objects/person.workspace-entity';
import { type TaskTargetWorkspaceEntity } from 'src/modules/task/standard-objects/task-target.workspace-entity';
import { type TimelineActivityWorkspaceEntity } from 'src/modules/timeline/standard-objects/timeline-activity.workspace-entity';
import { type WorkspaceMemberWorkspaceEntity } from 'src/modules/workspace-member/standard-objects/workspace-member.workspace-entity';

const NAME_FIELD_NAME = 'name';

export const SEARCH_FIELDS_FOR_OPPORTUNITY: FieldTypeAndNameMetadata[] = [
  { name: NAME_FIELD_NAME, type: FieldMetadataType.TEXT },
];

export class OpportunityWorkspaceEntity extends BaseWorkspaceEntity {
  name: string;
  amount: CurrencyMetadata | null;
  closeDate: Date | null;
  stage: string;
  position: number;
  createdBy: ActorMetadata;
  updatedBy: ActorMetadata;
  pointOfContact: EntityRelation<PersonWorkspaceEntity> | null;
  pointOfContactId: string | null;
  company: EntityRelation<CompanyWorkspaceEntity> | null;
  companyId: string | null;
  installateur: EntityRelation<InstallateurWorkspaceEntity> | null;
  installateurId: string | null;
  taskTargets: EntityRelation<TaskTargetWorkspaceEntity[]>;
  noteTargets: EntityRelation<NoteTargetWorkspaceEntity[]>;
  attachments: EntityRelation<AttachmentWorkspaceEntity[]>;
  timelineActivities: EntityRelation<TimelineActivityWorkspaceEntity[]>;
  owner: EntityRelation<WorkspaceMemberWorkspaceEntity> | null;
  ownerId: string | null;
  // ENR - Informations dossier
  referenceDossierEnr: string | null;
  natureTravaux: string | null;
  couleurMpr: string | null;
  statutDevis: string | null;
  statutVisiteTechnique: string | null;
  statutFinancierMpr: string | null;
  statutFinancierCee: string | null;
  sourceDossier: string | null;
  prioriteDossier: string | null;
  financementPrincipal: string | null;
  typeBien: string | null;
  usageBien: string | null;
  dateContratEnr: Date | null;
  // ENR - Logement
  surfaceHabitable: number | null;
  nombreOccupants: number | null;
  anneeConstruction: number | null;
  chauffageActuel: string | null;
  classeEnergieDpe: string | null;
  adresseBien: AddressMetadata | null;
  // ENR - Documents
  avisDimposition: LinksMetadata | null;
  taxeFonciere: LinksMetadata | null;
  cniRectoVerso: LinksMetadata | null;
  justificatifDomicile: LinksMetadata | null;
  acteNotarie: LinksMetadata | null;
  photosEnr: LinksMetadata | null;
  autresDocuments: LinksMetadata | null;
  // ENR - Installation
  dateDebutTravaux: Date | null;
  dateFinTravaux: Date | null;
  notesInstallation: RichTextMetadata | null;
  // ENR - Suivi financier
  montantAideMpr: CurrencyMetadata | null;
  montantAideCee: CurrencyMetadata | null;
  montantCommission: CurrencyMetadata | null;
  resteAChargeClient: CurrencyMetadata | null;
  totalAidePercu: CurrencyMetadata | null;
  montantTotalFacture: CurrencyMetadata | null;
  // ENR - Administratif ANAH
  dateDepotAnah: Date | null;
  dateAccordAnah: Date | null;
  numeroDossierAnah: string | null;
  /** @deprecated */
  probability: string;
  searchVector: string;
}
