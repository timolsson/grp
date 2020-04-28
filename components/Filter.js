import { useRef, useEffect, useState } from 'react';
import Router from 'next/router';
import style from './Style/filter.module.scss';

const Filter = ({ setFilter }) => {
     const mainArea = useRef();
     const region = useRef();
     const type = useRef();
     const sector = useRef();

     let filters = {};
     let prevMainArea;
     const [filterBlobs, setFilterBlobs] = useState();

     useEffect(() => {
          let dataArray = [];
          for (let o in Router.router.query) {
               dataArray.push(Router.router.query[o]);
          }
          setFilterBlobs(dataArray);
     }, []);

     useEffect(() => {
          Router.events.on('routeChangeComplete', () => {
               let dataArray = [];
               for (let o in Router.router.query) {
                    dataArray.push(Router.router.query[o]);
               }
               setFilterBlobs(dataArray);
          });
     }, []);

     useEffect(() => {
          mainArea.current.addEventListener('change', () => {
               if (prevMainArea) {
                    delete filters[prevMainArea];
               }
               filters[mainArea.current.value] = '1';

               pushToRouter(filters);
               prevMainArea = mainArea.current.value;
          });
          region.current.addEventListener('change', () => {
               filters.main_geographic_focus = region.current.value;
               pushToRouter(filters);
          });
          type.current.addEventListener('change', () => {
               filters.type = type.current.value;
               pushToRouter(filters);
          });
          sector.current.addEventListener('change', () => {
               filters.sector = sector.current.value;
               pushToRouter(filters);
          });
     }, []);

     const pushToRouter = (o) => {
          Router.push({ pathname: '/', query: o });
     };

     const removeBlob = (f) => {
          filters = Router.router.query;
          console.log(filters);
          Object.keys(Router.router.query).forEach((key) => {
               if (Router.router.query[key] === f) {
                    delete filters[key];
               }
          });
          console.log(filters);
          pushToRouter(filters);
     };

     return (
          <div>
               <div className={style.filter}>
                    <select ref={mainArea}>
                         <option value="" defaultValue hidden>
                              Main Area of Work
                         </option>
                         <option value="policy_planning">
                              Policy & Planning
                         </option>
                         <option value="knowledge_learning">
                              Knowledge & Learning
                         </option>
                         <option value="finance_budgets">
                              Finance & Budget
                         </option>
                         <option value="practice_innovation">
                              Innovation & Practice
                         </option>
                    </select>

                    <select ref={region}>
                         <option value="" defaultValue hidden>
                              Main Geographic Focus
                         </option>
                         <option>Global</option>
                         <option>Regional - Africa</option>
                         <option>Regional - Asia</option>
                         <option>Regional - LA</option>
                         <option>Regional - S. Asia</option>
                         <option>Regional - SE Asia</option>
                    </select>

                    <select ref={type}>
                         <option value="" defaultValue hidden>
                              Type
                         </option>
                         <option>Network/ partnership/ platform</option>
                         <option>Programme</option>
                         <option>Fund/finance</option>
                         <option>Organisation</option>
                    </select>

                    <select ref={sector}>
                         <option value="" defaultValue hidden>
                              Sector
                         </option>
                         <option>Public</option>
                         <option>Private</option>
                         <option>CSO</option>
                    </select>
               </div>
               <div className={style.blobs}>
                    {filterBlobs
                         ? filterBlobs.map((f, i) => {
                                return (
                                     <button
                                          key={i}
                                          className={style.blobButton}
                                          onClick={() => {
                                               removeBlob(f);
                                          }}
                                     >
                                          {f}
                                     </button>
                                );
                           })
                         : ''}
               </div>
          </div>
     );
};

export default Filter;
