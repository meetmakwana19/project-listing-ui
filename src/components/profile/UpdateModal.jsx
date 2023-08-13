// import { useEffect, useState } from 'react';
import { useState } from "react";
import { LuEdit } from "react-icons/lu";

function UpdateModal({ developer, fetchProfile }) {
  // need to make a local copy of the state came from parent component
  // because the update in original state using onChange handler was causing unnessary change in original state before saving it up through the PATCH request.
  const [localDev, setLocalDev] = useState(developer);
  console.log("local state : ", localDev);

  const uid = localStorage.getItem("dev_uid");

  const handleSkills = (event) => {
    const { name, value } = event.target;
    setLocalDev({
      ...localDev,
      [name]: name === "skills" ? value.split(", ") : value,
    });
  };

  const handleModalClose = () => {
    const modal = document.getElementById("my_modal_2");
    if (modal) {
      modal.close();
    }
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    const bodyData = new FormData();
    bodyData.append('fname', localDev.fname);
    bodyData.append('lname', localDev.lname);
    bodyData.append('email', localDev.email);
    bodyData.append('phone', localDev.phone);
    if (localDev.qualification) {
      bodyData.append('qualification', localDev.qualification);
    }
    if (localDev.skills) {
      // localDev.skills is already an array which is handled by handleSkills onChange method
      // so just appending each array element to a separate form-data key as sending array in form-data type is tricky
      localDev.skills.forEach((skill) => {
        bodyData.append('skills', skill);
      });
    }
    if (localDev.city) {
      bodyData.append('city', localDev.city);
    }
    if (localDev.technical_role) {
      bodyData.append('technical_role', localDev.technical_role);
    }
    if (localDev.openToWork) {
      bodyData.append('openToWork', localDev.openToWork);
    }
    if (localDev.linkedin) {
      bodyData.append('linkedin', localDev.linkedin);
    }
    if (localDev.github) {
      bodyData.append('github', localDev.github);
    }
    if (localDev.about) {
      bodyData.append('about', localDev.about);
    }
    if (localDev.photo) {
      bodyData.append('photo', localDev.photo);
    }

    fetch(`${import.meta.env.VITE_API_URL}/developers/${uid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("authToken"),
      },
      body: JSON.stringify(localDev),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('POSTED --> ', data);
        alert(`${data.message}`);
        fetchProfile();
        handleModalClose();
      })
      .catch((error) => {
        console.log("POSTING error --> ", error);
      });
  };
  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button
        type="button"
        className="btn"
        onClick={() => window.my_modal_2.showModal()}
      >
        <LuEdit className="absolute right-8 top-9 text-2xl text-accent hover:bg-accent/10 " />
      </button>
      <dialog id="my_modal_2" className="modal p-4 bg-transparent">
        <form method="dialog" className="modal-box  bg-white rounded-2xl p-10">
          <h1 className="flex items-center justify-center w-full text-2xl font-semibold border-b pb-4 text-slate-800">
            Update Profile
          </h1>
          <div className="w-full my-6 mr-0 ml-0 relative space-y-8 h-[60vh] overflow-y-scroll scroll-smooth z-10 scrollbar px-3">
            <div className="flex flex-auto gap-5 w-full items-center justify-between">
              <div className="relative w-full  pt-3">
                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                  First Name
                </p>
                <input
                  placeholder="John"
                  type="text"
                  value={localDev.fname}
                  onChange={(event) => setLocalDev({ ...localDev, fname: event.target.value })}
                  className="border capitalize placeholder-gray-400 focus:outline-none focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                />
              </div>
              <div className="relative w-full">
                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                  Last Name
                </p>
                <input
                  placeholder="Doe"
                  type="text"
                  value={localDev.lname}
                  onChange={(event) => setLocalDev({ ...localDev, lname: event.target.value })}
                  className="border capitalize placeholder-gray-400 focus:outline-none focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                Email
              </p>
              <input
                placeholder="johndoe@example.com"
                type="text"
                value={localDev.email}
                onChange={(event) => setLocalDev({ ...localDev, email: event.target.value })}
                className="border   placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
              />
            </div>
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                Phone
              </p>
              <input
                placeholder="+91 84597 25190"
                type="phone"
                value={localDev.phone}
                onChange={(event) => setLocalDev({ ...localDev, phone: event.target.value })}
                className="border   placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
              />
            </div>
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                City
              </p>
              <input
                placeholder="Mumbai"
                type="text"
                value={localDev.city}
                onChange={(event) => setLocalDev({ ...localDev, city: event.target.value })}
                className="border   placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
              />
            </div>
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                Educational Qualification
              </p>
              <input
                placeholder="Full stack web developer"
                type="text"
                value={localDev.qualification}
                onChange={(event) => setLocalDev({
                  ...localDev,
                  qualification: event.target.value,
                })}
                className="border  placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
              />
            </div>
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                Technical Role
              </p>
              <input
                placeholder="Full stack web developer"
                type="text"
                value={localDev.technical_role}
                onChange={(event) => setLocalDev({
                  ...localDev,
                  technical_role: event.target.value,
                })}
                className="border   placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
              />
            </div>
            {/* ----------------Image Update-------------- */}
            <div className="relative">
              <p
                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
              >
                Update Photo
              </p>
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:text-accent  hover:bg-accent/10 "
              >
                <div className="flex flex-col text-gray-500  hover:text-accent items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm  ">
                    <span className="font-semibold">Click to upload</span>
                    {' '}
                    or
                    drag and drop
                  </p>
                  <p className="text-xs  ">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
            <div className="relative">
              <p
                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
              >
                About
              </p>
              <textarea
                placeholder="About yourself..."
                type="text"
                value={localDev.about}
                onChange={(event) => setLocalDev({ ...localDev, about: event.target.value })}
                className="border placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
              />
            </div>
            <div className="relative">
              <p
                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
              >
                Skills
              </p>
              <input
                placeholder="Enter skills comma (,) separated.."
                type="text"
                value={localDev.skills.join(", ")}
                name="skills"
                onChange={handleSkills}
                className="border capitalize placeholder-gray-400 focus:outline-none focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="flexSwitchChecked"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Open to work ?
                <div className="form-control">
                  <input
                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchChecked"
                    checked={localDev.openToWork}
                    onChange={(e) => setLocalDev({
                      ...localDev,
                      openToWork: e.target.checked,
                    })}
                  />
                </div>
              </label>
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => handleUpdate(e)}
            className="cursor-pointer inline-block  pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg duration-200 hover:bg-indigo-600 ease w-full"
          >
            Update
          </button>
        </form>
        <form method="dialog">
          <button type="button" className="modalbackdrop">
            close
          </button>
        </form>
      </dialog>
    </>
  );
}

export default UpdateModal;
