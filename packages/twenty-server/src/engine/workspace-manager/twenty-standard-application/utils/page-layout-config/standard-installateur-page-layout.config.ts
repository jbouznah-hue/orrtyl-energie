import { STANDARD_OBJECTS } from 'twenty-shared/metadata';

import { WidgetType } from 'src/engine/metadata-modules/page-layout-widget/enums/widget-type.enum';
import { PageLayoutType } from 'src/engine/metadata-modules/page-layout/enums/page-layout-type.enum';
import {
  GRID_POSITIONS,
  TAB_PROPS,
  VERTICAL_LIST_LAYOUT_POSITIONS,
  WIDGET_PROPS,
} from 'src/engine/workspace-manager/twenty-standard-application/constants/standard-page-layout-tabs.template';
import {
  type StandardPageLayoutConfig,
  type StandardPageLayoutTabConfig,
} from 'src/engine/workspace-manager/twenty-standard-application/utils/page-layout-config/standard-page-layout-config.type';

const INSTALLATEUR_PAGE_TABS = {
  home: {
    universalIdentifier: '30303030-0002-4001-8001-000000000101',
    ...TAB_PROPS.home,
    widgets: {
      fields: {
        universalIdentifier: '30303030-0002-4001-8001-000000000111',
        ...WIDGET_PROPS.fields,
      },
      dossiers: {
        universalIdentifier: '30303030-0002-4001-8001-000000000112',
        title: 'Dossiers',
        type: WidgetType.FIELD,
        gridPosition: GRID_POSITIONS.FULL_WIDTH,
        position: VERTICAL_LIST_LAYOUT_POSITIONS.SECOND,
        fieldUniversalIdentifier:
          STANDARD_OBJECTS.installateur.fields.dossiers.universalIdentifier,
      },
    },
  },
  timeline: {
    universalIdentifier: '30303030-0002-4001-8001-000000000102',
    ...TAB_PROPS.timeline,
    widgets: {
      timeline: {
        universalIdentifier: '30303030-0002-4001-8001-000000000121',
        ...WIDGET_PROPS.timeline,
      },
    },
  },
  tasks: {
    universalIdentifier: '30303030-0002-4001-8001-000000000103',
    ...TAB_PROPS.tasks,
    widgets: {
      tasks: {
        universalIdentifier: '30303030-0002-4001-8001-000000000131',
        ...WIDGET_PROPS.tasks,
      },
    },
  },
  notes: {
    universalIdentifier: '30303030-0002-4001-8001-000000000104',
    ...TAB_PROPS.notes,
    widgets: {
      notes: {
        universalIdentifier: '30303030-0002-4001-8001-000000000141',
        ...WIDGET_PROPS.notes,
      },
    },
  },
  files: {
    universalIdentifier: '30303030-0002-4001-8001-000000000105',
    ...TAB_PROPS.files,
    widgets: {
      files: {
        universalIdentifier: '30303030-0002-4001-8001-000000000151',
        ...WIDGET_PROPS.files,
      },
    },
  },
  emails: {
    universalIdentifier: '30303030-0002-4001-8001-000000000106',
    ...TAB_PROPS.emails,
    widgets: {
      emails: {
        universalIdentifier: '30303030-0002-4001-8001-000000000161',
        ...WIDGET_PROPS.emails,
      },
    },
  },
  calendar: {
    universalIdentifier: '30303030-0002-4001-8001-000000000107',
    ...TAB_PROPS.calendar,
    widgets: {
      calendar: {
        universalIdentifier: '30303030-0002-4001-8001-000000000171',
        ...WIDGET_PROPS.calendar,
      },
    },
  },
} as const satisfies Record<string, StandardPageLayoutTabConfig>;

export const STANDARD_INSTALLATEUR_PAGE_LAYOUT_CONFIG = {
  name: 'Default Installateur Layout',
  type: PageLayoutType.RECORD_PAGE,
  objectUniversalIdentifier: STANDARD_OBJECTS.installateur.universalIdentifier,
  universalIdentifier: '30303030-0002-4001-8001-000000000001',
  defaultTabUniversalIdentifier: null,
  tabs: INSTALLATEUR_PAGE_TABS,
} as const satisfies StandardPageLayoutConfig;
