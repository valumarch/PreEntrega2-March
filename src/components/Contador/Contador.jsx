import {useState} from 'react'
import './Contador.css'


const Contador = ({stock, inicial}) => {
    const [contador, setContador] = useState(inicial);

    const aumentarContador = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }

    return (
    <div className="botones">
        <div className="contador">
        <button onClick={ disminuirContador } className="boton-contador">-</button>
        <strong> {contador} </strong>
        <button onClick={ aumentarContador } className="boton-contador">+</button>
        </div>
        <button className="boton-agregar">Agregar al carrito</button>
    </div>
)
}

export default Contador