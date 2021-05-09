import jsonData from './dataFiles/2021LightningData.json';
import React, { useState, useEffect } from 'react';
import '../App.css';
import { lightningData } from "./dataFiles/2021LightningData.json";


function Readjson() {
  const [data, setData] = useState([]);
  const GetData = () => {
    fetch('./dataFiles/2021LightningData.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        alert('done');
        return response.json();
      })
      .catch(function(error){console.error('Readjson: ' + error)})
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(() => {
    console.log(lightningData);
    GetData()
  }, [])
  
    return (
      <div className="Readjson">
        {
          data && data.length > 0 && data.map((item) => <p>{item.about}</p>)
        }
      </div>
    );

    
  
}

export default Readjson;



/*
export const readjson = () => {
  return (
    <>
      <HomePageHeader />
      <div className="Lightning-contain">
        {lightningData.map((data, key) => {
          return (
            <div key={key}>
              <readData
                key={key}
                DATE={data.DATE}
                LON={data.LON}
                LAT={data.LAT}
                timeElapsed={data.TOTAL_COUNT}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};


const readData = ({ DATE, LON, LAT, TOTAL_COUNT }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{DATE}</h5>
          </td>
          <td>
            <h5>{LON}</h5>
          </td>
          <td>
            <h4>{LAT}</h4>
          </td>
          <td>
            <p>{TOTAL_COUNT}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
*/