import "./Price.css";
import Input from "../../components/Input";

const Price = (handleChange = { handleChange }) => {
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
          title="0 - 1000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="1000 - 5000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={15000}
          title="5000 - 15000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
