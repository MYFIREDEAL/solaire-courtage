import React from 'react';

interface ProgressBarProps {
  steps: string[];
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  return (
    <div style={{display:'flex',alignItems:'center'}}>
      {steps.map((step, index) => (
        <div key={step} style={{flex:1,textAlign:'center'}}>
          <div
            style={{
              height:8,
              background:index <= currentStep ? '#16a34a' : '#d1d5db',
              marginRight:index < steps.length - 1 ? 4 : 0
            }}
          />
          <span style={{fontSize:12}}>{step}</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
