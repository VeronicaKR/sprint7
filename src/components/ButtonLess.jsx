import { ButtonStyled } from "./ButtonStyled"

export const ButtonLess = ({item,setitem}) => {

    const less = () =>{
      if(item === 0){
        return
      }
        setitem(item-1)
      }
  return (
    <>
    <ButtonStyled onClick={less}>-</ButtonStyled>
    </>
  )
}
