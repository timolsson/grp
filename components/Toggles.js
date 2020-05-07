import style from "./Style/toggles.module.scss";
import Toggle from "./Toggle";
import { useState, useEffect } from "react";

const Toggles = ({ toggle }) => {
  return (
    <div className={style.toggles}>
      {toggle
        ? toggle.map((t) => {
            return (
              <Toggle
                click={t.click}
                toggleTitle={t.name}
                isToggled={t.isToggled}
              />
            );
          })
        : ""}
    </div>
  );
};

export default Toggles;
