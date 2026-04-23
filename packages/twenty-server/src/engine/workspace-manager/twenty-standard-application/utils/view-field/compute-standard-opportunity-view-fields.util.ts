import { AggregateOperations } from 'twenty-shared/types';

import { type FlatViewField } from 'src/engine/metadata-modules/flat-view-field/types/flat-view-field.type';
import {
  createStandardViewFieldFlatMetadata,
  type CreateStandardViewFieldArgs,
} from 'src/engine/workspace-manager/twenty-standard-application/utils/view-field/create-standard-view-field-flat-metadata.util';

export const computeStandardOpportunityViewFields = (
  args: Omit<CreateStandardViewFieldArgs<'opportunity'>, 'context'>,
): Record<string, FlatViewField> => {
  return {
    // allOpportunities view fields
    allOpportunitiesReferenceDossierEnr: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'allOpportunities',
        viewFieldName: 'referenceDossierEnr',
        fieldName: 'referenceDossierEnr',
        position: 0,
        isVisible: true,
        size: 160,
      },
    }),
    allOpportunitiesNatureTravaux: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'allOpportunities',
        viewFieldName: 'natureTravaux',
        fieldName: 'natureTravaux',
        position: 1,
        isVisible: true,
        size: 150,
      },
    }),
    allOpportunitiesCouleurMpr: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'allOpportunities',
        viewFieldName: 'couleurMpr',
        fieldName: 'couleurMpr',
        position: 2,
        isVisible: true,
        size: 120,
      },
    }),
    allOpportunitiesStage: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'allOpportunities',
        viewFieldName: 'stage',
        fieldName: 'stage',
        position: 3,
        isVisible: true,
        size: 150,
      },
    }),
    allOpportunitiesPointOfContact: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'allOpportunities',
        viewFieldName: 'pointOfContact',
        fieldName: 'pointOfContact',
        position: 4,
        isVisible: true,
        size: 150,
      },
    }),
    allOpportunitiesInstallateur: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'allOpportunities',
        viewFieldName: 'installateur',
        fieldName: 'installateur',
        position: 5,
        isVisible: true,
        size: 150,
      },
    }),
    allOpportunitiesAmount: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'allOpportunities',
        viewFieldName: 'amount',
        fieldName: 'amount',
        position: 6,
        isVisible: true,
        size: 150,
        aggregateOperation: AggregateOperations.AVG,
      },
    }),
    allOpportunitiesStatutFinancierMpr: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'allOpportunities',
        viewFieldName: 'statutFinancierMpr',
        fieldName: 'statutFinancierMpr',
        position: 7,
        isVisible: true,
        size: 150,
      },
    }),
    allOpportunitiesCloseDate: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'allOpportunities',
        viewFieldName: 'closeDate',
        fieldName: 'closeDate',
        position: 8,
        isVisible: true,
        size: 150,
        aggregateOperation: AggregateOperations.MIN,
      },
    }),
    // Hidden fields (kept for compatibility)
    allOpportunitiesName: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'allOpportunities',
        viewFieldName: 'name',
        fieldName: 'name',
        position: 9,
        isVisible: false,
        size: 150,
      },
    }),
    allOpportunitiesCreatedBy: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'allOpportunities',
        viewFieldName: 'createdBy',
        fieldName: 'createdBy',
        position: 10,
        isVisible: false,
        size: 150,
      },
    }),
    allOpportunitiesCompany: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'allOpportunities',
        viewFieldName: 'company',
        fieldName: 'company',
        position: 11,
        isVisible: false,
        size: 150,
      },
    }),

    // byStage view fields
    byStageReferenceDossierEnr: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewFieldName: 'referenceDossierEnr',
        fieldName: 'referenceDossierEnr',
        position: 0,
        isVisible: true,
        size: 160,
      },
    }),
    byStageNatureTravaux: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewFieldName: 'natureTravaux',
        fieldName: 'natureTravaux',
        position: 1,
        isVisible: true,
        size: 150,
      },
    }),
    byStageCouleurMpr: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewFieldName: 'couleurMpr',
        fieldName: 'couleurMpr',
        position: 2,
        isVisible: true,
        size: 120,
      },
    }),
    byStagePointOfContact: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewFieldName: 'pointOfContact',
        fieldName: 'pointOfContact',
        position: 3,
        isVisible: true,
        size: 150,
      },
    }),
    byStageAmount: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewFieldName: 'amount',
        fieldName: 'amount',
        position: 4,
        isVisible: true,
        size: 150,
      },
    }),
    // Hidden fields (kept for compatibility)
    byStageName: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewFieldName: 'name',
        fieldName: 'name',
        position: 5,
        isVisible: false,
        size: 150,
      },
    }),
    byStageCreatedBy: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewFieldName: 'createdBy',
        fieldName: 'createdBy',
        position: 6,
        isVisible: false,
        size: 150,
      },
    }),
    byStageCloseDate: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewFieldName: 'closeDate',
        fieldName: 'closeDate',
        position: 7,
        isVisible: false,
        size: 150,
      },
    }),
    byStageCompany: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewFieldName: 'company',
        fieldName: 'company',
        position: 8,
        isVisible: false,
        size: 150,
      },
    }),

    // opportunityRecordPageFields view fields
    // Dossier ENR group
    opportunityRecordPageFieldsReferenceDossierEnr:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'referenceDossierEnr',
          fieldName: 'referenceDossierEnr',
          position: 0,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'dossierEnr',
        },
      }),
    opportunityRecordPageFieldsNatureTravaux:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'natureTravaux',
          fieldName: 'natureTravaux',
          position: 1,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'dossierEnr',
        },
      }),
    opportunityRecordPageFieldsCouleurMpr: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'opportunityRecordPageFields',
        viewFieldName: 'couleurMpr',
        fieldName: 'couleurMpr',
        position: 2,
        isVisible: true,
        size: 150,
        viewFieldGroupName: 'dossierEnr',
      },
    }),
    opportunityRecordPageFieldsPrioriteDossier:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'prioriteDossier',
          fieldName: 'prioriteDossier',
          position: 3,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'dossierEnr',
        },
      }),
    opportunityRecordPageFieldsSourceDossier:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'sourceDossier',
          fieldName: 'sourceDossier',
          position: 4,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'dossierEnr',
        },
      }),
    opportunityRecordPageFieldsDateContratEnr:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'dateContratEnr',
          fieldName: 'dateContratEnr',
          position: 5,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'dossierEnr',
        },
      }),

    // Logement group
    opportunityRecordPageFieldsTypeBien: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'opportunityRecordPageFields',
        viewFieldName: 'typeBien',
        fieldName: 'typeBien',
        position: 0,
        isVisible: true,
        size: 150,
        viewFieldGroupName: 'logement',
      },
    }),
    opportunityRecordPageFieldsAdresseBien: createStandardViewFieldFlatMetadata(
      {
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'adresseBien',
          fieldName: 'adresseBien',
          position: 1,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'logement',
        },
      },
    ),
    opportunityRecordPageFieldsSurfaceHabitable:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'surfaceHabitable',
          fieldName: 'surfaceHabitable',
          position: 2,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'logement',
        },
      }),
    opportunityRecordPageFieldsClasseEnergieDpe:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'classeEnergieDpe',
          fieldName: 'classeEnergieDpe',
          position: 3,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'logement',
        },
      }),
    opportunityRecordPageFieldsChauffageActuel:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'chauffageActuel',
          fieldName: 'chauffageActuel',
          position: 4,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'logement',
        },
      }),
    opportunityRecordPageFieldsUsageBien: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'opportunityRecordPageFields',
        viewFieldName: 'usageBien',
        fieldName: 'usageBien',
        position: 5,
        isVisible: true,
        size: 150,
        viewFieldGroupName: 'logement',
      },
    }),
    opportunityRecordPageFieldsAnneeConstruction:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'anneeConstruction',
          fieldName: 'anneeConstruction',
          position: 6,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'logement',
        },
      }),
    opportunityRecordPageFieldsNombreOccupants:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'nombreOccupants',
          fieldName: 'nombreOccupants',
          position: 7,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'logement',
        },
      }),

    // Devis & Visite group
    opportunityRecordPageFieldsStatutDevis: createStandardViewFieldFlatMetadata(
      {
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'statutDevis',
          fieldName: 'statutDevis',
          position: 0,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'devisVisite',
        },
      },
    ),
    opportunityRecordPageFieldsStatutVisiteTechnique:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'statutVisiteTechnique',
          fieldName: 'statutVisiteTechnique',
          position: 1,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'devisVisite',
        },
      }),

    // Installation group
    opportunityRecordPageFieldsInstallateur:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'installateur',
          fieldName: 'installateur',
          position: 0,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'installation',
        },
      }),
    opportunityRecordPageFieldsDateDebutTravaux:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'dateDebutTravaux',
          fieldName: 'dateDebutTravaux',
          position: 1,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'installation',
        },
      }),
    opportunityRecordPageFieldsDateFinTravaux:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'dateFinTravaux',
          fieldName: 'dateFinTravaux',
          position: 2,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'installation',
        },
      }),
    opportunityRecordPageFieldsNotesInstallation:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'notesInstallation',
          fieldName: 'notesInstallation',
          position: 3,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'installation',
        },
      }),

    // Financier group
    opportunityRecordPageFieldsAmount: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'opportunityRecordPageFields',
        viewFieldName: 'amount',
        fieldName: 'amount',
        position: 0,
        isVisible: true,
        size: 150,
        viewFieldGroupName: 'financier',
      },
    }),
    opportunityRecordPageFieldsMontantAideMpr:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'montantAideMpr',
          fieldName: 'montantAideMpr',
          position: 1,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'financier',
        },
      }),
    opportunityRecordPageFieldsMontantAideCee:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'montantAideCee',
          fieldName: 'montantAideCee',
          position: 2,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'financier',
        },
      }),
    opportunityRecordPageFieldsMontantCommission:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'montantCommission',
          fieldName: 'montantCommission',
          position: 3,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'financier',
        },
      }),
    opportunityRecordPageFieldsResteAChargeClient:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'resteAChargeClient',
          fieldName: 'resteAChargeClient',
          position: 4,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'financier',
        },
      }),
    opportunityRecordPageFieldsTotalAidePercu:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'totalAidePercu',
          fieldName: 'totalAidePercu',
          position: 5,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'financier',
        },
      }),
    opportunityRecordPageFieldsMontantTotalFacture:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'montantTotalFacture',
          fieldName: 'montantTotalFacture',
          position: 6,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'financier',
        },
      }),
    opportunityRecordPageFieldsStatutFinancierMpr:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'statutFinancierMpr',
          fieldName: 'statutFinancierMpr',
          position: 7,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'financier',
        },
      }),
    opportunityRecordPageFieldsStatutFinancierCee:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'statutFinancierCee',
          fieldName: 'statutFinancierCee',
          position: 8,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'financier',
        },
      }),
    opportunityRecordPageFieldsFinancementPrincipal:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'financementPrincipal',
          fieldName: 'financementPrincipal',
          position: 9,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'financier',
        },
      }),

    // Administratif ANAH group
    opportunityRecordPageFieldsDateDepotAnah:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'dateDepotAnah',
          fieldName: 'dateDepotAnah',
          position: 0,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'administratifAnah',
        },
      }),
    opportunityRecordPageFieldsDateAccordAnah:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'dateAccordAnah',
          fieldName: 'dateAccordAnah',
          position: 1,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'administratifAnah',
        },
      }),
    opportunityRecordPageFieldsNumeroDossierAnah:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'numeroDossierAnah',
          fieldName: 'numeroDossierAnah',
          position: 2,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'administratifAnah',
        },
      }),

    // Documents group
    opportunityRecordPageFieldsAvisDimposition:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'avisDimposition',
          fieldName: 'avisDimposition',
          position: 0,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'documents',
        },
      }),
    opportunityRecordPageFieldsTaxeFonciere:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'taxeFonciere',
          fieldName: 'taxeFonciere',
          position: 1,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'documents',
        },
      }),
    opportunityRecordPageFieldsCniRectoVerso:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'cniRectoVerso',
          fieldName: 'cniRectoVerso',
          position: 2,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'documents',
        },
      }),
    opportunityRecordPageFieldsJustificatifDomicile:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'justificatifDomicile',
          fieldName: 'justificatifDomicile',
          position: 3,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'documents',
        },
      }),
    opportunityRecordPageFieldsActeNotarie:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'acteNotarie',
          fieldName: 'acteNotarie',
          position: 4,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'documents',
        },
      }),
    opportunityRecordPageFieldsPhotosEnr: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'opportunityRecordPageFields',
        viewFieldName: 'photosEnr',
        fieldName: 'photosEnr',
        position: 5,
        isVisible: true,
        size: 150,
        viewFieldGroupName: 'documents',
      },
    }),
    opportunityRecordPageFieldsAutresDocuments:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'autresDocuments',
          fieldName: 'autresDocuments',
          position: 6,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'documents',
        },
      }),

    // Relations group
    opportunityRecordPageFieldsPointOfContact:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'pointOfContact',
          fieldName: 'pointOfContact',
          position: 0,
          isVisible: true,
          size: 150,
          viewFieldGroupName: 'relations',
        },
      }),
    opportunityRecordPageFieldsCompany: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'opportunityRecordPageFields',
        viewFieldName: 'company',
        fieldName: 'company',
        position: 1,
        isVisible: true,
        size: 150,
        viewFieldGroupName: 'relations',
      },
    }),
    opportunityRecordPageFieldsOwner: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'opportunityRecordPageFields',
        viewFieldName: 'owner',
        fieldName: 'owner',
        position: 2,
        isVisible: true,
        size: 150,
        viewFieldGroupName: 'relations',
      },
    }),

    // System group
    opportunityRecordPageFieldsStage: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'opportunityRecordPageFields',
        viewFieldName: 'stage',
        fieldName: 'stage',
        position: 0,
        isVisible: true,
        size: 150,
        viewFieldGroupName: 'deal',
      },
    }),
    opportunityRecordPageFieldsCloseDate: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'opportunityRecordPageFields',
        viewFieldName: 'closeDate',
        fieldName: 'closeDate',
        position: 1,
        isVisible: true,
        size: 150,
        viewFieldGroupName: 'deal',
      },
    }),
    opportunityRecordPageFieldsCreatedAt: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'opportunityRecordPageFields',
        viewFieldName: 'createdAt',
        fieldName: 'createdAt',
        position: 0,
        isVisible: true,
        size: 150,
        viewFieldGroupName: 'system',
      },
    }),
    opportunityRecordPageFieldsCreatedBy: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'opportunityRecordPageFields',
        viewFieldName: 'createdBy',
        fieldName: 'createdBy',
        position: 1,
        isVisible: true,
        size: 150,
        viewFieldGroupName: 'system',
      },
    }),
    opportunityRecordPageFieldsUpdatedAt: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'opportunityRecordPageFields',
        viewFieldName: 'updatedAt',
        fieldName: 'updatedAt',
        position: 2,
        isVisible: false,
        size: 150,
        viewFieldGroupName: 'system',
      },
    }),
    opportunityRecordPageFieldsUpdatedBy: createStandardViewFieldFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'opportunityRecordPageFields',
        viewFieldName: 'updatedBy',
        fieldName: 'updatedBy',
        position: 3,
        isVisible: false,
        size: 150,
        viewFieldGroupName: 'system',
      },
    }),
    opportunityRecordPageFieldsTaskTargets:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'taskTargets',
          fieldName: 'taskTargets',
          position: 4,
          isVisible: false,
          size: 150,
          viewFieldGroupName: 'system',
        },
      }),
    opportunityRecordPageFieldsNoteTargets:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'noteTargets',
          fieldName: 'noteTargets',
          position: 5,
          isVisible: false,
          size: 150,
          viewFieldGroupName: 'system',
        },
      }),
    opportunityRecordPageFieldsAttachments:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'attachments',
          fieldName: 'attachments',
          position: 6,
          isVisible: false,
          size: 150,
          viewFieldGroupName: 'system',
        },
      }),
    opportunityRecordPageFieldsTimelineActivities:
      createStandardViewFieldFlatMetadata({
        ...args,
        objectName: 'opportunity',
        context: {
          viewName: 'opportunityRecordPageFields',
          viewFieldName: 'timelineActivities',
          fieldName: 'timelineActivities',
          position: 7,
          isVisible: false,
          size: 150,
          viewFieldGroupName: 'system',
        },
      }),
  };
};
