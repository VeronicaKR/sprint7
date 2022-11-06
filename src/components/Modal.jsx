import { ButtonModalStyled } from "./ButtonModalStyled"

export const Modal = ({item,type}) => {

  return (
    <>

<ButtonModalStyled type="button" className="btn btn-secondary btn-sm " data-bs-toggle="modal" data-bs-target={`#${type}`}>
  i
</ButtonModalStyled> 

<div className="modal fade" id={type} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       introduce la cantidad que deseas
      </div>
      <div className="modal-footer">
       has seleccionado :{item} {type}
      </div>
    </div>
  </div>
</div>

  
    
    </>
  )
}
