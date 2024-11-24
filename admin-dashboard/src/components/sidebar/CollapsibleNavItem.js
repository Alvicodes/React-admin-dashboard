import React from "react";

const CollapsibleNavItem = ({ id, icon, label, items }) => (
  <li className="nav-item">
    <a
      href="#"
      className="nav-link collapsed"
      data-bs-target={`#${id}`}
      data-bs-toggle="collapse"
      aria-expanded="false"
      aria-controls={id}
    >
      <i className={icon}></i>
      <span>{label}</span>
      <i className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id={id} className="nav-content collapse" data-bs-parent="#sidebar-nav">
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.href}>
            <i className="bi bi-circle"></i>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  </li>
);

export default CollapsibleNavItem;
