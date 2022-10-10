import '../styles/App.css';

import Navbar from "../components/Navbar";
import JobsTable from "../components/JobsTable"

function Homepage() {
  


  return (
    <div className="Homepage">
        <Navbar />      
        <JobsTable />
    </div>
  );
}

export default Homepage;
