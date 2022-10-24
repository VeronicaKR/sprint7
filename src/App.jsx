import { useState } from "react";
import {lista} from "./utils/lista"

const finalPrice = (price) => `${price.toFixed(2)}`

export default function App() {

  const [isCheck, setIsCheck] = useState(
    new Array(lista.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const onChange = (position) =>{
    const updateCheckedState = isCheck.map((item,index) =>
    index === position ? !item : item
    );
    setIsCheck(updateCheckedState);

    const total = updateCheckedState.reduce(
      (sum,currentState,index)=>{
        if (currentState === true){
          return sum+lista[index].price;
        }
        return sum;
      },
      0
    );
    setTotal(total);

  };

  return (
    <>
    <h1> ¿Qué quieres hacer?</h1>
    <ul className="lista">
      {lista.map(({id,price}, index) =>{
        return (
          <li key={index}>
            <div className="lista-items">
              <div className="selector">
                <input type="checkbox"
                id={`${index}`}
                check={isCheck[index].toString()}
                onChange ={()=> onChange(index)}
                />
                <label htmlFor={`custom-checkbox-${index}`}>{id}</label>
              </div>
            </div>
          </li>
        );
      })}
      <li className="list-items">
        <div className="left-selection">Total:</div>
        <div className="right-selection">{finalPrice(total)}</div>
      </li>
    </ul>
    </>
  );
    }
