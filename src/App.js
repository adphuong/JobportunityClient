import './App.css';
import {Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";
import Stack from 'react-bootstrap/Stack';
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
      <h1 className="title"> Home Page </h1>
      { jobs ? (
        <>
            <Table className="jobTable" hover responsive>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Stage</th>
                        <th>Next Step</th>
                        <th>Date Found</th>
                        <th>Date Applied</th>
                        <th>Notes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, index) => (
                    <tr data-index={index}>
                        <td>{job.company}</td>
                        <td>{job.position}</td>
                        <td>{job.stage}</td>
                        <td>{job.next_step}</td>
                        <td>{job.date_found}</td>
                        <td>{job.date_applied}</td>
                        <td>{job.notes}</td>
                        <td className="action-col">
                            <a className="link" href="">Edit</a>  
                            <a href="">Delete</a>
                            {/* <Stack direction="horizontal" gap={2}>
                                <Button size="sm" className="" variant="outline-secondary">Edit</Button>
                                <Button size="sm" className="" variant="outline-danger">Delete</Button>
                            </Stack> */}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </>
      ) : ""}
      <Button onClick = {() => navigate("add-job")}>NEXT</Button>
    </div>
  );
}

export default App;
