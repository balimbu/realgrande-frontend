import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Inquiry = () => {

    const [contactInfo,setContactInfo]=useState({
        // ename: "",
        // email:"",
        // remarks:""
        ename: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        remarks:""

    });

    const [successMsg, setSuccessMsg] = useState('');

    const onChange = (e) => {
        setContactInfo( {...contactInfo,[e.target.id]:e.target.value});
    };

    // 
    
    const clickHandler = async (e) => {
        console.log(contactInfo);
        let {ename,email,remarks} = contactInfo;    
        //store in db
        async function postEnquiry(){    
            // post to the backend, the ename,email and remarks            
                console.log('*************************');                
            // let resp = await axios.post('http://localhost:3002/addEnquiry',{ename,email,remarks});
            let resp = await axios.post(process.env.REACT_APP_LINKTOBACKEND+'addEnquiry',{...contactInfo});
            console.log(resp);
            //result                    
            let data = resp.data;        
            console.log(data);
            if(data=='')   {
                //set a flag to true
                console.log("could not store");            
            }
            else {
                console.log("Success!!!!");  
                setSuccessMsg(" Thank you for enquiring. Our Realtor will get in touch with you!");
            }        
           
        }
        postEnquiry();
    }
if((successMsg!='')) {
    return (
    <div>
        <h3 className='text-warning'> {successMsg}</h3>
    </div>
    );
}
else {
    return (
        <div>
       
        <form className="mt-2" action="">
            <div className="form-group">
                <label htmlFor="name"> Name </label>
                <input id="ename" type="text"
                placeholder="Name"
                value={contactInfo.ename}
                onChange={onChange}              
                className="form-control"
                name="name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email"> Email </label>
                <input id="email" type="email"
                placeholder="Email"
                value={contactInfo.email}
                onChange={onChange}
                className="form-control"
                name="email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="remarks"> Remarks </label>
                <input id="remarks" type="remarks"
                placeholder="Remarks"
                value={contactInfo.remarks}
                onChange={onChange}
                className="form-control"
                name="remarks"
                />          
            </div>
            <button type="button" className="btn btn-primary mt-2"
            disabled={ !contactInfo.ename || !contactInfo.email}
            value="submit" onClick={clickHandler}> Submit </button>
        </form>
        </div>
     );
}

};
 
export default Inquiry;
