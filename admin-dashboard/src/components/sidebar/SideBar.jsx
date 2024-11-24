import React from 'react';
import './sideBar.css';
import navList from '../../data/navItem';
import sidebarConfig from '../../data/sidebarConfig';
import CollapsibleNavItem from './CollapsibleNavItem';

// rendering individual, non-collapsible links. // 
const NavItem = ({ href, icon, label }) => (
    <li className="nav-item">
        <a href={href} className="nav-link">
            <i className={icon}></i>
            <span>{label}</span>
        </a>
    </li>
);

function SideBar() {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                {sidebarConfig.map((item, index) =>
                    item.type === 'link' ? (
                        <NavItem
                            key={index}
                            href={item.href}
                            icon={item.icon}
                            label={item.label}
                        />
                    ) : (
                        <CollapsibleNavItem
                            key={index}
                            id={item.id}
                            icon={item.icon}
                            label={item.label}
                            items={item.items}
                        />
                    )
                )}

                <li className="nav-heading">Pages</li>
                {navList.map(nav => (
                    <NavItem
                        key={nav._id}
                        href="#"
                        icon={nav.icon}
                        label={nav.name}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default SideBar;