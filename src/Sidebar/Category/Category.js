import "./Category.css"
import Input from "../../components/Input";

function Category({handleCategoryChange}) {
  return <>
    <div className="sidebar-items">
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleCategoryChange} type="radio" name="category" value=""/>
          <span className="checkmark"></span>All
        </label>
        <Input handleChange={handleCategoryChange} value="sneakers" title="Sneakers" name="category"/>
        <Input handleChange={handleCategoryChange} value="flats" title="Flats" name="category"/>
        <Input handleChange={handleCategoryChange} value="sandals" title="Sandals" name="category"/>
        <Input handleChange={handleCategoryChange} value="heels" title="Heels" name="category"/>
      </div>
    </div>
  </>
}

export default Category;