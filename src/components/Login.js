import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    // useState hooks in react
    let [email, setEmail] = useState('');
    let [pass, setPassword] = useState('');
    let [loginSuccess, setLoginSuccess] = useState(true);

    let navigate = useNavigate();

    // update state with email
    let onChangeEmail = (e)=>{
        setEmail(e.target.value);
    }

    // update state with password
    let onChangePassword = (e) =>{
        setPassword(e.target.value);
    }

    let submitHandler = (e)=>{
        e.preventDefault(); // stop from refreshing the page on submit
    //axios post
    async function checkLogin(){
        // post to the backend, the email and password
        // get email and password form the input fields
        // let resp = await fetch('houses.json')
        console.log('*************************');
                console.log(email,pass)   ;
            let resp = await axios.post(process.env.REACT_APP_LINKTOBACKEND+'login',{ email, pass });
            console.log(resp);
            //result
            let data = resp.data; // get the data
            // response status 200 success, status 401 - bad request
            if (data == ''){
                //set a flag to true
                setLoginSuccess(false);
            }
            else{
                setLoginSuccess(false);
                localStorage.setItem('name',data.fname);
                localStorage.setItem('email',data.email);
                //check to see if it is a customer or realtor
                //if customer then navigate to home page else to InquiryList
                if(data.role == "realtor") {
                    navigate('/inquiries');
                }
                else {
                    navigate('/');
                }
            }
            
        }
        checkLogin();

// console say hello, authenticate successful
    }
    return (
        <div class="container">
            <div className="w-50">
            Login Component
            {
                (!loginSuccess) && <h5 className="text-warning"> Invalide Login Credentials!</h5>
            }
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={onChangeEmail} className="form-control" id="email" name="email" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange ={onChangePassword} className="form-control" id="password" name="password"/>
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    </div>


     );
}

export default Login;
