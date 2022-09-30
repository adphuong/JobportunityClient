import './App.css';
import {Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {useEffect} from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("http://localhost:2300/api/jobs")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }, [])
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1> Home Page </h1>
      <Button onClick = {() => navigate("add-job")}>NEXT</Button>
    </div>
  );
}

export default App;
