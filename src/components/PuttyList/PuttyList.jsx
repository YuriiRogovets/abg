import PuttyItem from "../PuttyItem/PuttyItem.jsx";
import css from "./PuttyList.module.css"

const PuttyList = ({puttys}) => {
  return (
   <div className={css.content}>
         <h2>Шпаклівки Semin</h2>
      <ul className={css.list} >
        {puttys !== null &&
          puttys.length > 0 &&
          puttys.map((putty) => {
            return (
              <li key={putty.id}>
                <PuttyItem putty={putty} />
              </li>
            );
          }
          )}
      </ul>
       </div>
  )
}

export default PuttyList