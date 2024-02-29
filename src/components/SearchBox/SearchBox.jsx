import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../redux/filtersSlice";
import { selectSearchQuery } from "../../redux/selectors";
import { useId } from "react";
import css from "../SearchBox/SearchBox.module.css";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);

  const inputId = useId();

  const handleChange = (event) => {
    const query = event.target.value;
    dispatch(setSearchQuery(query));
  };

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={inputId}>
        Search contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id={inputId}
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};
