import initiatives from "../assets/initiatives.json";
import style from "./Style/initiatives.module.scss";
import InitiativeCard from "./InitiativeCard";

const Initiatives = ({}) => {
  return (
    <div className={style.initiatives}>
      {initiatives.map((initiative, i) => {
        return <InitiativeCard data={initiative} key={i} />;
      })}
    </div>
  );
};

export default Initiatives;
