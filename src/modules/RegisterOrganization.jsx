import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Stepper from '../components/form/register/Stepper';
import StepperControl from '../components/form/register/StepperControl';
import { UseContextProvider } from '../components/form/register/StepperContext';
import FormContainer from '../components/form/FormContainer';
// import organization from '/organization.svg';
import organization from '../../public/organization.svg';
import OrgAccount from '../components/form/register/organization/OrgAccount';
import OrgInfo from '../components/form/register/organization/OrgInfo';
import OrgBanner from '../components/form/register/organization/OrgBanner';

function RegisterOrganization() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    password: '',
    domain: '',
    website: '',
    photo: null,
  });

  const steps = ['Login Details', 'Company Details', 'Review'];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (
          <OrgAccount
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <OrgInfo
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return <OrgBanner formData={formData} setFormData={setFormData} />;
      default:
        return 0;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    // console.log('newstep---', newStep);
    // console.log('lenght?------', steps.length);

    // --- POST if the you reach at the last step
    // means when 3 === 3
    // and when back button is not clicked otherwise even for back button click, network calls will be made.
    if (newStep === steps.length && direction !== "back") {
      const bodyData = new FormData();

      bodyData.append("name", formData.name);
      bodyData.append("password", formData.password);
      if (formData.about) {
        bodyData.append("about", formData.about);
      }
      if (formData.domain) {
        bodyData.append("domain", formData.domain);
      }
      if (formData.website) {
        bodyData.append("website", formData.website);
      }
      if (formData.photo) {
        bodyData.append("photo", formData.photo);
      }
      fetch(
        `${import.meta.env.VITE_API_URL}/organizations/auth/register`,
        {
          method: 'POST',
          // when working with multipart/form-data, the browser automatically sets the appropriate Content-Type header, so you don't need to manually set it.
          // including the header manually might cause issues, especially with CORS.
          // headers: {
          //   'Content-Type': 'application/json',
          // },
          // body: JSON.stringify(formData),
          body: bodyData,
        },
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log('POSTED --> ', data);
          if (data.data.access_token) {
            localStorage.setItem("authToken", data.data.access_token);
            localStorage.setItem('isOrg', data.data.organization._id);
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

    // direction === 'next' ? (newStep += 1) : (newStep -= 1);
    if (direction === "next") {
      newStep += 1;
    } else {
      newStep -= 1;
    }
    // check if steps are within bounds
    // newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  // console.log('org data ==== ', formData);
  return (
    <div>
      {/* Stepper */}
      <FormContainer image={organization}>
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

export default RegisterOrganization;
