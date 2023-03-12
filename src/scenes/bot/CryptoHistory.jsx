
import React,{useState,useEffect} from 'react';
import axios from "axios";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import './bot.css'
// import {BsThreeDotsVertical} from 'react-icons/bs';

const CryptoHistory = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [botOrders,setBotOrders] = useState([])

  const getOrders = async () =>{
      const response = await axios.get(`http://localhost:5000/api/crypto/bot/getAllOrders`);
      if(response.status === 200){
          setBotOrders(response.data['result'])
      }
  }
  useEffect(() => {
    getOrders();
    const interval = setInterval(async () => {
      try{
          const response1 = await axios.get(`http://localhost:5000/api/crypto/bot/getAllOrders`);
          if(response1.status === 200){
            setBotOrders(response1.data['result'])
          }        
      }catch(err){
          console.log("Error from getAllOrders");
      }
    }, 60000);
  },[])
  const columns = [
      {
        field: "coin",
        headerName: "Coin",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "status", 
        headerName: "Status",
        flex: 1,
      },
      {
        field: "orderType",
        headerName: "Order Type",
        flex: 1,
      },
      {
        field: "orderPrice",
        headerName: "Order Price",
        flex: 1,
      },
      {
        field: "sellPrice",
        headerName: "Sell Price",
        flex: 1,
      },
      {
        field: "stopLoss",
        headerName: "Stop Loss",
        flex: 1,
      },
      {
        field: "date",
        headerName: "Date",
        flex: 1,
      },
      {
        field: "strategy",
        headerName: "Strategy",
        flex: 1,
      },
  
  ];

  return (
    <Box  m="20px">
      <Box display="flex" justifyContent="space-between"  alignItems="center" style={{maxWidth:"100%",margin:"0 auto"}}>
          <Header title="Cryptocurrency Trading history" subtitle="Cryptocurrency Trading history " />
      </Box>
      <Box
        m="40px 0 0 0"
        height="70vh"
        
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
        <DataGrid  rows={botOrders} columns={columns} getRowId={(row) =>  row._id}  />
      </Box>
    </Box>
  )
}

export default CryptoHistory;