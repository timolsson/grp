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
                         const mainArea = [
                              initiative.policy_planning
                                   ? 'policy_planning'
                                   : '',
                              initiative.knowledge_learning
                                   ? 'knowledge_learning'
                                   : '',
                              initiative.finance_budgets
                                   ? 'finance_budgets'
                                   : '',
                              initiative.practice_innovation
                                   ? 'practice_innovation'
                                   : '',
                         ];
                         //  console.log(Router.router.query.mainArea);
                         console.log(
                              Router.router.query.main_geographic_focus
                                   ? initiative.main_geographic_focus ===
                                          Router.router.query
                                               .main_geographic_focus
                                   : true && Router.router.query.sector
                                   ? initiative.sector ===
                                     Router.router.query.sector
                                   : true && Router.router.query.type
                                   ? initiative.type ===
                                     Router.router.query.type
                                   : true &&
                                     //  Router.router.query.mainArea
                                     mainArea.includes(
                                          Router.router.query.mainArea
                                     )
                         );

                         return Router.router.query.main_geographic_focus
                              ? initiative.main_geographic_focus ===
                                     Router.router.query.main_geographic_focus
                              : true && Router.router.query.sector
                              ? initiative.sector === Router.router.query.sector
                              : true && Router.router.query.type
                              ? initiative.type === Router.router.query.type
                              : true &&
                                //  Router.router.query.mainArea
                                mainArea.includes(Router.router.query.mainArea);
                         // : true;
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
