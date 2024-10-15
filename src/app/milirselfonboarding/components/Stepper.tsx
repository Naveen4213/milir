"use client";
import React, { useState } from 'react';
import clsx from 'clsx';

type StepperProps = {
  steps: string[];
  currentStep: number;
  variant?: 'numbers' | 'dots'; // Optional: Different variants for stepper design
};

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, variant = 'numbers' }) => {
  return (
    <>
    <div className="flex items-center justify-between w-full">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div key={index} className="flex-1 flex items-center">
            {/* Step Circle */}
            <div
              className={clsx(
                'flex items-center justify-center rounded-full h-10 w-10 border-2',
                {
                  'bg-red-600 text-white border-red-600': isCompleted || isActive,
                  'text-gray-500 border-gray-300': !isCompleted && !isActive,
                }
              )}
            >
              {/* Render number or dot based on variant */}
              {variant === 'numbers' ? (
                <span className="text-lg font-semibold">
                  {isCompleted ? '✔' : index + 1}
                </span>
              ) : (
                <span
                  className={clsx('h-3 w-3 rounded-full', {
                    'bg-red-600': isCompleted || isActive,
                    'bg-gray-300': !isCompleted && !isActive,
                  })}
                />
              )}
            </div>

            {/* Step Label */}
            <div className="ml-4">
              <p
                className={clsx('text-sm font-medium', {
                  'text-red-600': isCompleted || isActive,
                  'text-gray-500': !isCompleted && !isActive,
                })}
              >
                {step}
              </p>
            </div>

            {/* Step Line (Hide for last step) */}
            {index < steps.length - 1 && (
              <div
                className={clsx('flex-1 h-px ml-4', {
                  'bg-red-600': isCompleted,
                  'bg-gray-300': !isCompleted,
                })}
              />
            )}
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Stepper;
