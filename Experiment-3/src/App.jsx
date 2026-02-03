import { useState } from "react";
import NavigationBar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Section from "./Pages/Section";

const App = () => {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "home") return <Home />;
    if (page === "about") return <About />;
    if (page === "section") return <Section />;
    return <Home />;
  };

  return (
    <>
      <NavigationBar setPage={setPage} />
      {renderPage()}
    </>
  );
};

export default App;
