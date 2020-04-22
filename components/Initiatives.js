import rawInitiatives from '../assets/initiatives.json';
import style from './Style/initiatives.module.scss';
import InitiativeCard from './InitiativeCard';
import Filter from './Filter';
import Router from 'next/router';
import { useState, useEffect } from 'react';

const Initiatives = ({}) => {
     const [filter, setFilter] = useState();
     const [initiatives, setInitiatives] = useState(rawInitiatives);
     useEffect(() => {
          Router.events.on('routeChangeComplete', (url) => {
               setFilter(Router.router.query);
               setInitiatives(
                    rawInitiatives.filter((initiative) => {
                         return (
                              initiative.main_geographic_focus ===
                                   Router.router.query.main_geographic_focus &&
                              initiative.sector === Router.router.query.sector

                              // (initiative.main_geographic_focus ===
                              // Router.router.query.main_geographic_focus) &&

                              // (initiative.main_geographic_focus ===
                              // Router.router.query.main_geographic_focus) &&
                         );
                    })
               );
          });
     }, []);
     return (
          <div>
               <Filter setFilter={setFilter} />
               <div className={style.initiatives}>
                    {initiatives.map((initiative, i) => {
                         return <InitiativeCard data={initiative} key={i} />;
                    })}
               </div>
          </div>
     );
};

export default Initiatives;
