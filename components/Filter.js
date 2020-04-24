import { useRef, useEffect } from 'react';
import Router from 'next/router';
import style from './Style/filter.module.scss';

const Filter = ({ setFilter }) => {
     const mainArea = useRef();
     const region = useRef();
     const type = useRef();
     const sector = useRef();

     let filters = {};

     useEffect(() => {
          console.log(filters);
          mainArea.current.addEventListener('change', () => {
               filters = {
                    ...filters,
                    mainArea: mainArea.current.value,
               };
               pushToRouter(filters);
          });
          region.current.addEventListener('change', () => {
               filters = {
                    ...filters,
                    main_geographic_focus: region.current.value,
               };
               pushToRouter(filters);
               console.log(filters);
          });
          type.current.addEventListener('change', () => {
               filters = {
                    ...filters,
                    type: type.current.value,
               };
               pushToRouter(filters);
          });
          sector.current.addEventListener('change', () => {
               filters = {
                    ...filters,
                    sector: sector.current.value,
               };
               pushToRouter(filters);
          });
     }, []);

     const pushToRouter = (filters) => {
          Router.push({ pathname: '/', query: filters });
     };

     return (
          <div className={style.filter}>
               <select ref={mainArea}>
                    <option value="policy_planning">Policy & Planning</option>
                    <option value="knowledge_learning">
                         Knowledge & Learning
                    </option>
                    <option value="finance_budgets">Finance & Budget</option>
                    <option value="practice_innovation">
                         Innovation & Practice
                    </option>
               </select>

               <select ref={region}>
                    <option>Global</option>
                    <option>Regional - Africa</option>
                    <option>Regional - Asia</option>
                    <option>Regional - LA</option>
                    <option>Regional - S. Asia</option>
                    <option>Regional - SE Asia</option>
               </select>

               <select ref={type}>
                    <option>Network/ partnership/ platform</option>
                    <option>Programme</option>
                    <option>Fund/finance</option>
                    <option>Organisation</option>
               </select>

               <select ref={sector}>
                    <option>Public</option>
                    <option>Private</option>
                    <option>CSO</option>
               </select>
          </div>
     );
};

export default Filter;
