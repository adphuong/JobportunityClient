import "../styles/Filter.css"
import Form from 'react-bootstrap/Form';


let FilterJobs = (props) => {

    
    function onFilterValueChanged(e) {
        props.filterValueSelected(e.target.value)
    }


    return (
        <div className="filter-area">
            <Form.Select  size="lg" name="stage" onChange={onFilterValueChanged}>
                <option>Filter by stage</option>
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
        </div>

    )
}

export default FilterJobs;