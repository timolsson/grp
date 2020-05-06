import { useState, useRef } from 'react';
import style from './style/toggle.module.scss';

const Toggle = (props) => {
     //  const button = useRef();
     //  const [toggle, setToggle] = useState(true);

     return (
          <div className={style.container}>
               <label class={style.switch}>
                    <input type="checkbox" onClick={() => props.click()} />
                    <span className={style.slider} />
               </label>
               <h5>{props.toggleTitle}</h5>
          </div>
     );
};

export default Toggle;
