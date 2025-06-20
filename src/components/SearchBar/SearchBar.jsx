import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSetSearchQuery, onMessage }) => {
  return (
    <div>
      <Formik
        initialValues={{
          query: "",
        }}
        onSubmit={(values, { resetForm }) => {
          if (values.query.trim() === "") {
            onMessage();
            return;
          }
          onSetSearchQuery(values.query);
          resetForm();
        }}
      >
        <Form className={css.searchForm}>
          <Field
            className={css.searchField}
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          <button className={css.searchBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
