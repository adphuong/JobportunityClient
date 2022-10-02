import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import axios from "axios";

function AddJob() {
	const navigate = useNavigate();
	const [post, setPost] = useState({
		company: "",
		position: "",
		stage: "",
		next_step: "",
		date_applied: "",
		notes: ""
	});

	const handleChange = (event) => {
		const {name, value} = event.target;

		setPost(prev => {
			return({
				...prev,
				[name]: value,
			})
		})
	};

	const handleJobAdd = (event) => {
		event.preventDefault();
		console.log(post);
		// API Call
		axios
			.post("http://localhost:2300/api/jobs/add-job", post)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));

		navigate("/");
	};

	// useEffect(() => {
	// 	console.log(post);
	// }, [post]);

	return(
		<div className="add-job">
			<h1>Add a Job</h1>
			<Form>
				<Form.Group>
					<Form.Control 
						name="company"
						value={post.company} 
						placeholder="Company" 
						onChange={handleChange}
					/>
					<Form.Control 
						name="position" 
						value={post.position} 
						placeholder="Position" 
						onChange={handleChange}
					/>
					<Form.Select
						name="stage" 
						value={post.stage}  
						onChange={handleChange}
					>	
						<option>Select stage</option>
						<option value="Prospect">Prospect</option>
						<option value="Applied">Applied</option>
						<option value="PhPhone Screenone_screen">Phone Screen</option>
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
						value={post.next_step} 
						placeholder="Next Step" 
						onChange={handleChange}
					>
						<option>Select next step</option>
						<option value="Apply">Apply</option>
						<option value="Research">Research</option>
						<option value="Follow-up Application">Follow-up Application</option>
						<option value="Do interview(s)">Do interview(s)</option>
						<option value="Email: Thank you">Email: Thank you</option>
						
					</Form.Select>
					<Form.Control
						type="date"	
						name="date_applied" 
						value={post.date_applied} 
						placeholder="Date Applied" 
						onChange={handleChange}
						dateFormat="MM/dd/yyyy"
					/>
					<Form.Control 
						name="notes" 
						value={post.notes} 
						placeholder="Notes" 
						onChange={handleChange}
					/>
				</Form.Group>
				<Button variant="outline-success" onClick={handleJobAdd}>Add Job</Button>
			</Form>
			<Button variant="outline-dark" onClickCapture={() => navigate(-1)}>Back</Button>
		</div>
	)
}

export default AddJob;