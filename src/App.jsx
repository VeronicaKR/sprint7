import { useState } from "react";

export const App = () => {

  const [stateWeb, setStateWeb] = useState(false);
  const [stateSeo, setStateSeo] = useState(false);
  const [stateAds, setStateAds] = useState(false);

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
      totalPrice = totalPrice + 500
    } 
    if(stateSeo === true){
     totalPrice= totalPrice + 300
    } 
    if(stateAds === true){
      totalPrice= totalPrice + 200
    }
    return totalPrice

  }
    return(
      <>
        <p>Que quieres hacer?</p>
        <input type="checkbox" name="web" checked={stateWeb} onChange={handleOnChange}/>una pagina web 500€ 
        <br />
        <input type="checkbox" name="seo" checked={stateSeo} onChange={handleOnChange}/>una consultoria SEO 300€ 
        <br />
        <input type="checkbox" name="ads" checked={stateAds} onChange={handleOnChange}/>una campaña de Google Ads 200€ 
        <div>
          Total:{total()}
        </div>
      </>
        )
}

