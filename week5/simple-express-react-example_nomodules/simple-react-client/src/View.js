import React, { useState } from 'react';
import './login.css'
//
import axios from 'axios';
//
function View (props) {
  // read the info from props, coming from the ancestor component
  const { screen, setScreen } = props;
  // return a stateful value and funcion to update it
  const [data, setData] = useState();
  // called when user clicks on Logout button
  const deleteCookie = async () => {
    try {
      await axios.get('/signout');
      setScreen('auth');
    } catch (e) {
      console.log(e);
    }
  };
  //called when user clicks on Get Data button
  const getData = async () => {
    try {
      const res = await axios.get('/read-cookie');
      console.log(res.data)
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  //
  return (
    <div>
      <h2>Welcome {screen}, you can get cookies or log out!</h2>
      <table>
        <tbody>

          <tr>
            <td><button className='button' onClick={getData}>Get Cookie Data</button></td>
            <td> <button className='button' onClick={deleteCookie}>Logout</button> </td>
          </tr>
      </tbody>

      </table>
    </div>
  );
}
//
export default View;