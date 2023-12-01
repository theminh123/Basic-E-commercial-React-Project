import "./Sidebar.css"
import Category from "./Category/Category"
import Colors from "./Colors/Colors"
import Price from "./Price/Price"


function Sidebar({handleCategoryChange, handleColorChange, handlePriceChange}) {
  return <>
    <section className="side-bar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category handleCategoryChange={handleCategoryChange}/>
      <Price handlePriceChange={handlePriceChange}/>
      <Colors handleColorChange={handleColorChange}/>
    </section>
  </>
}

export default Sidebar