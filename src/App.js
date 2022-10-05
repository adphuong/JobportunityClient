import './styles/App.css';

// Configure routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddJob from "./AddJob";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";

function App() {
  // const [jobs, setJobs] = useState([]);
  // const [updatedJob, setUpdatedJob] = useState({});

  // // Modal variables
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  // useEffect(() => {
  //   axios.get("http://localhost:2300/api/jobs")
  //   .then((res) => {
  //     console.log(res);
  //     setJobs(res.data);
  //   })
  //   .catch((err) => console.log(err))
  // }, [])

  // const navigate = useNavigate();


  // const deleteJob = (id) => {
  //   console.log(id);

  //   axios.delete(`http://localhost:2300/api/jobs/delete/${id}`)
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
  //   axios.put(`http://localhost:2300/api/jobs/update/${updatedJob._id}`, updatedJob)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));

  //   // Close modal
  //   handleClose();
  //   window.location.reload();
  // };

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
