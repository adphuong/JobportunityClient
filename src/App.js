import './App.css';
import {Button, FloatingLabel, Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import axios from "axios";

function App() {
  const [jobs, setJobs] = useState([]);
  const [updatedJob, setUpdatedJob] = useState({});
  // Modal variables
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    axios.get("http://localhost:2300/api/jobs")
    .then((res) => {
      console.log(res);
      setJobs(res.data);
    })
    .catch((err) => console.log(err))
  }, [])
  const navigate = useNavigate();


  const deleteJob = (id) => {
    console.log(id);

    axios.delete(`http://localhost:2300/api/jobs/delete/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    window.location.reload();         // Reload page after delete
  };
  
  const updateJob = (job) => {
    setUpdatedJob(job);
    handleShow();
  };


  const handleChange = (e) => {
    const {name, value} = e.target;

    setUpdatedJob(prev => {
      return({
        ...prev,
        [name]: value,
      });
    });
  };


  const saveUpdatedJob = () => {
    // Send new data to server
    axios.put(`http://localhost:2300/api/jobs/update/${updatedJob._id}`, updatedJob)
    .then(res => console.log(res))
    .catch(err => console.log(err));

    // Close modal
    handleClose();
    window.location.reload();
  }


  return (
    <div className="App">
      <h1 className="title"> Home Page </h1>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Update Job</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Company"
                      className="mb-3"
                    >
                      <Form.Control 
                        name="company"
                        value={updatedJob.company ? updatedJob.company : ""} 
                        placeholder="Company" 
                        onChange={handleChange}
                        required
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Position"
                      className="mb-3"
                    >
                      <Form.Control 
                        name="position" 
                        value={updatedJob.position ? updatedJob.position : ""} 
                        placeholder="Position" 
                        onChange={handleChange}
                        required
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Job URL"
                      className="mb-3"
                    >
                      <Form.Control 
                        name="job_link" 
                        value={updatedJob.job_link ? updatedJob.job_link : ""} 
                        placeholder="Position" 
                        onChange={handleChange}
                        required
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Stage"
                      className="mb-3"
                    >
                      <Form.Select
                        name="stage" 
                        value={updatedJob.stage ? updatedJob.stage : ""} 
                        onChange={handleChange}
                        required
                      >	
                        <option label="Select a stage"></option>
                        <option value="Prospect">Prospect</option>
                        <option value="Applied">Applied</option>
                        <option value="Phone Screen">Phone Screen</option>
                        <option value="Online Assessment">Online Assessment</option>
                        <option value="Interview: Phone">Interview: Phone</option>
                        <option value="Interview: Video">Interview: Virtual</option>
                        <option value="Interview: In-office">Interview: In-office</option>
                        <option value="Negotiating Offer">Negotiating Offer</option>
                        <option value="Rejection">Rejection</option>
                        <option value="Closed">Closed</option>
                        <option value="Offer">Offer</option>
                      </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Next Step"
                      className="mb-3"
                    >
                      <Form.Select 
                        name="next_step" 
                        value={updatedJob.next_step ? updatedJob.next_step : ""} 
                        onChange={handleChange}
                        required
                      >
                        <option label="Select a next step"></option>
                        <option value="Apply">Apply</option>
                        <option value="Research">Research</option>
                        <option value="Follow-up Application">Follow-up Application</option>
                        <option value="Do interview(s)">Do interview(s)</option>
                        <option value="Email: Thank you">Email: Thank you</option>
                        
                      </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Date Found"
                      className="mb-3"
                    >
                      <Form.Control 
                        type="date"
                        name="date_found" 
                        value={updatedJob.date_found ? updatedJob.date_found : ""}
                        onChange={handleChange}
                        required
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Date Applied"
                      className="mb-3"
                    >
                      <Form.Control 
                        type="date"
                        name="date_applied" 
                        value={updatedJob.date_applied ? updatedJob.date_applied : ""}
                        onChange={handleChange}
                        required
                        />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Notes"
                      className="mb-3"
                    >
                      <Form.Control 
                        name="notes" 
                        value={updatedJob.notes ? updatedJob.notes : ""}
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Form>

              </Modal.Body>
              <Modal.Footer>
                <Stack direction="horizontal" gap={3}>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={saveUpdatedJob}>
                    Save
                  </Button>
                </Stack>
              </Modal.Footer>
            </Modal>

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
                { jobs ? (
                  <>
                    {jobs.map((job, index) => {
                      return (
                        <tr data-index={index} key={job._id}>
                            <td>{job.company}</td>
                            <td><a href={job.job_link} target="blank" className="job-link">{job.position}</a></td>
                            <td>{job.stage}</td>
                            <td>{job.next_step}</td>
                            <td>{job.date_found}</td>
                            <td>{job.date_applied}</td>
                            <td>{job.notes}</td>
                            <td className="action-col">
                                <Stack direction="horizontal" gap={2}>
                                    <Button onClick={() => updateJob(job)} size="sm" className="" variant="outline-secondary">Update</Button>
                                    <Button onClick={() => deleteJob(job._id)} size="sm" className="" variant="outline-danger">Delete</Button>
                                </Stack>
                            </td>
                        </tr>
                        
                      );
                    })}
                  </>
                ) : ""}
                </tbody>
            </Table>
        
      
      <Button onClick = {() => navigate("add-job")}>NEXT</Button>
    </div>
  );
}

export default App;
