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

                    <p>
                         The Center for Climate Change and Environmental
                         Research (C3ER) at BRAC University has tested
                         community-led innovations that enhance the resilience
                         of households and communities before, during and after
                         floods. The project solution involved the design and
                         testing of flood-resilient houses, and related
                         integrated innovations such as water harvesting, cage
                         fishing, and renewable energy
                    </p>
               </div>
          </div>
     );
};

export default Intro;
