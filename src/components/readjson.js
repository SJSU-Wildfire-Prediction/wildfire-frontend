import jsonData from './dataFiles/2021LightningData.json';
import React,{useState,useEffect} from 'react';
import '../App.css';
import { lightningData } from "./dataFiles/2021lightning";


function readjson() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('2021LightningData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="readjson">
     {
       data && data.length>0 && data.map((item)=><p>{item.about}</p>)
     }
    </div>
  );
}

export default readjson;



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