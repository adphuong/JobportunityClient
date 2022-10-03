import { Button, Form } from "react-bootstrap";
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
			<h1 className="title">Add a Job</h1>
			<Form>
				<Form.Group>
					<Form.Control 
						name="company"
						value={job.company} 
						placeholder="Company" 
						onChange={handleChange}
						required
					/>
					<Form.Control 
						name="position" 
						value={job.position} 
						placeholder="Position" 
						onChange={handleChange}
						required
					/>
					<Form.Select
						name="stage" 
						value={job.stage}  
						onChange={handleChange}
						required
					>	
						<option>Select stage</option>
						<option value="Prospect">Prospect</option>
						<option value="Applied">Applied</option>
						<option value="Phone Screen">Phone Screen</option>
						<option value="Online Assessment">Online Assessment</option>
						<option value="Interview: Phone">Interview: Phone</option>
						<option value="Interview: Video">Interview: Video</option>
						<option value="Interview: In-office">Interview: In-office</option>
						<option value="Negotiating Offer">Negotiating Offer</option>
						<option value="Rejection">Rejection</option>
						<option value="Closed">Closed</option>
						<option value="Offer">Offer</option>
					</Form.Select>
					<Form.Select 
						name="next_step" 
						value={job.next_step} 
						placeholder="Next Step" 
						onChange={handleChange}
						required
					>
						<option>Select next step</option>
						<option value="Apply">Apply</option>
						<option value="Research">Research</option>
						<option value="Follow-up Application">Follow-up Application</option>
						<option value="Do interview(s)">Do interview(s)</option>
						<option value="Email: Thank">Interview: Phone</option>
						
					</Form.Select>
					<Form.Control 
						type="date"
						name="date_applied" 
						value={job.date_applied} 
						placeholder="Date Applied" 
						onChange={handleChange}
						required pattern="\d{2}-\d{2}-\d{4}"
					/>
					<Form.Control 
						name="notes" 
						value={job.notes} 
						placeholder="Notes" 
						onChange={handleChange}
					/>
				</Form.Group>
				
				
			</Form>
			<Stack direction="horizontal" gap={2}>
				<Button variant="outline-dark" onClickCapture={() => navigate(-1)}>Back</Button>
				<Button variant="outline-success" onClick={handleJobAdd}>Add Job</Button>
			</Stack>
			
		</div>
	)
}

export default AddJob;