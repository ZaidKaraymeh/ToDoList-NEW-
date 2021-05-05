import React from "react";
import SidebarModal from "./SideBarModal";
import SidebarPage from "./SidebarPage";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Sidebar({ setSidebarPages, sidebarPages }) {
  return (
    <div className="sidebar">
      <h3 className="font-link">Sidebar</h3>
      <div className="sidebar-pages">
        {sidebarPages.map((page) => {
          return (
            <ul key={page.id}>
              <Link to={`/pages/${page.id}`}>
                <SidebarPage
                  page={page}
                  id={page.id}
                  name={page.name}
                  key={page.id}
                />
              </Link>
            </ul>
          );
        })}
      </div>
      <div className="create-page-btn-container">
        <SidebarModal
          setSidebarPages={setSidebarPages}
          sidebarPages={sidebarPages}
        />
      </div>
    </div>
  );
}

export default Sidebar;
