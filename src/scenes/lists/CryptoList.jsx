import React,{useEffect,useState} from 'react';
import axios from "axios";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import './lists.css'
const CryptoList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [cryptoList, setCryptoList] = useState([]);
  const columns = [
    {
      field: "market_cap_rank", 
      headerName: "Rank",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Coin",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "symbol", 
      headerName: "Symbol",
      flex: 1,
    },
    {
      field: "current_price",
      headerName: "Price",
      flex: 1,
    },
    {
      field: "low_24h",
      headerName: "Low 24h",
      flex: 1,
    },
    {
      field: "high_24h",
      headerName: "High 24h",
      flex: 1,
    },
    {
      field: "price_change_percentage_24h",
      headerName: "Price change 24h %",
      flex: 1,
    },
    {
      field: "total_volume",
      headerName: "Volume",
      flex: 1,
    },

  ];

  const getCryptoList = async () =>{
    try{
      const response = await axios.get('http://localhost:5000/api/crypto/cryptolist');
      if(response.status === 200){
        setCryptoList(response.data['result'])
      }
    }catch(err){
        console.log("Error from cryptolist get all ");
    }
  }
  useEffect(() => {
    getCryptoList()
    const interval = setInterval(async () => {
        try{
            const response = await axios.get('http://localhost:5000/api/crypto/cryptolist');
            if(response.status === 200){
              setCryptoList(response.data['result'])
            }
        }catch(err){
            console.log("Error from cryptolist get all ");
        }
      }, 60000);
      return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box m="20px" paddingBottom="40px" >
        <Box display="flex" justifyContent="space-between"  alignItems="center" style={{maxWidth:"100%",margin:"0 auto"}}>
            <Header title="Cryptocurrency  list" subtitle="Top 50 Cryptocurrency now in the market" />
        </Box>
        <Box
          m="40px 0 0 0"
          height="80vh"
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
          <DataGrid  rows={cryptoList} columns={columns} getRowId={(row) =>  row.symbol}  />
        </Box>
      </Box>
        
    </>
  )
}

export default CryptoList;
