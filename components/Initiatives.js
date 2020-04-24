import rawInitiatives from "../assets/initiatives.json";
import style from "./Style/initiatives.module.scss";
import InitiativeCard from "./InitiativeCard";
import Filter from "./Filter";
import Router from "next/router";
import { useState, useEffect } from "react";

const Initiatives = ({}) => {
  const [initiatives, setInitiatives] = useState(rawInitiatives);
  useEffect(() => {
    Router.events.on("routeChangeComplete", (url) => {
      setInitiatives(
        rawInitiatives.filter((item) => {
          for (var key in Router.router.query) {
            if (
              item[key] === undefined ||
              item[key] != Router.router.query[key]
            )
              return false;
          }
          return true;
        })
      );
    });
  }, []);
  return (
    <div>
      <Filter />
      <div className={style.initiatives}>
        {initiatives.map((initiative, i) => {
          return <InitiativeCard data={initiative} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Initiatives;
