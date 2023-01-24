import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../Redux/action";
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
    Title
} from "@tremor/react";

const TableBase = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const editClick = () => {

    }

    const deleteClick = (id) => {
        dispatch(deleteProduct(id))
    }

    return (
        <Card>
            <Title>Lista de productos</Title>
            <Table marginTop='mt-5'>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Nombre</TableHeaderCell>
                        <TableHeaderCell>Precio</TableHeaderCell>
                        <TableHeaderCell>Marca</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products && products.map(item => (
                        <TableRow>
                            <TableCell>{item.name.slice(0, 60)}</TableCell>
                            <TableCell>${item.price}</TableCell>
                            <TableCell>{item.brand}</TableCell>
                            <Flex justifyContent="justify-end" spaceX="space-x-2" marginTop="mt-3">
                                <Button size="xs" onClick={() => console.log("clicked")}>
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

export default TableBase