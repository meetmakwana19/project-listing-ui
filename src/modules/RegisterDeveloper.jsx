import React, { useState } from 'react';
import Stepper from '../components/form/register/Stepper';
import StepperControl from '../components/form/register/StepperControl';
import { UseContextProvider } from '../components/form/register/StepperContext';
import AccountCredentials from '../components/form/register/steps/AccountCredentials';
import PersonalInfo from '../components/form/register/steps/PersonalInfo';
import Final from '../components/form/register/steps/Final';
import FormContainer from '../components/form/FormContainer';
import developer from '/developer.svg';
const RegisterDeveloper = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const steps = ['Login Details', 'Personal Details', 'Profile Pic'];

	const displayStep = (step) => {
		switch (step) {
			case 1:
				return <AccountCredentials />;
			case 2:
				return <PersonalInfo />;
			case 3:
				return <Final />;
			default:
		}
	};

	const handleClick = (direction) => {
		let newStep = currentStep;
		console.log('newstep---', newStep);
		console.log('lenght?------', steps.length);

		direction === 'next' ? newStep++ : newStep--;
		// check if steps are within bounds
		newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
	};

	return (
		<div
		//  className='mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2'
		>
			{/* Stepper */}
			<FormContainer image={developer}>
				<div className='relative h-full w-full'>
					<div className='w-full h-full relative'>
						<Stepper
							steps={steps}
							currentStep={currentStep}
						/>
						<UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
					</div>
					{/* navigation button */}
					<div className=' w-full absolute bottom-0'>
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
};

export default RegisterDeveloper;
