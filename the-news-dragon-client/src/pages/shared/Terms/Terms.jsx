/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, minima accusamus porro labore totam enim. Repudiandae dolorem odio dignissimos, aperiam qui culpa facere illo voluptatibus ratione, repellat saepe corporis non?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;