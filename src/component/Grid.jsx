import Box from "@mui/material/Box";
import { DataGridPro } from "@mui/x-data-grid-pro";
import SubGrid from "./SubGrid";
import { useCallback } from "react";
import { data } from "./Data";

export default function Grid() {
  const columns = [
    { field: "symbol", headerName: "Symbol", width: 200 },
    {
      field: "optionDesc",
      headerName: "Option Description",
      width: 200,
      valueGetter: (_, row) => {
        if (row.complexLegs.length > 0) {
          return "Multi-Leg";
        }
        return "Apr 5, 2023 255.0 Call";
      },
    },
    {
      field: "side",
      headerName: "Side",
      width: 200,
      valueGetter: (value) => {
        if (value == 2) {
          return "SO";
        }
        return "Buy";
      },
    },
    {
      field: "orderId",
      headerName: "Order Id",
      width: 200,
    },
    {
      field: "account",
      headerName: "Account",
      width: 200,
    },
    {
      field: "ordType",
      headerName: "Order Type",
      width: 200,
      valueGetter: (value) => {
        if (value == 0) {
          return "LMT";
        }
        return "KMT";
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
  ];

  const rows = data.eventData;

  const getDetailPanelContent = useCallback(
    ({ row }) => <SubGrid row={row.complexLegs} />,
    []
  );

  const getDetailPanelHeight = useCallback(() => 400, []);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <DataGridPro
        columns={columns}
        rows={rows}
        getDetailPanelHeight={getDetailPanelHeight}
        getDetailPanelContent={getDetailPanelContent}
      />
    </Box>
  );
}
