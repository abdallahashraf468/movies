import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate()

    const handleNavigateion = () => {
        navigate('/about')
    }
    return (
        <div>
            Contact Us
            <br />
            <button className="btn btn-info col-1 my-5" onClick={() => { handleNavigateion() }}>Navigate to About</button>
        </div>
    );
}

export default Contact;
