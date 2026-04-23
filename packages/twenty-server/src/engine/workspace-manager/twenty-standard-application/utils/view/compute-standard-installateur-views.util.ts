import { ViewType, ViewKey } from 'twenty-shared/types';

import { type FlatView } from 'src/engine/metadata-modules/flat-view/types/flat-view.type';

import {
  createStandardViewFlatMetadata,
  type CreateStandardViewArgs,
} from 'src/engine/workspace-manager/twenty-standard-application/utils/view/create-standard-view-flat-metadata.util';

export const computeStandardInstallateurViews = (
  args: Omit<CreateStandardViewArgs<'installateur'>, 'context'>,
): Record<string, FlatView> => {
  return {
    allInstallateurs: createStandardViewFlatMetadata({
      ...args,
      objectName: 'installateur',
      context: {
        viewName: 'allInstallateurs',
        name: 'All {objectLabelPlural}',
        type: ViewType.TABLE,
        key: ViewKey.INDEX,
        position: 0,
        icon: 'IconList',
      },
    }),
    installateurRecordPageFields: createStandardViewFlatMetadata({
      ...args,
      objectName: 'installateur',
      context: {
        viewName: 'installateurRecordPageFields',
        name: 'Installateur Record Page Fields',
        type: ViewType.FIELDS_WIDGET,
        key: null,
        position: 0,
        icon: 'IconList',
      },
    }),
  };
};
