import { type FlatViewFieldGroup } from 'src/engine/metadata-modules/flat-view-field-group/types/flat-view-field-group.type';
import {
  createStandardViewFieldGroupFlatMetadata,
  type CreateStandardViewFieldGroupArgs,
} from 'src/engine/workspace-manager/twenty-standard-application/utils/view-field-group/create-standard-view-field-group-flat-metadata.util';

export const computeStandardOpportunityViewFieldGroups = (
  args: Omit<CreateStandardViewFieldGroupArgs<'opportunity'>, 'context'>,
): Record<string, FlatViewFieldGroup> => {
  return {
    opportunityRecordPageFieldsDossierEnr:
      createStandardViewFieldGroupFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldGroupName: 'dossierEnr',
          name: 'Dossier ENR',
          position: 0,
          isVisible: true,
        },
      }),
    opportunityRecordPageFieldsLogement:
      createStandardViewFieldGroupFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldGroupName: 'logement',
          name: 'Logement',
          position: 1,
          isVisible: true,
        },
      }),
    opportunityRecordPageFieldsDevisVisite:
      createStandardViewFieldGroupFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldGroupName: 'devisVisite',
          name: 'Devis & Visite',
          position: 2,
          isVisible: true,
        },
      }),
    opportunityRecordPageFieldsInstallation:
      createStandardViewFieldGroupFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldGroupName: 'installation',
          name: 'Installation',
          position: 3,
          isVisible: true,
        },
      }),
    opportunityRecordPageFieldsFinancier:
      createStandardViewFieldGroupFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldGroupName: 'financier',
          name: 'Financier',
          position: 4,
          isVisible: true,
        },
      }),
    opportunityRecordPageFieldsAdministratifAnah:
      createStandardViewFieldGroupFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldGroupName: 'administratifAnah',
          name: 'Administratif ANAH',
          position: 5,
          isVisible: true,
        },
      }),
    opportunityRecordPageFieldsDocuments:
      createStandardViewFieldGroupFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldGroupName: 'documents',
          name: 'Documents',
          position: 6,
          isVisible: true,
        },
      }),
    opportunityRecordPageFieldsRelations:
      createStandardViewFieldGroupFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldGroupName: 'relations',
          name: 'Relations',
          position: 7,
          isVisible: true,
        },
      }),
    opportunityRecordPageFieldsDeal: createStandardViewFieldGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'opportunityRecordPageFields',
        viewFieldGroupName: 'deal',
        name: 'Deal',
        position: 8,
        isVisible: true,
      },
    }),
    opportunityRecordPageFieldsSystem: createStandardViewFieldGroupFlatMetadata(
      {
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldGroupName: 'system',
          name: 'System',
          position: 9,
          isVisible: true,
        },
      },
    ),
  };
};
