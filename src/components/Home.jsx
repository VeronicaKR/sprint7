import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
    <h1>Esta App servirá para crear un presupuesto personalizado</h1>
    <ul>
        <li><Link to="/app">Ir a la App</Link></li>
    </ul>
    </>
    
  )
}
