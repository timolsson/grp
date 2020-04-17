import { useRef, useEffect } from "react";
import style from './Style/filter.module.scss';

const Filter = ({setFilter}) => {
    const mainArea = useRef()
    useEffect(() => {
        mainArea.current.addEventListener("change", () => {
            setFilter(mainArea.current.value)
        })
    }, []);
    return (
        <div className={style.filter}>
            <select ref={mainArea}>
                <option value="policy_planning" >
                    Policy & Planning
                </option>
                <option value="knowledge_learning">
                    Knowledge & Learning
                </option>
                <option value="finance_budgets" >
                    Finance & Budget
                </option>
                <option value="practice_innovation">
                    Innovation & Practice
                </option>
            </select>

            <select ref={mainArea}>
                <option value="policy_planning" >
                    Global
                </option>
                <option value="knowledge_learning">
                    Regional - S. Asia
                </option>
                <option value="finance_budgets" >
                    Regional - Africa
                </option>
                <option value="practice_innovation">
                    Regional - LA
                </option>
                <option value="practice_innovation">
                    Regional - SE. Asia
                </option>
            </select>

            <select ref={mainArea}>
                <option value="policy_planning" >
                    Network/Partnership/Platform
                </option>
                <option value="knowledge_learning">
                    Programme
                </option>
                <option value="finance_budgets" >
                    Fund/Finance
                </option>
                <option value="practice_innovation">
                    Organisation
                </option>
            </select>

            <select ref={mainArea}>
            <option value="policy_planning" >
                Public
            </option>
            <option value="knowledge_learning">
                Private
            </option>
            <option value="finance_budgets" >
                CSO
            </option>

            </select>
        </div>
    );
}

export default Filter