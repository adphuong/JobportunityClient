import './App.css';
import {Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2300/api/jobs")
    .then((res) => {
      console.log(res);
      setJobs(res.data);
    })
    .catch((err) => console.log(err))
  }, [])
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1> Home Page </h1>
      { jobs ? (
        <>
          {jobs.map(job => {
            return(
              <div>
                <h4>{job.company}</h4>
                <h4>{job.position}</h4>
                <h4>{job.stage}</h4>
                <h4>{job.next_step}</h4>
                <h4>{job.date_applied}</h4>
                <h4>{job.notes}</h4>
              </div>
            );
          })}
        </>
      ) : ""}
      {/* <Button onClick = {() => navigate("add-job")}>NEXT</Button> */}
    </div>
  );
}

export default App;
