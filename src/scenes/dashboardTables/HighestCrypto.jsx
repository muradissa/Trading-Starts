import React, { useEffect, useState } from "react";
import axios from "axios";
import './topFive.css'
const HighestCrypto = () => {

    const [topTenCrypto, setTopTenCrypto] = useState([]);

    const getTopTenCrypto = async () =>{
        const response = await axios.get('http://localhost:5000/api/crypto/top-ten');
        if(response.status === 200){
            setTopTenCrypto(response.data['result'])
        }
    }
    useEffect(() =>{
        getTopTenCrypto();
    },[]); 
    
    useEffect(() => {
        const interval = setInterval(async () => {
            const response = await axios.get('http://localhost:5000/api/crypto/top-ten');
            if(response.status === 200){
                setTopTenCrypto(response.data['result'])
            }
    
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    const changeTextColorPercentage = (percentage) =>{
        if(Number(percentage.replace('%','')) > 0){
            return 'green';
        }
        if(Number(percentage.replace('%','')) < 0){
            return 'red';
        }
        return 'white';
    }

    return (
    <>
        <table>
            <thead >
            <tr className="table__header">
                <th>Rank</th>
                <th>Name</th>
                <th>Price</th>
                <th>Change 1h</th>
                <th>Change 24h</th>
                <th>Change 7d</th>
                <th>Market Cap</th>
                <th>Volume 24h</th>
                <th>Circulating Supply</th>
            </tr>
            </thead>
            <tbody>
                {topTenCrypto.map(crypto =>{
                    return (
                        <tr>
                            <td>{crypto['rank']}</td>
                            <td>{crypto['name']}</td>
                            <td>{crypto['price']}</td>
                            <td style={{color:changeTextColorPercentage(crypto['change1h'])}}>{crypto['change1h']}</td>
                            <td style={{color:changeTextColorPercentage(crypto['change24h'])}}>{crypto['change24h']}</td>
                            <td style={{color:changeTextColorPercentage(crypto['change7d'])}}>{crypto['change7d']}</td>
                            <td>{crypto['marketCap']}</td>
                            <td>{crypto['volume24h']}</td>
                            <td>{crypto['circulatingSupply']}</td>
                        </tr>
                    )
                })} 
            </tbody>
        </table>
        <div className='table__footer' >
            <h4 className='table__footer-text' >Highest 10 CryptoCurrency</h4>
        </div>
        {/* <div>{topTenCrypto.length}</div> */}
    </>
  )
}

export default HighestCrypto;