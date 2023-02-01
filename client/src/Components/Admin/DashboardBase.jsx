import {
  Title,
  Text,
  TabList,
  Tab,
  ColGrid,
  Card,
  Block,
  Metric,
} from "@tremor/react";
import React, { useState } from "react";
import CardGridMap from "./CardGridMap";
import ChartDonut from "./ChartDonut";
import TableUser from "./TableUser";
import TableProduct from "./TableProduct";

const DashboardBase = () => {
  const [selectedView, setSelectedView] = useState(1);

  return (
    <Card>
      <Metric color="teal" marginTop="mt-10" text style >
      <Title marginTop="mt-10">
        <img alt="logo" src="/Full_Stack__2_-removebg-preview.png" style={{ position:"absolute", top:"0px", right:"0px", width:"180px" }} />
      </Title>
        Perfil de Administrador
      </Metric>

      <TabList
        defaultValue={selectedView}
        handleSelect={(value) => setSelectedView(value)}
        marginTop="mt-6"
        color="orange"
      >
        <Tab value={1} text="Principal" />
        <Tab value={2} text="Usuarios" />
        <Tab value={3} text="Productos" />
      </TabList>

      {selectedView === 1 ? (
        <>
          <CardGridMap />

          <Block marginTop="mt-6">
            <ChartDonut />
          </Block>
        </>
      ) : (
        <></>
      )}

      {selectedView === 2 ? (
        <Block marginTop="mt-6">
          <TableUser />
        </Block>
      ) : (
        <></>
      )}

      {selectedView === 3 ? (
        <Block marginTop="mt-6">
          <TableProduct />
        </Block>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default DashboardBase;
