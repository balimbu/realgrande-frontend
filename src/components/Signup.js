
import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    let navigate = useNavigate();


    const [signupStatus,setSignupStatus] = useState('');
   
  let [fname,setFname] = useState('');
  let [lname,setLName] = useState('');
  let [pass,setPassword] = useState('');
  let [email,setEmail] = useState('');


  let submitHandler = (e) =>{
    e.preventDefault();
    console.log("submitted form");


    //need to talk to back end to check if a user exists
const handleSignup = async () => {
    try {
        //console.log({...contactInfo});
        // const response = await axios.post('http://localhost:3002/signup',{fname,lname,email,pass});
        const response = await axios.post(process.env.REACT_APP_LINKTOBACKEND+'signup',{fname,lname,email,pass});
        console.log(response);
        let data = response.data;
        console.log(data);        
        console.log("from signup response ");  
        setSignupStatus(" Thanks for signing up!");  
       
    }
    catch (error) {
        console.error('Login failed:', error);  
        localStorage.clear();        
        localStorage.setItem('loginfailed',true);
    }
    };
handleSignup();
}


if(signupStatus == '') {
    return (
        <>
     
    <div className="container-fluid bg-success d-flex justify-content-center align-items-start vh-100 w-50">
     
      <form onSubmit={submitHandler}>
     
  <div class="mb-3">
    <label htmlFor="firstName" class="form-label">First Name</label>
    <input type="text" onChange={(e) => setFname(e.target.value) } class="form-control" id="firstName" name="firstName" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label htmlFor="lastName" class="form-label">Last Name</label>
    <input type="text" onChange={(e) => setLName(e.target.value)} class="form-control" id="lastName" name="lastName"/>
  </div>
   
  <div class="mb-3">
    <label htmlFor="password" class="form-label">Password</label>
    <input type="text" onChange={(e) => setPassword(e.target.value)} class="form-control" id="password" name="password"/>
  </div>


  <div class="mb-3">
    <label htmlFor="email" class="form-label">Email</label>
    <input type="text" onChange={(e) => setEmail(e.target.value)} class="form-control" id="email" name="email"/>
  </div>


   <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" htmlFor="exampleCheck1">I Agree with Terms</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</>
);
        }
        else {
            return (
                <h4 className='text-primary'> {signupStatus}</h4>
            );
        }
};
export default Signup;


