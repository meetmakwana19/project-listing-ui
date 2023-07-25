/* eslint-disable camelcase */
// import { BiSolidMap } from 'react-icons/bi';

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CompanyDetails({ org_data, update, edit }) {
  const [orgProposals, setOrgProposals] = useState([]);

  // it will get empty object for /profile page
  // but it will get {uid : xxx} object for /companies/:uid page
  const profile = useParams();

  useEffect(() => {
    const orgId = localStorage.getItem("isOrg");
    fetch(
      `https://projekto-backend.onrender.com/proposals?organization=${orgId}`,
      {
        headers: {
          authorization: localStorage.getItem("authToken"),
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setOrgProposals(data.data);
      });
  }, []);
  return (
    <div className="flex flex-col max-w-screen-sm md:max-w-none lg:max-w-none items-center justify-center mx-3">
      <div
        className="flex w-full lg:w-3/5 md:w-4/5 flex-col justify-center
            items-center border z-10 relative
           border-slate-300  bg-white/50 rounded-2xl my-6 mb-10"
      >
        {/* ------------------Company Banner */}
        <div className="flex justify-start w-full mt-6 items-start place-content-start gap-[5%] border-b border-slate-300 px-5 py-7 relative">
          <div className="flex items-center relative justify-center h-24 p-0 m-0">
            <img
              alt="banner"
              src={org_data.banner_img}
              className="inline-block object-cover aspect-video h-full p-0 shadow rounded-xl"
            />
          </div>
          {/* <LuEdit className='absolute right-8 top-9 text-2xl text-accent hover:bg-accent/10' /> */}
          <div className={` absolute right-0 top-0 ${edit}`}>
            {update}
            {' '}
          </div>
          <div className="flex flex-col justify-between items-start gap-3">
            {/* --------Company Name------------------- */}
            <h1 className="text-3xl font-medium text-slate-900">
              {org_data.name}
            </h1>
            <div className="flex place-content-start items-center w-full text-slate-600 gap-1">
              {/* <BiSolidMap /> */}
              {/* ------------------------ Company Location-------------------------- */}
              {/* <p>India</p> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-start w-full items-start place-content-start">
          {/* ----------Col-1----------------*/}
          <div className="flex flex-col gap-6 px-5 py-7  mr-2  md:w-1/3 relative">
            <div className="flex flex-col gap-2  ">
              <h1 className="text-lg text-slate-900 font-medium">Industry</h1>
              <p className="description break-words">{org_data.domain}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg text-slate-900 font-medium">Founded in</h1>
              <p className="description">1968</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg text-slate-900 font-medium">
                Company Website
              </h1>
              <p className="description break-words">{org_data.website}</p>
            </div>
          </div>
          {/* ----------Col-2----------------*/}
          <div className="flex flex-col border-b md:border-b-0 md:border-l md:pl-2 border-slate-300 md:gap-6 md:w-2/3 pb-10">
            <div className="flex flex-col gap-2 px-5 py-7">
              {/* ---------Company Name------------ */}
              <h1 className="text-2xl font-semibold mb-3">
                About
                {' '}
                {org_data.name}
              </h1>
              <p className="description">{org_data.about}</p>
            </div>
            <div className="flex flex-col gap-2 px-5">
              <h1 className="text-lg font-semibold mb-3">Domain</h1>
              <div className="flex flex-wrap">
                <ul className="flex flex-wrap  gap-2 capitalize text-accent">
                  <li
                    key={org_data.uid}
                    className="border border-slate-300 px-2 py-1 bg-accent/5 text-sm rounded-2xl"
                  >
                    {org_data.domain}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex w-full lg:w-3/5 md:w-4/5 flex-col justify-center
            items-center border z-10 relative
           border-slate-300  bg-white/50 rounded-2xl my-6 mb-10"
      >
        <div className="flex flex-col px-5 py-7">
          <h1 className="text-2xl font-semibold mb-3">Company Projects</h1>
          {/* ---------TODO: Comapny Projects------------ */}
          <div className="border-b py-5 border-slate-300 ">
            {org_data.org_projects && org_data.org_projects.map((project) => (
              <div className="flex items-center my-5" key={project.uid}>
                <img
                  src={project.thumbnail}
                  alt=""
                  className="w-[10vw] md:w-20 rounded-full  object-cover aspect-square mx-8"
                />
                <div>
                  <Link to={`/projects/${project.uid}`} className="text-xl font-semibold mt-3 hover:text-accent">{project.title}</Link>
                  <div className="flex place-content-start items-center w-full text-slate-600 gap-1">
                    {/* ------------------------ Developer City-------------------------- */}
                    <p>{project.uid}</p>
                  </div>
                  <p className="description mb-4">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* only render if the url param has {} object due to no :uid in url */}
      {!profile.uid === true
        ? (
          <div
            className="flex w-full lg:w-3/5 md:w-4/5 flex-col justify-center
            items-center border z-10 relative
           border-slate-300  bg-white/50 rounded-2xl my-6 mb-10"
          >
            <div className="flex flex-col px-5 py-7">
              <h1 className="text-2xl font-semibold mb-3">Company&apos;s Projects Proposals</h1>
              {/* ---------TODO: Comapny Projects------------ */}
              <div className="border-b py-5 border-slate-300 ">
                {orgProposals && orgProposals.map((project) => (
                  <div className="flex items-center my-5" key={project.uid}>
                    <img
                      src={project.project.thumbnail}
                      alt=""
                      className="w-[10vw] md:w-20 rounded-full  object-cover aspect-square mr-[-15%]"
                    />
                    <Link to={`/developers/${project.developer.uid}`}>
                      <img
                        src={project.developer.profile_pic}
                        alt=""
                        className="w-[10vw] md:w-20 rounded-full  object-cover aspect-square mx-8"
                      />
                    </Link>
                    <div>
                      <Link to={`/projects/${project.project.uid}`} className="text-xl font-semibold mt-3 hover:text-accent">{project.project.title}</Link>
                      <div className="flex place-content-start items-center w-full text-slate-600 gap-1">
                        {/* ------------------------ Developer City-------------------------- */}
                        <p>{project.project.uid}</p>
                      </div>
                      <p className="description mb-4">
                        Proposal :
                        {' '}
                        {project.uid}
                        {' '}
                        by
                        {' '}
                        {project.developer.fname}
                        {" "}
                        {project.developer.lname}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
        : null }

    </div>
  );
}

export default CompanyDetails;
