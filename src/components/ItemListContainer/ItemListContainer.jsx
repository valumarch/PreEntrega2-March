import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos, getCategoria } from "../../asyncmock"
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();


    useEffect(() => {

        const funcionProductos = idCategoria ? getCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.error(error))
    }, [idCategoria])

    return (
        <>
            <h2 className="titulo"> {greeting} </h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer