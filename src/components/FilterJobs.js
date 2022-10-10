import "../styles/Filter.css"
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

let FilterJobs = (props) => {
    const navigate = useNavigate();
    
    function onFilterValueChanged(e) {
        props.filterValueSelected(e.target.value)
    }


    return (
        <div className="filter-area">
            
            <p className="filter-label">Filter by Stage</p>
            <Form.Select  size="lg" name="stage" onChange={onFilterValueChanged}>
                <option value="All">All</option>
                <option value="Prospect">Prospect</option>
                <option value="Applied">Applied</option>
                <option value="Phone Screen">Phone Screen</option>
                <option value="Online Assessment">Online Assessment</option>
                <option value="Interview: Phone">Interview: Phone</option>
                <option value="Interview: Virtual">Interview: Virtual</option>
                <option value="Interview: In-office">Interview: In-office</option>
                <option value="Negotiating Offer">Negotiating Offer</option>
                <option value="Rejection">Rejection</option>
                <option value="Closed">Closed</option>
                <option value="Offer">Offer</option>
            </Form.Select>
            <Button color="#54b3d6" className="btn btn-primary glow-on-hover" onClick = {() => navigate("add-job")}>
				<i className="fa-solid fa-circle-plus me-3"></i>New Job
			</Button> 
        </div>

    )
}

export default FilterJobs;