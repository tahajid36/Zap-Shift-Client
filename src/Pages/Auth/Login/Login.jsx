import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';
import SocialLoginbtn from '../SocialLogin/SocialLoginbtn';

const Login = () => {
    //formstate is needed to show error messages
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {signInUser} = useAuth()
    const navigate = useNavigate()
    //this data parameter is where all the input field things stored like email pass
    const handleSignIn =(data) =>{
        console.log(data)
        signInUser(data.email, data.password)
        .then(result=> {
            console.log(result.user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your logged in successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
        })
        .catch(error =>{
            console.log(error.message)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
              });
        })

    }
    return (
        <div>
            <div className='my-9 space-y-2'>
            <h2 className='text-5xl font-bold'>Welcome Back</h2>
            <p>Please login with ZapShift</p>
            </div>
            <form onSubmit={handleSubmit(handleSignIn)}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input {...register('email', {required: true})} type="email" className="input w-full" placeholder="Email" />
          {
            errors.email?.type==='required' && <p className='text-red-500'>Enter a valid Email</p>
          }
          <label className="label">Password</label>
          <input {...register('password', {required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/})}
           type="password" className="input w-full" placeholder="Password" />
          {
            errors.password?.type==='required' && <p className='text-red-500'>Password field cannot be empty</p>
          }
          {
            errors.password?.type==='pattern' && <p className='text-red-500'>Use 8+ characters with a mix of letters, numbers & symbols.</p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <div>
            <p>
                Don't have an account! <span className="text-blue-600"><Link to={'/register'}>Register</Link></span>
            </p>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
            </form>
            <SocialLoginbtn></SocialLoginbtn>
        </div>
    );
};

export default Login;