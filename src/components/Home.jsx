import React from "react";
import SearchSection from "./SearchSection";
import TableOfUsers from "./Table/TableOfUsers";
import TableSection from "./Table/TableSection";

const Home = () => {
  return (
    <main>
      <SearchSection />
      <TableSection/>
    </main>
  );
};

export default Home;
