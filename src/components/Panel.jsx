import { useEffect, useState } from "react";
import { PanelStyled } from "./PanelStyled";
import { ButtonPlus } from "./ButtonPlus";
import { ButtonLess } from "./ButtonLess";


export const Panel = ({sum}) => {
  const [page, setPage] = useState(()=>{
    const initialValue= JSON.parse(localStorage.getItem('item4'))
    return initialValue ? initialValue : 0;
  });
  const [idioma, setIdioma] = useState(()=>{
    const initialValue = JSON.parse(localStorage.getItem('item5'))
    return initialValue ? initialValue : 0;
  }); 

  useEffect(() => {
    localStorage.setItem('item4', JSON.stringify(page))
    localStorage.setItem('item5',JSON.stringify(idioma))
 }, [page,idioma])

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
            <p> Numero de paginas  
                <ButtonPlus item={page} setitem={setPage}/>
                <input type="number" name="page" onChange={onChange} value={page}/>
                <ButtonLess item={page} setitem={setPage}/>
              
            </p>



            <p> Numero de idiomas  
              <ButtonPlus item={idioma} setitem={setIdioma}/>
              <input type="number" name="idioma" onChange={onChange} value={idioma}/>
              <ButtonLess item={idioma} setitem={setIdioma}/>
              </p>
        </div>
     </PanelStyled>
    )
}
