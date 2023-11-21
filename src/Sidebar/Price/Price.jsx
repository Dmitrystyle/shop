import "./Price.css";
import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>Все
        </label>

        <Input
          handleChange={handleChange}
          value={1000}
          title="0р. - 1000р."
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={2000}
          title="1000р. - 2000р."
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={3000}
          title="2000р. - 3000р."
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
