import React from 'react';

const Tabs = ({ value, tabs = [], onChange = () => {} }) => {
  return (
    <div className="mb-6">
      <div className="sm:hidden">
        <select
          aria-label="Selected tab"
          className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150"
        >
          <option selected>All</option>
          <option>Materials</option>
          <option>Services</option>
          <option>Workers</option>
          <option>Customers</option>
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            {tabs.map(({ id, name }) => (
              <button
                key={id}
                className={`whitespace-no-wrap mr-8 py-3 px-1 border-b-2 border-transparent font-medium text-sm leading-5 focus:outline-none ${
                  id === value
                    ? 'border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => onChange(id)}
              >
                {name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

/*
const handleSteps = async (event, index) => {
  event.preventDefault();
  const errors = await validateForm();
  if (isEmpty(errors)) {
    setStep(index);
  }
};
const { steps, currentStep, nextStep, previousStep, setStep } = useSteps([
  '1. Details',
  '2. Optional'
]);

const handleNextStep = async (event) => {
  event.preventDefault();
  const errors = await validateForm();
  if (isEmpty(errors)) {
    nextStep();
  }
};

const Steps = () => (
  <div>
    <div className="hidden sm:block">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex">
          {steps.map((step, index) => (
            <button
              key={index}
              type="button"
              className={`w-1/2 py-4 px-1 text-center border-b-2  font-medium text-sm leading-5 focus:outline-none ${
                index === currentStep
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              aria-current="step"
              onClick={(event) => handleSteps(event, index)}
            >
              {step}
            </button>
          ))}
        </nav>
      </div>
    </div>
  </div>
);
*/
