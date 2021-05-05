import React from "react";

function Page({ match, sidebarPages }) {
  console.log("From Page.js: ", sidebarPages);
  const page = sidebarPages.find((p) => p.id == match.params.id);
  return (
    <div>
      <div>{page.name}</div>
    </div>
  );
}

export default Page;
