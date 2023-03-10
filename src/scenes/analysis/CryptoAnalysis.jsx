import React,{useState,useEffect} from 'react';
import axios from "axios";
import AnalysisOneCoin from './AnalysisOneCoin';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

function CryptoAnalysis() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [coinsData, setCoinsData] = useState([]);
  const [selectedCoin,setSelectedCoin] = useState('BTCUSDT')
  const [isLoading, setLoading] = useState(false);


  const getAllCoinsData = async () =>{
    const response = await axios.get('http://localhost:5000/api/crypto/analysis/getallcoinsdata');
      if(response.status === 200){
        // console.log(response.data['result']);
        setCoinsData(response.data['result'].filter(item => item.tps !== 0))
      }
  }
  const onRowsSelectionHandler = (ids) => {

    const selectedRowsData = ids.map((id) => coinsData.find((row) => row.coin === id));
    setSelectedCoin(selectedRowsData[0].coin)
    setLoading(!isLoading)

    // console.log(selectedRowsData[0].coin);
  };

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
      headerName: "TPS",
      flex: 1,
    },
    {
      field: "volume",
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

  ];
  useEffect(() => {
    getAllCoinsData();
    const interval = setInterval(async () => {
        try{
            const response = await axios.get('http://localhost:5000/api/crypto/analysis/getallcoinsdata');
            if(response.status === 200){
              setCoinsData(response.data['result'].filter(item => item.tps !== 0))
            }
        }catch(err){
            console.log("Error from getcoin get all coinsData");
        }
      }, 15000);
      return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Box m="2rem" paddingLeft="">
        {/* <Header title="change it later" subtitle="List of Invoice Balances" /> */}
        <Box
          m="40px 0 0 0"
          height="60vh"
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
          <DataGrid  rows={coinsData} columns={columns} getRowId={(row) =>  row.coin} onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)} />
        </Box>
      </Box>
      <div className=''>
        {isLoading ? <div>loading</div>: <AnalysisOneCoin selectedCoin={selectedCoin}/>
        
        }
        
        
      </div>
    </div>
    
  );
  
}

export default CryptoAnalysis