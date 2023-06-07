import { useState } from "react";

import "../public/styles.css";

import Details from "./Details";
import Footer from "./Footer";
import Header from "./Header";
import Summary from "./Summary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [data, setData] = useState([]);

  const handleItemClick = (itemId, data) => {
    setSelectedItemId(itemId);
    setData(data);
  };

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Details onItemClick={handleItemClick} />} />
          <Route
            path="/summary"
            element={
              selectedItemId && <Summary itemId={selectedItemId} data={data} />
            }
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
