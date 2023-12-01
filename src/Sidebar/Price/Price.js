import "./Price.css"
import Input from "../../components/Input"

function Price({handlePriceChange}) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="price" value="" onChange={handlePriceChange}/>
          <span className="checkmark"></span>All
        </label>
        <Input handleChange={handlePriceChange} value="50" title="$0-50" name="price"/>
        <Input handleChange={handlePriceChange} value={100} title="$50-100" name="price"/>
        <Input handleChange={handlePriceChange} value={150} title="$100-150" name="price"/>
        <Input handleChange={handlePriceChange} value={200} title="Over $150" name="price"/>
      </div>
    </div>
  )
}

export default Price