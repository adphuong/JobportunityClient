import '../styles/App.css';
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

import Navbar from "../components/Navbar";
import JobsTable from "../components/JobsTable"

function Homepage() {
  

  const navigate = useNavigate();



  return (
    <div className="Homepage">
        <Navbar />      
        <Button color="#54b3d6" className="btn btn-primary glow-on-hover" onClick = {() => navigate("add-job")}>
            <i className="fa-solid fa-circle-plus me-3"></i>New Job
        </Button> 
        <JobsTable />

        
    </div>
  );
}

export default Homepage;
