import React from 'react'
import { useParams } from 'react-router-dom';

const EditContact = () => {
    // console.log(Namecontact);
    const {Namecontact} = useParams()
  return (
    <div>
        <div>
            <img src="" alt="" />
            <div>
                <h1>

                </h1>
                <span id='age'></span>
                <span id='tel'></span>
                <span id='email'></span>
            </div>
        </div>
        
    </div>
  )
}

export default EditContact