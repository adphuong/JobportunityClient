import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Stack from 'react-bootstrap/Stack';

import axios from "axios";


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
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	


	const handleChange = (event) => {
		const {name, value} = event.target;

		setJob(prev => {
			return({
				...prev,
				[name]: value,
			})
		})
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(job);

		setFormErrors(validate(job));
		setIsSubmit(true);
		
		// if(Object.keys(formErrors).length === 0 && isSubmit) {
		// 	// API Call
		// 	axios
		// 	.post("http://localhost:2300/api/jobs/add-job", job)
		// 	.then((res) => console.log(res))
		// 	.catch((err) => console.log(err));

		// 	navigate("/");
		// }
		

		
	};

	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			if (!job.date_applied) {
				job.date_applied = "---";
			}
			if(!job.notes) {
				job.notes = "---";
			}
			console.log(job);
			// API Call
			axios
			.post("http://localhost:2300/api/jobs/add-job", job)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));

			navigate("/");
		}
	}, [formErrors]);


	
	const validate = (values) => {
	
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		if(!values.company) {
			errors.company = "Company is required";
		}
		if(!values.position) {
			errors.position = "Position is required";
		}
		if(!values.stage) {
			errors.stage = "Stage is required";
		}
		if(!values.next_step) {
			errors.next_step = "Next Step is required";
		}
		if(!values.date_found) {
			errors.date_found = "Date Found is required";
		}

		return errors;
	};

	


	


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
						<p className="error">{ formErrors.company }</p>
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
						<p className="error">{ formErrors.position }</p>
					</FloatingLabel>
					<FloatingLabel
						controlId="floatingInput"
						label="Job URL (optional)"
						className="mb-3"
					>
						<Form.Control 
							name="job_link" 
							value={job.job_link} 
							placeholder="Job URL (optional)" 
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
						<p className="error">{ formErrors.stage }</p>
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
						<p className="error">{ formErrors.next_step }</p>
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
						<p className="error">{ formErrors.date_found }</p>
					</FloatingLabel>
					<FloatingLabel
						controlId="floatingInput"
						label="Date Applied (optional)"
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
						label="Notes (optional)"
						className="mb-3"
					>
						<textarea
							type="text"
							name="notes"
							placeholder="Notes (optional)"
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
				<Button type="submit" variant="" className="glow-on-hover add-btn" onClick={handleSubmit}>Add Job</Button>
			</Stack>
			
		</div>
	)
}

export default AddJob;