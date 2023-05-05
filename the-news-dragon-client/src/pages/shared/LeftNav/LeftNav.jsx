// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories,setCatagories] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/catagories')
        .then(res=>res.json())
        .then(data => setCatagories(data))
        .catch(error => console.log(error));
        }
    )
    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4'>
            {
                catagories.map(catagory =><p
                key={catagory.id}
                >
             <Link to={`/catagory/${catagory.id}`} className='text-decoration-none text-black'>{catagory.name} </Link>
                </p>)
            }
            </div>
            
        </div>
    );
};

export default LeftNav;