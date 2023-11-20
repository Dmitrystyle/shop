import "./Category.css";
import Input from "../../components/Input";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Все
        </label>
        <Input
          handleChange={handleChange}
          value="ручной инструмент"
          title="Ручной инструмент"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="наполный инструмент"
          title="Наполный инструмент"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="средства подмашивания"
          title="Средства подмашивания"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
