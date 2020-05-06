import style from './Style/hero.module.scss';
import rawInitiatives from '../assets/initiatives.json';
import HeroCard from './HeroCard';
import { useEffect, useRef, useState } from 'react';
import Toggle from './Toggle';
import Aos from 'aos';

const Hero = () => {
     let arr = rawInitiatives;
     const numberOfInitiatives = (area) => {
          let results = arr.filter((x) => x.main_geographic_focus === area);
          return results.length;
     };

     const intro = useRef();
     const [toggle, setToggle] = useState(true);

     numberOfInitiatives('Regional - Asia');
     const cardData = [
          {
               title: 'Total',
               stat: arr.length,
          },

          {
               title: 'Global',
               stat: numberOfInitiatives('Global'),
          },
          {
               title: 'Africa',
               stat: numberOfInitiatives('Regional - Africa'),
          },
          {
               title: 'Asia',
               stat:
                    numberOfInitiatives('Regional - Asia') +
                    numberOfInitiatives('Regional - S. Asia') +
                    numberOfInitiatives('Regional - SE Asia'),
          },
          {
               title: 'Latin America',
               stat: numberOfInitiatives('Regional - LA'),
          },
          {
               title: 'Other',
               stat:
                    numberOfInitiatives('Regional - SIDS') +
                    numberOfInitiatives('Other') +
                    numberOfInitiatives('Other (e.g. Europe NA)') +
                    numberOfInitiatives('Regional - LDC'),
          },
     ];

     //   result.innerText = obj.hasOwnProperty('name');

     const handleClick = () => {
          setToggle(!toggle);
     };

     useEffect(() => {
          Aos.init({ duration: 500 });
     }, []);

     return (
          <div>
               <Toggle
                    click={handleClick}
                    toggleTitle="Geographic Distribution"
               />
               {toggle ? (
                    <div className={style.hero} data-aos="fade-down">
                         {cardData.map((data, i) => {
                              return (
                                   <HeroCard
                                        key={i}
                                        title={data.title}
                                        stat={data.stat}
                                   />
                              );
                         })}
                    </div>
               ) : (
                    ''
               )}
          </div>
     );
};

export default Hero;
