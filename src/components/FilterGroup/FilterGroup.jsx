import css from './FilterGroup.module.css';

const FilterGroup = ({ title, children }) => {
  return (
    <div className={css.group}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default FilterGroup;