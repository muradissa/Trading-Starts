import React from 'react'
import AnalysisOneCoin from './AnalysisOneCoin';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

function CryptoAnalysis() {
 const data =[];
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "coin",
      headerName: "Coin",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
    },
    {
      field: "tps",
      headerName: "Trades",
      flex: 1,
    },
    {
      field: "Volume",
      headerName: "Volume",
      flex: 1,
    },
    {
      field: "buyAssetVolume",
      headerName: "Buy Asset Volume",
      flex: 1,
    },
    {
      field: "vwap4815m",
      headerName: "VWAP48 15min",
      flex: 1,
    },
    {
      field: "vwap481h",
      headerName: "VWAP48 1h",
      flex: 1,
    },
    // {
    //   field: "cost",
    //   headerName: "Cost",
    //   flex: 1,
    //   renderCell: (params) => (
    //     <Typography color={colors.greenAccent[500]}>
    //       ${params.row.cost}
    //     </Typography>
    //   ),
    // },
  ];

  return (
    <div>
      <Box m="20px">
        {/* <Header title="change it later" subtitle="List of Invoice Balances" /> */}
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid  rows={data} columns={columns} />
        </Box>
      </Box>
      <div>
        <AnalysisOneCoin/>
      </div>
    </div>
    
  );
  
}

export default CryptoAnalysis