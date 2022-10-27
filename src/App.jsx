import { useEffect, useState } from "react";
import { Panel } from "./components/Panel";


export const App = () =>  {

  const [stateWeb, setStateWeb] = useState(()=>{
    const initialValue = JSON.parse(localStorage.getItem('item1'))
    return initialValue ? initialValue : false;
  });
  const [stateSeo, setStateSeo] = useState(()=>{
    const initialValue = JSON.parse(localStorage.getItem('item2'))
    return initialValue ? initialValue : false;
  });
  const [stateAds, setStateAds] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('item3'))
    return initialValue ? initialValue : false;
  });


  useEffect(() => {
      localStorage.setItem('item1', JSON.stringify(stateWeb))
      localStorage.setItem('item2',JSON.stringify(stateSeo))
      localStorage.setItem('item3',JSON.stringify(stateAds))
   }, [stateAds,stateSeo,stateWeb])
  

  const handleOnChange = (e) => {
    if(e.target.name === 'web'){
      setStateWeb(!stateWeb);  
    } 
    if (e.target.name === 'seo'){
      setStateSeo(!stateSeo);
    }
    if(e.target.name === 'ads'){
      setStateAds(!stateAds);
    }
    console.log(e.target.checked)
  }

  const total= () =>{
    let totalPrice = 0;
    if(stateWeb === true){
      totalPrice = totalPrice + 500 + item
    } 
    if(stateSeo === true){
      totalPrice = totalPrice + 300
    } 
    if(stateAds === true){
      totalPrice = totalPrice + 200
    }
    return totalPrice 
  }

const [item, setItem] = useState(0);

  const sum = (page,idioma) => {
    setItem(page * 30 + idioma * 30)
    }
  

    
    return(
      <>
        <p>Que quieres hacer?</p>
        <input type="checkbox" name="web" checked={stateWeb} onChange={handleOnChange}/>una pagina web 500€ 
        <br />
        <input type="checkbox" name="seo" checked={stateSeo} onChange={handleOnChange}/>una consultoria SEO 300€ 
        <br />
        <input type="checkbox" name="ads" checked={stateAds} onChange={handleOnChange}/>una campaña de Google Ads 200€ 
        <br />
        <p>
          Total:{total()}
        </p>
        
        <div>{stateWeb ? <Panel sum={sum} /> : <></>}  
            
        </div>

      </>
        )
}

