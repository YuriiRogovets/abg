import FilterGroup from '../FilterGroup/FilterGroup';

const PuttyFilters = () => {
  return (
    <>
      <FilterGroup title="Тип шпаклівки">
        <label><input type="checkbox" /> Готова</label><br />
        <label><input type="checkbox" /> Суха</label>
      </FilterGroup>

          <FilterGroup title="Вага">
        <label><input type="radio" name="putty-weight" /> 310 мл</label><br />
        <label><input type="radio" name="putty-weight" /> 1 л</label><br />
              <label><input type="radio" name="putty-weight" /> 5 л</label><br />
              <label><input type="radio" name="putty-weight" /> 10 л</label><br />
              <label><input type="radio" name="putty-weight" /> 1,5 кг</label><br />
              <label><input type="radio" name="putty-weight" /> 5 кг</label><br />
              <label><input type="radio" name="putty-weight" /> 10 кг</label><br />
              <label><input type="radio" name="putty-weight" /> 20 кг</label><br />
              
        <label><input type="radio" name="putty-weight" /> 25 кг</label>
      </FilterGroup>

      <FilterGroup title="Застосування">
        <label><input type="checkbox" /> Для внутрішніх робіт</label><br />
        <label><input type="checkbox" /> Для зовнішніх робіт</label>
      </FilterGroup>
    </>
  );
};

export default PuttyFilters;