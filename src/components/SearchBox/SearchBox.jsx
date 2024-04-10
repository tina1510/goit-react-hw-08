import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css"
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    dispatch(changeFilter(filterValue));
  };

    return (
        <div className={css.searchBox}>
            <p className={css.text}> Find contacts by name </p>
      <input className={css.searchIcon}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
        </div>
    )
}
export default SearchBox;