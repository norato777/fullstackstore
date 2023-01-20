//mostrar los comentarios de un producto en especifico y el rating de ese producto de la base de datos por id del producto

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComents } from '../../Redux/action'
import s from "./MostrarComentarios.module.css"

const MostrarComentarios = ({ id }) => {
    const dispatch = useDispatch()
    const comentarios = useSelector(state => state.comentarios)
    const [comentariosFiltrados, setComentariosFiltrados] = useState([])

    useEffect(() => {
        dispatch(getComents())
    }, [dispatch])

    useEffect(() => {
        setComentariosFiltrados(comentarios.filter(comentario => comentario.id === id))
    }, [comentarios, id])

    return (
        <div className={s.div}>
            {comentariosFiltrados.length > 0 ?
                comentariosFiltrados.map(comentario => {
                    return (
                        <div className={s.div1}>
                            <div className={s.div2}>
                                <div className={s.div3}>
                                    <p>{comentario.description}</p>
                                </div>
                                <div className={s.div4}>
                                    <p>Rating: {comentario.rating}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
                :
                <h3>No hay comentarios para este producto</h3>
            }
        </div>
    )
}

export default MostrarComentarios

