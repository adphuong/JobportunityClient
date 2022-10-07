import '../styles/App.css';
import {Button, FloatingLabel, Form, Spinner, Badge} from 'react-bootstrap'
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";
import { useAuthContext } from '../hooks/useAuthContext';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
// import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Navbar from "../components/Navbar";
import JobsTable from "../components/JobsTable"

function Homepage() {
  const [jobs, setJobs] = useState([]);
  const [updatedJob, setUpdatedJob] = useState({});
  const [loading, setLoading] = useState(false); 
  const { user } = useAuthContext()
  

  // // Modal variables
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

 
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true)
      const res = await axios.get("http://localhost:2300/api/jobs", {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
        .then((res) => {
          console.log(res);
          setJobs(res.data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false)
        })
      }
      
    if (user) {
      fetchJobs()
    }
    
  }, [user])

  const navigate = useNavigate();


  // const deleteJob = (id) => {
  //   console.log(id);

  //   axios.delete(`http://localhost:2300/api/jobs/delete/${id}`, {
  //       headers: {
  //         'Authorization': `Bearer ${user.token}`
  //       }
  //   })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))

  //   window.location.reload();         // Reload page after delete
  // };
  
  // const updateJob = (job) => {
  //   setUpdatedJob(job);
  //   handleShow();
  // };


  // const handleChange = (e) => {
  //   const {name, value} = e.target;

  //   setUpdatedJob(prev => {
  //     return({
  //       ...prev,
  //       [name]: value,
  //     });
  //   });
  // };

  

  // const saveUpdatedJob = () => {
      
  //   // Send new data to server
  //   axios.put(`http://localhost:2300/api/jobs/update/${updatedJob._id}`, updatedJob, {
  //       headers: {
  //         'Authorization': `Bearer ${user.token}`
  //       }
  //   })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));

  //   // Close modal
  //   handleClose();
  //   window.location.reload();
  // };


  return (
    <div className="Homepage">
        <Navbar />       
        {/* <Modal show={show} onHide={handleClose}>
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
                    as="textarea"
                    name="notes" 
                    rows="3"
                    value={updatedJob.notes ? updatedJob.notes : ""}
                    onChange={handleChange}
                    style={{height: '100px'}}
                  />
                </FloatingLabel>
              </Form.Group>
            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Stack direction="horizontal" gap={3}>
              <Button variant="outline-secondary" className="cancel-btn" onClick={handleClose}>
                Cancel
              </Button>
              <Button size="lg" variant="primary" className="update-btn" onClick={saveUpdatedJob}>
                Save
              </Button>
            </Stack>
          </Modal.Footer>
        </Modal> */}
       
        <JobsTable />

        
        <Button color="#54b3d6" className="btn btn-primary floating-btn glow-on-hover" onClick = {() => navigate("add-job")}>
            <i className="fa-solid fa-circle-plus me-3"></i>New Job
        </Button>
    </div>
  );
}

export default Homepage;
