import rawInitiatives from "../assets/initiatives.json";
import style from "./Style/initiatives.module.scss";
import InitiativeCard from "./InitiativeCard";
import Filter from "./Filter";
import Router from "next/router";
import { useState, useEffect, useRef } from "react";
import getRefactoredJSON from "../utils/util";

/* Renders the initiative cards from InitiativeCard.js
Maps and filter all the initiatives. Sends correct route to the Next router.
Default view is all initiatives shown. */

const Initiatives = ({}) => {
  const [initiatives, setInitiatives] = useState(rawInitiatives);

  console.log(getRefactoredJSON(rawInitiatives));

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
          return (
            <InitiativeCard
              isFlipped={!i ? true : false}
              data={initiative}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Initiatives;
