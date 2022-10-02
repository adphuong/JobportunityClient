import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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

		// navigate("/");
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
					<Form.Control 
						name="stage" 
						value={post.stage} 
						placeholder="Stage" 
						onChange={handleChange}
					/>
					<Form.Control 
						name="next_step" 
						value={post.next_step} 
						placeholder="Next Step" 
						onChange={handleChange}
					/>
					<Form.Control 
						name="date_applied" 
						value={post.date_applied} 
						placeholder="Date Applied" 
						onChange={handleChange}
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