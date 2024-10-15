"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Stepper from './Stepper';
import StepTwo from './StepTwo';
import StepOne from './StepOne';
import StepThree from './StepThree';
import { reactRouterV5BrowserTracingIntegration } from '@sentry/react';

const steps = ['Organization', 'Trail Days', 'Site Configuration'];

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3033/api/v1/auth';

const StepperWithNavigation = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    organizationDesignation: '',
    organizationName: '',
    organizationSize: '',
    organizationLandingPageLink: '',
    mobileNumber: '',
    trail:'',
    plan:'',
    listOfUrlAndEnv: [{ baseURL: '', environment: '' }],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Handle the next button click
  console.log("FormData", formData)
  const handleNext = () => {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
    }
  };

  // Handle the previous button click
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const updateFormData = (stepData: Partial<typeof formData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...stepData,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    alert("Form submit")
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      setLoading(true);
      setError(null);

      console.log('FormData being sent:', formData);
      
      const response = await fetch(`${API_URL}/onboarding`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `${token}`,
        },
        body: JSON.stringify(formData),
      });

      console.log('Payload being sent:', JSON.stringify(formData));
      const data = await response.json();
      console.log("Response",data)
      if (data.code) {
        alert('Form submitted successfully!');
        console.log('Response:', );
        router.push('/milirdashboard')
      } else {
        // const errorData = await response.json();
        // setError(`Error: ${errorData.message}`);
        // console.error('Form submission error:', errorData);
        alert("Form Submission Error")
      }
    } catch (err) {
      setError('An error occurred while submitting the form.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  }
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <StepOne formData={formData} updateFormData={updateFormData} />;
      case 1:
        return <StepTwo formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <StepThree formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Stepper Component */}
      <Stepper steps={steps} currentStep={currentStep} variant="numbers" />

      <div className="mt-8">
        {renderStepContent()}
      </div>
      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
      {currentStep > 0 && (
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0} // Disable if at the first step
          className={`px-4 py-2 rounded ${currentStep === 0 ? 'bg-gray-300' : 'bg-red-500 text-white'}`}
        >
          Previous
        </button>
      )}

      {currentStep < steps.length - 1 && currentStep === 0 && (
        <div className="ml-auto">
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1} // Disable if at the last step
          className={`px-4 py-2 rounded ${currentStep === steps.length - 1 ? 'bg-gray-300' : 'bg-red-500 text-white'}`}
        >
          Next
        </button>
        </div>
        )}

        {currentStep === 1 && (
          <button
            onClick={handleNext}
            className={`px-4 py-2 rounded bg-red-500 text-white`}
          >
            Next
          </button>
        )}

      {currentStep === steps.length - 1 && (
        <button
          onClick={handleSubmit}
          className={`px-4 py-2 rounded bg-red-500 text-white`}
         >
          Submit
        </button>
      )}
      </div>
    </div>
  );
};

export default StepperWithNavigation;
