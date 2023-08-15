import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Stepper from '../components/form/register/Stepper';
import StepperControl from '../components/form/register/StepperControl';
import { UseContextProvider } from '../components/form/register/StepperContext';
import AccountCredentials from '../components/form/register/developer/AccountCredentials';
import PersonalInfo from '../components/form/register/developer/PersonalInfo';
import Final from '../components/form/register/developer/Final';
import FormContainer from '../components/form/FormContainer';
import developer from "../../public/developer.svg";
// import developer from "../../../../../../../../developer.svg";

function RegisterDeveloper() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [image, setImage] = useState(null); // to show the image preview when image is selected through input tag.
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    technical_role: '',
    qualification: '',
    skills: "",
    photo: null,
    openToWork: false,
    linkedin: "",
    github: "",
    about: "",
  });
  // console.log("formData : ", formData);

  const steps = ['Login Details', 'Personal Details', 'Review'];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (
          <AccountCredentials
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <PersonalInfo
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <Final
            formData={formData}
            setFormData={setFormData}
            image={image}
            setImage={setImage}
          />
        );
      default:
        return 0;
    }
  };

  // console.log('currentStep---', currentStep);
  // console.log('steps lenght before?------', steps.length);
  const handleClick = (direction) => {
    // console.log('currentStep after click---', currentStep);
    // console.log('direction------>', direction);

    let newStep = currentStep;
    // console.log('newstep---', newStep);
    // console.log('lenght?------', steps.length);

    // --- POST if the you reach at the last step
    // means when 3 === 3
    // and when back button is not clicked otherwise even for back button click, network calls will be made.
    if (newStep === steps.length && direction !== "back") {
      // console.log('heyyyy ', JSON.stringify(formData));

      const bodyData = new FormData();
      bodyData.append('fname', formData.fname);
      bodyData.append('lname', formData.lname);
      bodyData.append('email', formData.email);
      bodyData.append('password', formData.password);
      bodyData.append('phone', formData.phone);
      if (formData.qualification) {
        bodyData.append('qualification', formData.qualification);
      }
      if (formData.skills) {
        // converting input string to array
        const skillsArray = formData.skills.split(", ");
        // appending each array element to a separate form-data key as sending array in form-data type is tricky
        skillsArray.forEach((skill) => {
          bodyData.append('skills', skill);
        });
      }
      if (formData.city) {
        bodyData.append('city', formData.city);
      }
      if (formData.technical_role) {
        bodyData.append('technical_role', formData.technical_role);
      }
      if (formData.openToWork) {
        bodyData.append('openToWork', formData.openToWork);
      }
      if (formData.linkedin) {
        bodyData.append('linkedin', formData.linkedin);
      }
      if (formData.github) {
        bodyData.append('github', formData.github);
      }
      if (formData.about) {
        bodyData.append('about', formData.about);
      }
      if (formData.photo) {
        bodyData.append('photo', formData.photo);
      }

      // console.log("bodyData === ", bodyData);
      fetch(`${import.meta.env.VITE_API_URL}/developers/auth/register`, {
        method: 'POST',
        // when working with multipart/form-data, the browser automatically sets the appropriate Content-Type header, so you don't need to manually set it.
        // including the header manually might cause issues, especially with CORS.
        headers: {
          // 'Content-Type': 'multipart/form-data',
          // 'Content-Type': 'application/json',
        },
        body: bodyData,
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('POSTED --> ', data);
          if (data.data.access_token) {
            // console.log("token is ", data.data.access_token);
            localStorage.setItem("authToken", data.data.access_token);
            localStorage.setItem('isDev', data.data.developer._id);
            localStorage.setItem('dev_uid', data.data.developer.uid);
            toast.success(`${data.message}`, {
              position: toast.POSITION.TOP_CENTER, autoClose: 2000,
            });
            navigate("/");
            // alert(`${data.message}`);
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log('POSTING error --> ', error);
        });
    }

    // direction === 'next' ? newStep++ : newStep--;
    if (direction === 'next') {
      newStep += 1;
    } else {
      newStep -= 1;
    }

    // check if steps are within bounds and save the changes in state variable
    // newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <div>
      {/* Stepper */}
      <FormContainer image={developer}>
        <div className="relative h-full w-full">
          <div className="w-full h-full relative">
            <Stepper
              steps={steps}
              currentStep={currentStep}
            />
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
          </div>
          {/* navigation button */}
          <div className=" w-full absolute bottom-0">
            {/* {currentStep !== steps.length && ( */}
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
            {/* )} */}
          </div>
        </div>
      </FormContainer>
    </div>
  );
}

export default RegisterDeveloper;
