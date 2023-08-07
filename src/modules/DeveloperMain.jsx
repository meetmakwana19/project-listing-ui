import { useEffect, useState } from 'react';
import { BiSolidMap } from 'react-icons/bi';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import {
  BsFillCalendarEventFill, BsGithub, BsGlobe, BsLinkedin,
} from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';

function DeveloperMain() {
  const { uid } = useParams();
  const [developer, setDeveloper] = useState([]);
  const [projectHistory, setProjectHistory] = useState([]);

  const fetchHistory = async (id) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/project-histories?developer=${id}`,
      { mode: 'cors' },
    );
    const fetched = await response.json();
    await setProjectHistory(fetched.data);
    // console.log('fetched info ------------', projectHistory);
  };

  const fetchDeveloper = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/developers/${uid}`,
      { mode: 'cors' },
    );
    const fetchedDeveloper = await response.json();
    setDeveloper(fetchedDeveloper.data);
    // console.log('fetch Developer------------', fetchedDeveloper.data);

    // fetching the developer's project history with his _id recieved from response.
    fetchHistory(fetchedDeveloper.data._id);
  };

  useEffect(() => {
    fetchDeveloper();
  }, []);

  const skills = developer?.skills;

  if (!Object.keys(developer).length > 0) {
    return (
      <div className="flex w-full justify-center text-slate-500">
        Loading.....
      </div>
    );
  }
  return (
    <div className="flex flex-col max-w-screen-sm md:max-w-none lg:max-w-none items-center justify-center mx-3">
      <div
        className="flex w-full lg:w-3/5 md:w-4/5 flex-col justify-center
            items-center border z-10 relative
           border-slate-300  bg-white/50 rounded-2xl my-6 mb-10"
      >
        <div className="flex justify-start lg:items-center w-full mt-6 items-start  place-content-start md:gap-[5%] border-b border-slate-300 px-5 py-7 relative">
          <div className="flex items-center relative justify-center h-24 lg:h-80 p-0 m-0">
            <img
              alt="developer"
              src={developer?.profile_pic}
              className="inline-block object-cover aspect-square  h-full p-0 shadow shadow-accent rounded-full"
            />
          </div>

          <div className="flex flex-col justify-between lg:pb-16 h-full  gap-3">
            {/* --------Developer Name------------------- */}
            <h1 className="text-3xl lg:text-5xl font-medium text-slate-900">
              {developer?.fname}
              {' '}
              {developer?.lname}
            </h1>
            <div className="flex place-content-start items-center w-full text-slate-600 gap-1">
              <BiSolidMap />
              {/* ------------------------ Developer City-------------------------- */}
              <p>{developer?.city}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-start w-full items-start place-content-start relative">
          {/* ----------Col-1----------------*/}
          <div className="flex flex-col gap-6 px-5 py-7 relative flex-wrap  mr-2  md:w-1/3">
            <div className="flex flex-col gap-2  ">
              <h1 className="text-lg text-slate-900 font-medium">Role</h1>
              <p className="description">{developer?.technical_role}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg text-slate-900 font-medium">Education</h1>
              <p className="description">{developer?.qualification}</p>
            </div>
            <div className="flex w-full flex-col gap-2 relative">
              <h1 className="text-lg text-slate-900 font-medium">Contact</h1>
              <Link
                to={`mailto:${developer?.email}`}
                className="contact-dev"
              >
                <FaEnvelope />
                {developer?.email}
              </Link>
              <Link
                to={`tel:${developer?.phone}`}
                className="contact-dev"
              >
                <FaPhone />
                {developer?.phone}
              </Link>
              <Link
                to={developer?.linkedin}
                target="_blank"
                className="contact-dev relative w-full"
              >
                <p>
                  <BsLinkedin />
                </p>
                <p className="break-words w-full">{developer?.linkedin}</p>
              </Link>

              <Link
                to={developer?.github}
                target="_blank"
                className="contact-dev relative w-full"
              >
                <p>
                  <BsGithub />
                </p>
                <p className="break-words w-full">{developer?.github}</p>
              </Link>

            </div>
          </div>
          {/* ----------Col-2----------------*/}
          <div className="flex flex-col border-b md:border-b-0 md:border-l md:pl-2 border-slate-300 gap-6 md:w-2/3 pb-10">
            <div className="flex flex-col gap-2 px-5 py-7">
              {/* ---------Domain------------ */}
              <h1 className="text-2xl font-semibold mb-3">
                {developer?.technical_role}
              </h1>
              <p className="description">
                {developer?.about}
              </p>
            </div>
            <div className="flex flex-col gap-2 px-5">
              <h1 className="text-lg font-semibold mb-3">Skills</h1>
              <div className="flex flex-wrap">
                <ul className="flex flex-wrap  gap-2 capitalize text-accent">
                  {skills.map((skill, i) => (
                    <li key={i} className="border border-slate-300 px-2 py-1 bg-accent/5 text-sm rounded-2xl">
                      {skill}
                    </li>
                  ))}
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
        <div className="flex flex-col  pt-7 relative w-full">
          <h1 className="text-2xl px-5 font-semibold mb-6">Project History</h1>

          {/* ---------TODO: Project History------------ */}
          {projectHistory.length === 0 && (
            <h2 className="text-xl px-5 py-5">
              {`No projects found in ${developer.fname}'s Project History.`}
            </h2>

          )}
          {projectHistory.length > 0 && projectHistory.map((project) => (
            <div key={project.uid} className="flex flex-row justify-between border-t px-5 py-5 border-slate-300 relative">
              <div>

                {/* ------------------------ Project title-------------------------- */}
                <h2 className="text-xl font-semibold mb-2">
                  {project.title}
                </h2>
                {/* ------------------------ Project timeline-------------------------- */}
                <div className="flex place-content-start items-center w-full text-slate-600 gap-1">
                  <p className="flex  w-[56%] mb-3">
                    <BsFillCalendarEventFill className="mr-[3%]" />
                    {project.startDate}
                    &nbsp;to&nbsp;
                    {project.endDate}
                  </p>
                </div>
                <Link
                  to={project?.link}
                  target="_blank"
                  className="contact-dev"
                >
                  <BsGlobe />
                  {project?.link}
                </Link>
                <p className="description">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeveloperMain;
