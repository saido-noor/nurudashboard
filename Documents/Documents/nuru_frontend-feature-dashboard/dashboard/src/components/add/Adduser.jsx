import React, {useState}from 'react'
import "./adduser.css"
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'
export default function Form() {
    const{register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit=data=> console.log(data);
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }
  return (
   <section>
    <div className='container'>
        <div className='holder'>
            <div className='header'> <h2>Add User</h2></div>
            <form id="form" className='flex flex-col'onSubmit={handleSubmit(onSubmit)}>
                <label id='top-names'>Full name</label>
                <input type="text" {...register("username",{required:true})}placeholder='Full name'/>
                <div className='error '>{errors.password?. type==="required" && "Username is required"}</div>
                <label id='top-names'>Child's name</label>
                <input type={passwordShown ? "text" : "password"}  {...register("password",{required:true})}placeholder='Childs name'/>
                <button onClick={togglePassword} className="show"></button>
                <div className='error '>{errors.password?. type==="required" && "Password is required"}</div>
                <button className='btn'><Link path to="/Sidebar"></Link>Submit</button>
            </form>
            <div className='create-account-wrap'>
                <p>Not a member?<Link path to="/signin">Sign Up</Link></p>
            </div>
        </div>
    </div>
   </section>
  )
  
}
