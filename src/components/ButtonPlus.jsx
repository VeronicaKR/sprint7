import { ButtonStyled } from "./ButtonStyled"

export const ButtonPlus = ({item,setitem}) => {

const plus = () =>{
  setitem(item+1)
}  

  return (
  <>
   <ButtonStyled onClick={plus}>+</ButtonStyled>
  </>
  )
}
