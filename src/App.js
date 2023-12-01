import { useState, useEffect } from 'react';
import Navigation from './Navigation/Nav'
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './db/data';
import Card from './components/Card';
import './index.css'

function App() {

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const handleColorChange = event => {
    setSelectedColor(event.target.value);
  };

  const handlePriceChange = event => {
    setSelectedPrice(event.target.value);
  };

  const handleClick = event => {
    setSelectedBrand(event.target.value);
  }

  useEffect(() => {
    let filtered = products;

    if (query) {
      filtered = filtered.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
    }

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (selectedColor) {
      filtered = filtered.filter(product => product.color === selectedColor);
    }

    if (selectedPrice) {
      filtered = filtered.filter(product => product.newPrice <= selectedPrice);
    }

    if (selectedBrand) {
      filtered = filtered.filter(product => product.company === selectedBrand);
    }

    setFilteredProducts(filtered);
  }, [query, selectedCategory, selectedColor, selectedPrice, selectedBrand]);


  const result = filteredProducts.map(
    ({ img, title, star, reviews, prevPrice, newPrice }) =>
      <Card key={ Math.random() }
        img={ img }
        title={ title }
        star={ star }
        reviews={ reviews }
        prevPrice={ prevPrice }
        newPrice={ newPrice }
      />
  )


return (
  <>
    <Sidebar handleCategoryChange={ handleCategoryChange } handleColorChange={ handleColorChange } handlePriceChange={ handlePriceChange } />
    <Navigation query={ query } handleInputChange={ handleInputChange } />
    <Recommended handleClick={ handleClick } />
    <Products result={ result } />
  </>
);
}

export default App;
