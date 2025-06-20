import CeilingItem from "../CeilingItem/CeilingItem.jsx"
import css from "./CeilingList.module.css"

const CeilingList = ({ ceilings }) => {
  return (
    <div className={css.content}>
      <h2>Плити підвісної стелі</h2>
      <ul className={css.list}>
        {ceilings !== null &&
          ceilings.length > 0 &&
          ceilings.map((ceiling) => {
            return (
              <li key={ceiling.id}>
                <CeilingItem ceiling={ceiling} />
              </li>
            );
          }
          )}
      </ul>
    </div>
  );
};

export default CeilingList;