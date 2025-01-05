import { Routes, Route } from "react-router-dom";

import { Home } from "./Components/Home/Home.jsx";
import { About } from '/src/Components/About/About.jsx';
import { Contact } from "./Components/Contact/Contact.jsx";
import { Nav } from "./Components/Nav/Nav.jsx";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
