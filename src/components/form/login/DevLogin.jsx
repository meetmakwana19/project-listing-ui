import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoginContainer from './LoginContainer';
import developer from '../../../../public/developer.svg';

export default function DevLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSignIn = () => {
    const id = toast.loading("Please wait...", {
      position: toast.POSITION.TOP_CENTER,
    });
    (fetch(`${import.meta.env.VITE_API_URL}/developers/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }))
      .then((response) => response.json())
      .then((data) => {
        if (data.data.access_token) {
          // console.log("token is ", data.data.access_token);
          localStorage.setItem('authToken', data.data.access_token);
          localStorage.setItem('isDev', data.data.developer._id);
          localStorage.setItem('dev_uid', data.data.developer.uid);
          toast.update(id, {
            render: "Login Successful", type: "success", isLoading: false, autoClose: 2000,
          });
          navigate('/');
          // alert(`${data.message}`);

          window.location.reload();
        }
        // console.log("LOGGED IN --> ", data);
        // console.log("DEV --> ", localStorage.getItem('isDev'));
      })
      .catch((error) => {
        toast.update(id, {
          render: `${error}`, type: "error", isLoading: false, autoClose: 2000,
        });

        console.log('POSTING error --> ', error);
      });
  };

  return (
    <LoginContainer image={developer}>
      <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
        <div className="relative">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
            Email
          </p>
          <input
            placeholder="johndoe@example.com"
            type="email"
            value={form.email}
            name="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border lowercase placeholder-gray-400 focus:outline-none
          focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
          border-gray-300 rounded-md"
          />
        </div>
        <div className="relative">
          <p
            className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
          absolute"
          >
            Password
          </p>
          <input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border placeholder-gray-400 focus:outline-none
          focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
          border-gray-300 rounded-md"
          />
        </div>
        <button
          type="button"
          onClick={() => onSignIn()}
          className={`absolute -bottom-52 cursor-pointer  pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
        rounded-lg transition duration-200 hover:bg-indigo-600 ease w-full`}
        >
          Sign In
        </button>
        {' '}
      </div>
    </LoginContainer>
  );
}
