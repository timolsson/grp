import style from './style/toggles.module.scss';
import Toggle from './Toggle';
import { useState, useEffect } from 'react';

const Toggles = ({ toggle }) => {
     const [activeToggle, setActiveToggle] = useState();
     let toggles = [];

     console.log(toggle);
     //  useEffect(() => {
     //       if (!toggles.includes(toggle)) {
     //            toggles.push(toggle);
     //            setActiveToggle(toggles);
     //       }
     //  }, [toggle]);

     return (
          <div className={style.toggles}>
               {toggle
                    ? toggle.map((t) => {
                           return (
                                <Toggle click={t.click} toggleTitle={t.name} />
                           );
                      })
                    : ''}
          </div>
     );
};

export default Toggles;
