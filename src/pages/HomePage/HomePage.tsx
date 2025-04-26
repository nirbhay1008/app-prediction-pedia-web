import React, { useEffect, useState } from "react";
import { JSX } from "react";
import { fetchItemList } from "../../service/itemService.ts";
import Grid from "../../components/Grid/Grid.tsx";

type Items = {
  itemId: string;
  itemName: string;
};
export const HomePage = (): JSX.Element => {
  const [itemsData, setItemsData] = useState<Items[]>([
    {
      itemId: "",
      itemName: "",
    },
  ]);

  useEffect(() => {
    fetchItemList("http://localhost:8080/api/getItem", "GET").then((data) =>
      setItemsData(data)
    );
  }, []);
  return (
    <div>
      <Grid
        columns={[
          { header: "Item Id", field: "itemId" },
          { header: "Item Name", field: "itemName" },
        ]}
        rowData={itemsData}
      />
    </div>
  );
};
