import { useState } from 'react';
import { LuEdit } from 'react-icons/lu';
// import { useNavigate } from 'react-router-dom';
// Initialization for ES Users

function ProjectHistoryUpdate({ fetchHistory }) {
// function ProjectHistoryUpdate( { projectHistory, setProjectHistory }) {
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    description: "",
    startDate: "",
    endDate: "",
    developer: localStorage.getItem("isDev"),
  });
  // console.log("FromData : ", formData);

  const postProject = async () => {
    console.log("Posting started");
    fetch(`https://projekto-backend.onrender.com/project-histories`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem("authToken"),
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("History -----", data);
        if (data.error) {
          alert(`${data.message} : ${data.error}`);
        }
        alert(data.message);
        fetchHistory();
      });
  };
  const handleSubmit = () => {
    console.log("clicked");
    postProject();
  };
  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button
        type="button"
        onClick={() => window.ProjectHistoryUpdate.showModal()}
      >
        <LuEdit className="absolute right-8 top-9 text-2xl text-accent hover:bg-accent/10 " />
      </button>
      <dialog
        id="ProjectHistoryUpdate"
        className="modal p-4 bg-transparent"
      >
        <form
          method="dialog"
          className="modal-box bg-white rounded-2xl p-10"
        >
          <h1 className="flex items-center justify-center w-full text-2xl font-semibold border-b pb-4 text-slate-800">
            Add your Project in History
          </h1>
          <div className="w-full my-6 mr-0 ml-0 relative space-y-8 h-[60vh] overflow-y-scroll scroll-smooth z-10 scrollbar px-3">
            {/* ------Project title--------- */}
            <div className="relative lg:w-[700px] w-[60vw] pt-3">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                Project title
              </p>
              <input
                minLength={1}
                maxLength={50}
                required
                placeholder="Google"
                type="text"
                value={formData.title}
                onChange={(event) => setFormData({ ...formData, title: event.target.value })}
                className="border placeholder-gray-400 focus:outline-none focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
              />
            </div>
            {/* ------Project Link--------- */}
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                Demo link
              </p>
              <input
                placeholder="e.g example.com"
                type="text"
                value={formData.link}
                onChange={(event) => setFormData({ ...formData, link: event.target.value })}
                className="border lowercase placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
              />
            </div>
            {/* ------Project description--------- */}
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                Description
              </p>
              <textarea
                rows={4}
                maxLength={350}
                placeholder="e.g key responsibilities"
                type="text"
                value={formData.description}
                onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                className="border placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
              />
            </div>
            {/* ------------date---------- */}
            <div className="flex w-full items-center justify-between relative z-[100]">
              <div className="relative w-[49%]">
                <p className="bg-white pt-0  pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                  Start Date
                </p>
                <input
                  placeholder="e.g example.com"
                  type="date"
                  value={formData.startDate}
                  onChange={(event) => setFormData({ ...formData, startDate: event.target.value })}
                  className="border lowercase placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                />
              </div>
              {' '}
              <div className="relative w-[49%]">
                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                  End Date
                </p>
                <input
                  placeholder="e.g example.com"
                  type="date"
                  value={formData.endDate}
                  onChange={(event) => setFormData({ ...formData, endDate: event.target.value })}
                  className="border lowercase placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => handleSubmit(e)}
            className="cursor-pointer inline-block  pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center
             text-white bg-indigo-500 rounded-lg duration-200 hover:bg-indigo-600 ease w-full"
          >
            Add
          </button>
        </form>
        <form method="dialog">
          <button
            type="button"
            className="modalbackdrop"
          >
            close
          </button>
        </form>
      </dialog>
    </>
  );
}

export default ProjectHistoryUpdate;
