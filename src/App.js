import './App.css';
import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      {/* <label className="search-label">Search:</label> */}
      <input
        type="text"
        placeholder="Search ..."
        onChange={event =>
        {
          setSearchTerm(event.target.value);
        }}
      />

      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val
        }
        else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || val.last_name.toLowerCase().includes(searchTerm.toLowerCase()) || val.email.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
            <ul className="data_field" key={key}>
              <li>{val.id}</li>
              <li>{val.first_name}</li>
              <li>{val.last_name}</li>
              <li>{val.email}</li>

              </ul>
        )
      })}
    </div>
  );
}

export default App;
