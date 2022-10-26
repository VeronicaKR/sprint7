import { useEffect, useState } from "react";
import { PanelStyled } from "./PanelStyled"


export const Panel = ({sum}) => {
  const [page, setPage] = useState(0);
  const [idioma, setIdioma] = useState(0); 

 const onChange = (e) =>{
 
  if(e.target.name==="page"){
    setPage(Number(e.target.value));
  } 
  if(e.target.name==="idioma"){
    setIdioma(Number(e.target.value));
  }
   }
console.log({page,idioma})

useEffect(() => {
   sum(page,idioma);
}, [page,idioma])

  return (
    <PanelStyled>
        <div>
            <p> Numero de paginas  <input type="number" name="page" onChange={onChange}/></p>
            <p> Numero de idiomas  <input type="number" name="idioma" onChange={onChange}/></p>
        </div>
     </PanelStyled>
    )
}
