import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => {
        const { results } = res.data;
        setData(results);
      })
      .catch(error => console.log(`Error: ${error}`));
  }, []);

 
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>City</th>
          <th>Postcode</th>
          <th>Country</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
        <tbody>
        {data ? 
    data.map((user) => {
      const { name, location, email, phone } = user;
      const fullName = `${name.first} ${name.last}`;
      const {state,city,country,postcode,coordinates: { latitude, longitude }} = location;
      return <tr>
        <td>{fullName}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{city}</td>
        <td>{postcode}</td>
        <td>{country}</td>
        <td>{latitude}</td>
        <td>{longitude}</td>
        </tr>
    }) :<div>Loading...</div>}

        </tbody>
      </table>
    </div>
  );
}

export default App;
