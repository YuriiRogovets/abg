import FilterGroup from '../FilterGroup/FilterGroup.jsx';

const CeilingFilters = () => {
  return (
    <>
      <FilterGroup title="Тип стелі">
        <label><input type="checkbox" /> Економ</label><br />
        <label><input type="checkbox" /> Стандарт</label><br />
        <label><input type="checkbox" /> Акустичні</label><br />
        <label><input type="checkbox" /> Медичні</label><br />
        <label><input type="checkbox" /> Металеві</label><br />
        <label><input type="checkbox" /> Дизайнерські</label>
      </FilterGroup>

      <FilterGroup title="Ціна">
        <label><input type="radio" name="ceiling-price" /> до 300 грн</label><br />
        <label><input type="radio" name="ceiling-price" /> 300–500 грн</label>
      </FilterGroup>

      <FilterGroup title="Бренд">
        <label><input type="checkbox" /> KCS</label><br />
        <label><input type="checkbox" /> Progress</label>
      </FilterGroup>
    </>
  );
};

export default CeilingFilters;