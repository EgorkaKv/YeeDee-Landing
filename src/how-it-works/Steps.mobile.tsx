import React, { useState, useMemo } from "react";
import './Step.css'
import {useTranslation} from "react-i18next";

type StepData = {
  title: string;
  description: string;
};

interface StepsProps {
  className?: string;
  onStateChange?: (state: 'step1' | 'step2' | 'step3') => void;
}

const CONSTANTS = {
  CIRCLE_RADIUS: 18,
  CIRCLE_SIZE: 40,
  STROKE_WIDTH: 3,
} as const;

export const StepsMobile: React.FC<StepsProps> = ({onStateChange}) => {
  const {t} = useTranslation();
  const [activeStep, setActiveStep] = useState<number>(0);

  // Создание steps с мемоизацией
  const steps: StepData[] = useMemo(() => [{
    title: t('hiw.step_1__title'),
    description: t('hiw.step_1__description'),
  }, {
    title: t('hiw.step_2__title'),
    description: t('hiw.step_2__description'),
  }, {
    title: t('hiw.step_3__title'),
    description: t('hiw.step_3__description'),
  }], [t]);

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);

    // Вызываем onStateChange если передан
    if (onStateChange) {
      const stateMap: Record<number, 'step1' | 'step2' | 'step3'> = {
        0: 'step1',
        1: 'step2',
        2: 'step3'
      };
      onStateChange(stateMap[stepIndex]);
    }
  };

  return (
    <div className='steps-container-mobile' role="tablist">
      {/* Текст активного шага */}
      <div className='step-text-mobile'>
        <h3>{steps[activeStep].title}</h3>
        <p>{steps[activeStep].description}</p>
      </div>

      {/* Горизонтальный ряд кружочков */}
      <div className='steps-circles-mobile'>
        {steps.map((_, i) => (
          <button
            key={`circle-${i}`}
            className={`circle-mobile ${i === activeStep ? 'active' : ''}`}
            onClick={() => handleStepClick(i)}
            role="tab"
            aria-selected={i === activeStep}
            aria-label={`${t('hiw.step')} ${i + 1}`}
          >
            <svg
              width={CONSTANTS.CIRCLE_SIZE}
              height={CONSTANTS.CIRCLE_SIZE}
              aria-hidden="true"
            >
              <circle
                cx={CONSTANTS.CIRCLE_SIZE / 2}
                cy={CONSTANTS.CIRCLE_SIZE / 2}
                r={CONSTANTS.CIRCLE_RADIUS}
                stroke="none"
                strokeWidth={CONSTANTS.STROKE_WIDTH}
                fill={i === activeStep ? "#FFD600" : "#C6C6C6"}
              />
              <text
                x={CONSTANTS.CIRCLE_SIZE / 2}
                y={CONSTANTS.CIRCLE_SIZE / 2}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="14"
                fontWeight="bold"
                fill="white"
              >
                {i + 1}
              </text>
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepsMobile;
