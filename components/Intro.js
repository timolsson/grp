import style from './style/intro.module.scss';

const Intro = () => {
     return (
          <div>
               <input type="checkbox" className={style.button} />
               {/* <label for="checkbox">Click me</label> */}
               <div className={style.intro}>
                    <h1>
                         Introduction to global resilience partnership
                         initiatives
                    </h1>

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
