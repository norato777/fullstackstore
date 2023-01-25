import { Title, Text, TabList, Tab, ColGrid, Card, Block } from "@tremor/react";
import React, { useState } from "react";
import CardGridMap from "./CardGridMap";
import ChartDonut from "./ChartDonut";
import TableUser from "./TableUser"
import TableProduct from "./TableProduct";

const DashboardBase = () => {
    const [selectedView, setSelectedView] = useState(1)

    return (
        <main className='bg-slate-200 p-6 sm:p-10'>
            <Title>Fullstack_Store</Title>
            <Text>Perfil de administrador</Text>

            <TabList defaultValue={selectedView} handleSelect={value => setSelectedView(value)} marginTop="mt-6">
                <Tab value={1} text="Principal" />
                <Tab value={2} text="Usuarios" />
                <Tab value={3} text="Productos" />
            </TabList>

            {selectedView === 1 ? (
                <>
                    <CardGridMap />

                    <Block marginTop='mt-6'>
                        <ChartDonut />
                    </Block>
                </>
            ) : (
                <>
                </>
            )
            }

            {selectedView === 2 ? (
                <Block marginTop='mt-6'>
                    <TableUser />
                </Block>
            ) : (
                <>
                </>
            )
            }

            {selectedView === 3 ? (
                <Block marginTop='mt-6'>
                    <TableProduct />
                </Block>
            ) : (
                <>
                </>
            )
            }
        </main>
    )
}

export default DashboardBase