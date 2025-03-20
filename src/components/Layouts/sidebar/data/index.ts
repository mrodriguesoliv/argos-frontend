import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        icon: Icons.ChartBarSquareIcon,
        items: [
          {
            title: "Overview",
            url: "/",
          },
        ],
      },
      {
        title: "Tickets",
        url: "/pages/tickets",
        icon: Icons.ExclamationCircleIcon,
        items: [],
      },
      {
        title: "Assistants",
        url: "/pages/assistants",
        icon: Icons.UserGroupIcon,
        items: [],
      },
      {
        title: "Organizations",
        url: "/pages/organizations",
        icon: Icons.Squares2X2Icon,
        items: [],
      },
      {
        title: "Files",
        url: "/pages/files",
        icon: Icons.DocumentDuplicateIcon,
        items: [],
      },
      {
        title: "Control Panel",
        url: "/api/control-panel",
        icon: Icons.CogIcon,
        items: [],
      },
      {
        title: "Meets",
        url: "/api/meets",
        icon: Icons.VideoCameraIcon,
        items: [],
      },
    ],
  },
  {
    label: "OTHERS",
    items: [
      {
        title: "UI Elements",
        icon: Icons.FourCircle,
        items: [
          {
            title: "Alerts",
            url: "/ui-elements/alerts",
          },
          {
            title: "Buttons",
            url: "/ui-elements/buttons",
          },
        ],
      },
    ],
  },
];
