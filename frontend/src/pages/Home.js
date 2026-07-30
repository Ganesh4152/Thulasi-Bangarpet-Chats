import React, { useState } from "react";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategorySection from "../components/CategorySection";
import PopularItems from "../components/PopularItems";
import Footer from "../components/Footer";

function Home() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Hero />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CategorySection />

      <PopularItems
        searchTerm={searchTerm}
      />

      <Footer />
    </>
  );
}

export default Home;
