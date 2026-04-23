import {
  type ActorMetadata,
  type AddressMetadata,
  type EmailsMetadata,
  type PhonesMetadata,
  FieldMetadataType,
} from 'twenty-shared/types';

import { type FieldTypeAndNameMetadata } from 'src/engine/workspace-manager/utils/get-ts-vector-column-expression.util';
import { type EntityRelation } from 'src/engine/workspace-manager/workspace-migration/types/entity-relation.interface';
import { type OpportunityWorkspaceEntity } from 'src/modules/opportunity/standard-objects/opportunity.workspace-entity';

const NOM_FIELD_NAME = 'nom';

export const SEARCH_FIELDS_FOR_INSTALLATEUR: FieldTypeAndNameMetadata[] = [
  { name: NOM_FIELD_NAME, type: FieldMetadataType.TEXT },
];

export class InstallateurWorkspaceEntity {
  // Base fields
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;

  // Installateur-specific fields
  nom: string | null;
  siret: string | null;
  telephone: PhonesMetadata | null;
  email: EmailsMetadata | null;
  adresse: AddressMetadata | null;
  certificationRge: boolean;
  dateValiditeRge: Date | null;
  notes: string | null;
  position: number;
  createdBy: ActorMetadata;
  updatedBy: ActorMetadata;
  searchVector: string;

  // Relations
  dossiers: EntityRelation<OpportunityWorkspaceEntity[]>;
}
