import React from 'react';

function AccountCredentials({ formData, setFormData }) {
  // 1.Form
  // fName lname
  // Email
  // Password
  // Re-enter Password

  return (
    <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8 h-[40vh] overflow-y-scroll scroll-smooth z-100 scrollbar p-3">
      <div className="flex flex-auto gap-5 w-full items-center justify-between">
        <div className="relative w-full">
          <p
            className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
          >
            First Name*
          </p>
          <input
            name="fname"
            placeholder="John"
            type="text"
            required
            value={formData.fname}
            onChange={(event) => setFormData({ ...formData, fname: event.target.value })}
            className="border placeholder-gray-400 focus:outline-none focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
          />

        </div>
        <div className="relative w-full">
          <p
            className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
          >
            Last Name*
          </p>
          <input
            placeholder="John"
            type="text"
            required
            value={formData.lname}
            onChange={(event) => setFormData({ ...formData, lname: event.target.value })}
            className="border    placeholder-gray-400 focus:outline-none focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="relative">
        <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
          Email*
        </p>
        <input
          placeholder="johndoe@example.com"
          type="text"
          required
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
          className="border placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
        />
      </div>
      <div className="relative">
        <p
          className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
        >
          Password*
        </p>
        <input
          placeholder="Password"
          type="password"
          required
          value={formData.password}
          onChange={(event) => setFormData({ ...formData, password: event.target.value })}
          className="border placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
        />
      </div>
      {/* <div className="relative">
        <p
          className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
        >
          Re-enter Password
        </p>
        <input
          placeholder="Password"
          type="password"
          required
          value={formData.password}
          onChange={(event) => setFormData({ ...formData, password: event.target.value })}
          className="border placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
        />
      </div> */}
    </div>
  );
}

export default AccountCredentials;
