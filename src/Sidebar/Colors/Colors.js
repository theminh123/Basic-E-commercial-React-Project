import "./Colors.css"
import Input from "../../components/Input"

function Colors({handleColorChange}) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={ handleColorChange } type="radio" value="" name="color" />
        <span className="checkmark all"></span>
        All
      </label>

      <Input
        handleChange={ handleColorChange }
        value="black"
        title="Black"
        name="color"
        color="black"
      />

      <Input
        handleChange={ handleColorChange }
        value="blue"
        title="Blue"
        name="color"
        color="blue"
      />

      <Input
        handleChange={ handleColorChange }
        value="red"
        title="Red"
        name="color"
        color="red"
      />

      <Input
        handleChange={ handleColorChange }
        value="green"
        title="Green"
        name="color"
        color="green"
      />

      <label className="sidebar-label-container">
        <input
          onChange={ handleColorChange }
          type="radio"
          value="white"
          name="color"
        />
        <span
          className="checkmark"
          style={ { background: "white", border: "1px solid black" } }
        ></span>
        White
      </label>
    </div>
  )
}

export default Colors