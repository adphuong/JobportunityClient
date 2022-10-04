import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Stack from 'react-bootstrap/Stack';

import axios from "axios";
import moment from 'moment';

// var moment = require('moment'); // require

function AddJob() {
	const navigate = useNavigate();
	const [job, setJob] = useState({
		company: "",
		position: "",
		stage: "",
		next_step: "",
		date_found:"",
		date_applied: "",
		notes: ""
	});

	const handleChange = (event) => {
		const {name, value} = event.target;
		setJob(prev => {
			return({
				...prev,
				[name]: value,
			})
		})
	};

	const handleJobAdd = (event) => {
		event.preventDefault();
		console.log(job);
		// API Call
		axios
			.post("http://localhost:2300/api/jobs/add-job", job)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));

		navigate("/");
	};

	// useEffect(() => {
	// 	console.log(post);
	// }, [post]);

	return(
		<div className="add-job">
			<h1 className="title">Add New Job</h1>
			<Form>
				<Form.Group>
					<FloatingLabel
						controlId="floatingInput"
						label="Company"
						className="mb-3"
					>
						<Form.Control 
							name="company"
							value={job.company} 
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
							value={job.position} 
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
							value={job.job_link} 
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
							value={job.stage}  
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
							value={job.next_step} 
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
							value={job.date_found} 
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
							value={job.date_applied} 
							onChange={handleChange}
							required
							/>
					</FloatingLabel>
					<FloatingLabel
						controlId="floatingInput"
						label="Notes"
						className="mb-3"
					>
						<textarea
							type="text"
							name="notes"
							placeholder="Notes"
							className="form-control"
							value={job.notes}
							onChange={handleChange}
							rows="5"
						/>
						{/* <Form.Control 
							name="notes" 
							placeholder="Notes"
							value={job.notes} 
							onChange={handleChange}
						/> */}
					</FloatingLabel>
				</Form.Group>
				
				
			</Form>
			<Stack direction="horizontal" className="modal-btns" gap={2}>
				<Button variant="outline-secondary" className="cancel-btn" onClickCapture={() => navigate(-1)}>Cancel</Button>
				<Button variant="" className="glow-on-hover add-btn" onClick={handleJobAdd}>Add Job</Button>
			</Stack>
			
		</div>
	)
}

export default AddJob;