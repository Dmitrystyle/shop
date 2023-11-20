import Buttons from "../components/Buttons";
import "./Recomended.css";

const Recomended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttons onClickHandler={handleClick} value="" title="All Products" />
          <Buttons onClickHandler={handleClick} value="Sturm" title="Sturm" />
          <Buttons onClickHandler={handleClick} value="Makita" title="Makita" />
          <Buttons onClickHandler={handleClick} value="Bosсh" title="Bosсh" />
        </div>
      </div>
    </>
  );
};

export default Recomended;
