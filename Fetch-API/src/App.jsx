import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { getPosts } from "./api";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((post) => setData(post));
  }, []);

  return( <div>{data ? data.map(e => <li>{e.title}</li>) : <p>No Available Data</p>}</div>);
}

export default App;
