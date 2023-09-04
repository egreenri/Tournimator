import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    // fetch("/api")
    //   .then((res) => res.json())
    //   .then((data) => setData(data.message));
    test();
  }, []);

  const test = async()=>{
    const response = await axios.get(`/api`);

    setData(response.data.message);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
