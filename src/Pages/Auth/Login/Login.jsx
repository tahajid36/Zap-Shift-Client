import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const Login = () => {
    //formstate is needed to show error messages
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {signInUser} = useAuth()
    const navigate = useNavigate()
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
            <h2>login page here</h2>
            <form onSubmit={handleSubmit(handleSignIn)}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input {...register('email', {required: true})} type="email" className="input" placeholder="Email" />
          {
            errors.email?.type==='required' && <p className='text-red-500'>Enter a valid Email</p>
          }
          <label className="label">Password</label>
          <input {...register('password', {required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/})} type="password" className="input" placeholder="Password" />
          {
            errors.password?.type==='required' && <p className='text-red-500'>Password field cannot be empty</p>
          }
          {
            errors.password?.type==='pattern' && <p className='text-red-500'>Use 8+ characters with a mix of letters, numbers & symbols.</p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
            </form>
        </div>
    );
};

export default Login;