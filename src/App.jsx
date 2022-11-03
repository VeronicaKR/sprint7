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
const [item, setItem] = useState(0);
const [totalPrice, setTotalPrice] = useState()
useEffect(() => {
  total();
}, [stateWeb,stateSeo,stateAds,item])


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
    setTotalPrice(totalPrice)
  }

const sum = (page,idioma) => {
    setItem(page * 30 + idioma * 30)
    }
  
const [presupuesto, setPresupuesto] = useState()

  const onChangePresupuesto = (e) =>{
  setPresupuesto(e.target.value)
}

const [cliente, setCliente] = useState()
  const onChangeCliente = (e) =>{
    setCliente(e.target.value)
  }

const [listadoPresupuestos, setListadoPresupuestos] = useState(() => {
  const almacenados = JSON.parse(localStorage.getItem('presupuestos'))
  return almacenados ? almacenados : [];
});
const [listadoMostrar, setListadoMostrar] = useState([]);

 useEffect(() => {
    localStorage.setItem('presupuestos',JSON.stringify(listadoPresupuestos))
  }, [listadoPresupuestos])

  useEffect(() => {
   setListadoMostrar(listadoPresupuestos)
  }, [])
  

const onSubmit = (e) =>{
  e.preventDefault()

  const presupuestos = {
    presupuesto : presupuesto,
    cliente : cliente,
    web: stateWeb,
    seo: stateSeo,
    ads : stateAds,
    precio: totalPrice,
    fecha: new Date(),
  }
  setListadoPresupuestos([...listadoPresupuestos,presupuestos])
  setListadoMostrar([...listadoPresupuestos,presupuestos])
  }


const listaAlfabetica = () => {
  const ordenAlfabetico = [...listadoPresupuestos]
  ordenAlfabetico.sort((a,b)=> (a.cliente > b.cliente ? 1: a.cliente < b.cliente ? -1 : 0))
  setListadoMostrar([...ordenAlfabetico])
}

const listaFecha = () => {
const ordenFecha = [...listadoPresupuestos]
ordenFecha.sort((a,b) => a.fecha - b.fecha)
setListadoMostrar([...ordenFecha])
}

const mostrarOriginal  = () => {
    setListadoMostrar(listadoPresupuestos)
}

const [search, setSearch] = useState ();

const handleChange = (e) => {
 setSearch (e.target.value);
 }
const onSubmitBusqueda = (e) => {
  e.preventDefault()
  const result = listadoPresupuestos.filter(x => {
  if(x.presupuesto === search){
    return x
  }
});
setListadoMostrar(result)
};



    
    return(
      <div className="container mt-5">
      <div className="row">
      <div className="col-6">
        <p>Que quieres hacer?</p>
        
        <input type="checkbox" name="web" checked={stateWeb} onChange={handleOnChange}/>una pagina web 500€ 
        <br />
        <input type="checkbox" name="seo" checked={stateSeo} onChange={handleOnChange}/>una consultoria SEO 300€ 
        <br />
        <input type="checkbox" name="ads" checked={stateAds} onChange={handleOnChange}/>una campaña de Google Ads 200€ 
        <br />
        <p>
          Total:{totalPrice}
        </p>
        <div>{stateWeb ? <Panel sum={sum} /> : <></>}  
        </div>
</div>

<div className="col-6"><form onSubmit={onSubmit}>
  <div className="row"> 
    <div className="col-10">
      <input type="text" id="presupuesto" onChange={onChangePresupuesto}/>
          Nombre del presupuesto    
    </div> 
  </div>
  <div className="row">
    <div className="col-10"  >
      <input type="text" id="cliente" onChange={onChangeCliente}/>Nombre del cliente
    </div>
    <button type="submit">Crear</button>   
  </div> 
  </form>
  <div className="row">
      <div className="col-3">
        presupuesto
      </div>
      <div className="col-2">
        cliente
      </div>
      <div className="col-1">
        web
      </div>
      <div className="col-1">
        seo
      </div>
      <div className="col-1">
        ads
      </div>
      <div className="col-2">
        precio
      </div>
      <div className="col-2">
        fecha
      </div>
  <ul>
   
    {listadoMostrar.map(object => {
      const {presupuesto,cliente,web,seo,ads,precio,fecha } = object
    return (
      <div className="row" key={fecha}>
        <div className="col-3">
        {presupuesto} 
      </div>
      <div className="col-2">
        {cliente}
      </div>
      <div className="col-1">
        {web? 'X': ''}
      </div>
      <div className="col-1">
        {seo? 'X': ''}
      </div>
      <div className="col-1">
        {ads? 'X': ''}
      </div>
      <div className="col-2">
        {precio}
      </div>
      <div className="col-2">
        {`${fecha}`}
      </div>
        </div> 
    );
})}
  </ul> 
  </div>
  <div>
    <button onClick={listaAlfabetica}>Orden Alfabetico</button>
    <button onClick={listaFecha}>Orden por fecha</button>
    <button onClick={mostrarOriginal}>Mostrar original</button>
    <form onSubmit={onSubmitBusqueda}>
    <input type="text"  onChange= {handleChange}/>
    <button type="submit">Busqueda</button>  
    </form>
  </div>
</div>
</div>
      </div>
        )
}

