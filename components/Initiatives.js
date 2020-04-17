import rawInitiatives from "../assets/initiatives.json";
import style from "./Style/initiatives.module.scss";
import InitiativeCard from "./InitiativeCard";
import Filter from "./Filter";
import { useState } from "react";


const Initiatives = ({}) => {
  const  [filter, setFilter] = useState ()
  const  [initiatives, setInitiatives] = useState (rawInitiatives)
  return (
    <div>
      <Filter setFilter={setFilter}/>
    <div className={style.initiatives}>
      {initiatives.map((initiative, i) => {
        return <InitiativeCard data={initiative} key={i} />;
      })}
    </div>
    </div>
  );
};

export default Initiatives;
