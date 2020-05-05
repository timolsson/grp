import style from './Style/hero.module.scss';
import rawInitiatives from '../assets/initiatives.json';
import HeroCard from './HeroCard';
import { useEffect } from 'react';

const Hero = () => {
     let arr = rawInitiatives;
     const numberOfInitiatives = (area, x, y) => {
          let results = arr.filter((x) => x.main_geographic_focus === area);
          return results.length;
     };
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
               stat: numberOfInitiatives(
                    'Regional - Asia',
                    'Regional - S. Asia',
                    'Regional - SE Asia'
               ),
          },
          {
               title: 'Latin America',
               stat: numberOfInitiatives('Regional - LA'),
          },
          {
               title: 'Other',
               stat: numberOfInitiatives('Regional - SIDS', 'Other'),
          },
     ];

     //   result.innerText = obj.hasOwnProperty('name');

     return (
          <div>
               <div className={style.hero}>
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
          </div>
     );
};

export default Hero;
