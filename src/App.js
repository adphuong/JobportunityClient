import './App.css';
import {Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
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
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Stage</th>
                    <th>Next Step</th>
                    <th>Date Applied</th>
                    <th>Notes</th>
                </tr>
                </thead>
                <tbody>
                    {jobs.map((job, index) => (
                    <tr data-index={index}>
                        <td>{job.company}</td>
                        <td>{job.position}</td>
                        <td>{job.stage}</td>
                        <td>{job.next_step}</td>
                        <td>{job.date_applied}</td>
                        <td>{job.notes}</td>
                    </tr>
                    ))}
                    {/* <tr>
                        <td>{job.company}</td>
                        <td>{job.position}</td>
                        <td>{job.stage}</td>
                        <td>{job.next_step}</td>
                        <td>{job.date_applied}</td>
                        <td>{job.Notes}</td>
                    </tr> */}
                </tbody>
            </Table>
        </>
      ) : ""}
      <Button onClick = {() => navigate("add-job")}>NEXT</Button>
    </div>
  );
}

export default App;
