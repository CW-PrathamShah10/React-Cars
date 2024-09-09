import { useDispatch, useSelector } from "react-redux";
import { setSorting } from "./features/filterSlice";
import "./App.css";
const SortBy = () => {
  const dispatch = useDispatch();
  const { sorting } = useSelector((state) => state.filter);
  return (
    <div className="sort-by">
      <span>Sort By:</span>
      <select
        name="sort-bar"
        className="select-bar"
        onChange={(e) => {
          dispatch(setSorting(e.target.value));
        }}
        value={sorting}
      >
        <option value="DEFAULT">Default</option>
        <option value="ASC">Low to High</option>
        <option value="DESC">High to Low</option>
      </select>
    </div>
  );
};
export default SortBy;
