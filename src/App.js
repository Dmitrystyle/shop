import { useState } from "react";
import Navigation from "./Navigation/Nav.jsx";
import Prodacts from "./Products/Prodacts.jsx";
import Recomended from "./Recomended/Recomended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import "./index.css";
import products from "./data/data.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, company, newPrice, title }) =>
          category === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(({ img, title, newPrice }) => (
      <Card key={Math.random()} img={img} title={title} newPrice={newPrice} />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recomended handleClick={handleClick} />
      <Prodacts result={result} />
    </>
  );
}

export default App;
