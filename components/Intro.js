import style from './style/intro.module.scss';
import { useRef, useEffect } from 'react';
const Intro = () => {
     const button = useRef();
     const intro = useRef();
     useEffect(() => {
          button.current.addEventListener('click', () => {
               intro.current.style.display = 'none';
          });
     }, []);
     return (
          <div>
               {/* <input type="checkbox" className={style.button} /> */}
               {/* <label for="checkbox">Click me</label> */}
               <div ref={intro} className={style.intro}>
                    <h1>
                         Introduction to global resilience partnership
                         initiatives
                    </h1>
                    <button ref={button} className={style.button}>
                         {' '}
                         x
                    </button>

                    <p>This is an intro text to what this page is about.</p>
               </div>
          </div>
     );
};

export default Intro;
