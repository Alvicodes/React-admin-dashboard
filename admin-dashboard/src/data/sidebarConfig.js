const sidebarConfig = [
  { type: "link", href: "/", icon: "bi bi-grid", label: "Dashboard" },
  {
    type: "collapsible",
    id: "documents-nav",
    icon: "bi bi-menu-button-wide",
    label: "Documents",
    items: [
      { href: "#", label: "Customers" },
      { href: "#", label: "Suppliers" },
      { href: "#", label: "Logistics" },
    ],
  },
  {
    type: "collapsible",
    id: "forms-nav",
    icon: "bi bi-menu-button-wide",
    label: "Forms",
    items: [
      { href: "#", label: "Application Form" },
      { href: "#", label: "Release Form" },
      { href: "#", label: "Cancellation Form" },
    ],
  },
  {
    type: "collapsible",
    id: "tables-nav",
    icon: "bi bi-menu-button-wide",
    label: "Tables",
    items: [
      { href: "#", label: "General Tables" },
      { href: "#", label: "Data Tables" },
    ],
  },
  {
    type: "collapsible",
    id: "charts-nav",
    icon: "bi bi-menu-button-wide",
    label: "Charts",
    items: [
      { href: "#", label: "Chart.js" },
      { href: "#", label: "ApexCharts" },
      { href: "#", label: "ECharts" },
    ],
  },
  {
    type: "collapsible",
    id: "icons-nav",
    icon: "bi bi-menu-button-wide",
    label: "Icons",
    items: [
      { href: "#", label: "Bootstrap Icons" },
      { href: "#", label: "Remix Icons" },
      { href: "#", label: "Boxicons" },
    ],
  },
];

export default sidebarConfig;
