import './ItemDetail.css'
import Contador from '../Contador/Contador'


const ItemDetail = ({nombre, precio, imagen}) => {
  return (
    <div className="contenedorDetalles">
      <div>
        <img src= {imagen} alt= {nombre} className="imgDetalles"/>
        </div>
        <div>
        <h2 className="tituloDetalles"> {nombre} </h2>
        <p className="textoDetalles">Precio: ${precio} </p>
        <Contador  inicial={1} stock={10} />
        </div>
    </div>
  )
}

export default ItemDetail