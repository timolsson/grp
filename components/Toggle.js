import { useState, useRef, useEffect } from 'react';
import style from './style/toggle.module.scss';

const Toggle = (props) => {
     //  const button = useRef();
     //  const [toggle, setToggle] = useState(true);
     const input = useRef();

     useEffect(() => {
          input.current.checked = props.isToggled;
          console.log(props.isToggled);
     }, []);

     return (
          <div className={style.container}>
               <label class={style.switch}>
                    <input
                         ref={input}
                         type="checkbox"
                         onClick={(e) => {
                              props.click();
                         }}
                    />
                    <span className={style.slider} />
               </label>
               <h5>{props.toggleTitle}</h5>
          </div>
     );
};

export default Toggle;
