import { type FlatViewGroup } from 'src/engine/metadata-modules/flat-view-group/types/flat-view-group.type';
import {
  createStandardViewGroupFlatMetadata,
  type CreateStandardViewGroupArgs,
} from 'src/engine/workspace-manager/twenty-standard-application/utils/view-group/create-standard-view-group-flat-metadata.util';

export const computeStandardOpportunityViewGroups = (
  args: Omit<CreateStandardViewGroupArgs<'opportunity'>, 'context'>,
): Record<string, FlatViewGroup> => {
  return {
    byStageAEnvoyerEnMpr: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'aEnvoyerEnMpr',
        isVisible: true,
        fieldValue: 'A_ENVOYER_EN_MPR',
        position: 0,
      },
    }),
    byStageDossierDepose: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'dossierDepose',
        isVisible: true,
        fieldValue: 'DOSSIER_DEPOSE',
        position: 1,
      },
    }),
    byStageVisiteTechnique: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'visiteTechnique',
        isVisible: true,
        fieldValue: 'VISITE_TECHNIQUE',
        position: 2,
      },
    }),
    byStageDevis: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'devis',
        isVisible: true,
        fieldValue: 'DEVIS',
        position: 3,
      },
    }),
    byStageInstallationPlanifie: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'installationPlanifie',
        isVisible: true,
        fieldValue: 'INSTALLATION_PLANIFIE',
        position: 4,
      },
    }),
    byStageInstallationEnCours: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'installationEnCours',
        isVisible: true,
        fieldValue: 'INSTALLATION_EN_COURS',
        position: 5,
      },
    }),
    byStageInstallationTermine: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'installationTermine',
        isVisible: true,
        fieldValue: 'INSTALLATION_TERMINE',
        position: 6,
      },
    }),
    byStageCommissionPaye: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'commissionPaye',
        isVisible: true,
        fieldValue: 'COMMISSION_PAYE',
        position: 7,
      },
    }),
    byStageDossierBloque: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'dossierBloque',
        isVisible: true,
        fieldValue: 'DOSSIER_BLOQUE',
        position: 8,
      },
    }),
    byStageDossierAnnule: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'dossierAnnule',
        isVisible: true,
        fieldValue: 'DOSSIER_ANNULE',
        position: 9,
      },
    }),
    byStageNew: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'new',
        isVisible: true,
        fieldValue: 'NEW',
        position: 50,
      },
    }),
    byStageScreening: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'screening',
        isVisible: true,
        fieldValue: 'SCREENING',
        position: 51,
      },
    }),
    byStageMeeting: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'meeting',
        isVisible: true,
        fieldValue: 'MEETING',
        position: 52,
      },
    }),
    byStageProposal: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'proposal',
        isVisible: true,
        fieldValue: 'PROPOSAL',
        position: 53,
      },
    }),
    byStageCustomer: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'customer',
        isVisible: true,
        fieldValue: 'CUSTOMER',
        position: 54,
      },
    }),
  };
};
