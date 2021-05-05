import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page from "./components/Page";
function App() {
  const [sidebarPages, setSidebarPages] = useState([]);
  console.log("From App.js: ", sidebarPages);
  return (
    <div className="home-container">
      <Router>
        <Sidebar
          sidebarPages={sidebarPages}
          setSidebarPages={setSidebarPages}
        />
        <main className="py-3">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/pages/:id" component={Page} />
          <Route
            path="/pages/:id"
            render={(routeProps) => {
              <Page {...routeProps} sidebarPages={sidebarPages} />;
            }}
          />
        </main>
      </Router>
    </div>
  );
}

export default App;
