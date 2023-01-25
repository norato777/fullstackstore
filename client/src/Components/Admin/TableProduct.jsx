import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { deleteProduct, getProducts, putProduct } from "../../Redux/action";
import {
    Button,
    Card,
    Flex,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Title,
    Toggle,
    ToggleItem
} from "@tremor/react";

const TableProduct = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const noDisponible = (id) => {
        const deleted = {
            deleted: true
        }
        dispatch(putProduct(id, deleted))
        alert("Se ha deshabilitado el producto")
        window.location.reload()
    }

    const disponible = (id) => {
        const deleted = {
            deleted: false
        }
        dispatch(putProduct(id, deleted))
        alert("Se ha habilitado el producto")
        window.location.reload()
    }

    const createClick = () => {
        navigate('/form')
    }

    const editClick = (id) => {
        navigate(`/admin/editproduct/${id}`)
    }

    const deleteClick = (id) => {
        dispatch(deleteProduct(id))
        alert("Producto eliminado")
        window.location.reload()
    }

    return (
        <Card>
            <Title>Lista de productos</Title>
            <Button size="xs" onClick={createClick}>
                Crear producto
            </Button>
            <Table marginTop='mt-5'>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Nombre</TableHeaderCell>
                        <TableHeaderCell>Precio</TableHeaderCell>
                        <TableHeaderCell>Disponible</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products && products.map(item => (
                        <TableRow key={item._id}>
                            <TableCell>{item.name.slice(0, 60)}</TableCell>
                            <TableCell>${item.price}</TableCell>
                            <Toggle
                                defaultValue={item.deleted === true || item.deleted === false}
                                handleSelect={() => item.deleted === true ? disponible(item._id) : noDisponible(item._id)}
                                color="blue"
                            >
                                <ToggleItem value={item.deleted === false} text="SI" />
                                <ToggleItem value={item.deleted === true} text="NO" />
                            </Toggle>
                            <Flex justifyContent="justify-end" spaceX="space-x-2" marginTop="mt-3">
                                <Button size="xs" onClick={() => editClick(item._id)}>
                                    Editar
                                </Button>
                                <Button size="xs" onClick={() => deleteClick(item._id)}>
                                    Eliminar
                                </Button>
                            </Flex>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}

export default TableProduct