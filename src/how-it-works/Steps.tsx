import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
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

// Константи для покращення читабельності
const CONSTANTS = {
  CHANGE_LINE_HEIGHT: 0.6, // Відсоток висоти вікна для ліні
  CIRCLE_RADIUS: 18,
  CIRCLE_SIZE: 40,
  STROKE_WIDTH: 3,
  LINE_WIDTH: 4,
  LINE_HEIGHT: 80,
} as const;



const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

// Функція throttle для оптимізації продуктивності
const throttle = <T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const Steps: React.FC<StepsProps> = ({onStateChange}) => {
  const {t} = useTranslation();

  // Оборачиваем создание steps в useMemo для оптимизации
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

  const containerRef = useRef<HTMLDivElement>(null);
  const [progressCircles, setProgressCircles] = useState<number[]>(
    Array(steps.length).fill(0)
  );
  const [progressLines, setProgressLines] = useState<number[]>(
    Array(steps.length - 1).fill(0)
  );

  const calculateProgress = useCallback(() => {
    if (!containerRef.current) return;

    const lineY = window.innerHeight * CONSTANTS.CHANGE_LINE_HEIGHT; // Висота лінії відносно вікна
    const container = containerRef.current;

    const newCircles = steps.map((_, i) => {
      const stepEl = container.children[i] as HTMLElement | undefined;
      if (!stepEl) return 0;

      // Ищем конкретный SVG элемент кружочка
      const circleEl = stepEl.querySelector(".circle") as SVGElement | null;
      if (!circleEl) return 0;

      const rect = circleEl.getBoundingClientRect();
      const elementHeight = rect.height;
      return clamp((lineY - rect.top) / elementHeight, 0, 1);
    });

    const newLines = steps.slice(0, -1).map((_, i) => {
      const stepEl = container.children[i] as HTMLElement | undefined;
      if (!stepEl) return 0;

      const lineEl = stepEl.querySelector(".connector") as SVGRectElement | null;
      if (!lineEl) return 0;

      const rect = lineEl.getBoundingClientRect();
      const elementHeight = rect.height;
      return clamp((lineY - rect.top) / elementHeight, 0, 1);
    });

    setProgressCircles(newCircles);
    setProgressLines(newLines);

    // Логіка изменения состояния на основе заполнения палочек
    if (onStateChange) {
      const firstLine = newLines[0] || 0;  // Перша палочка
      const secondLine = newLines[1] || 0; // Друга палочка

      // Проверяем по приоритету (сверху вниз)
      if (secondLine >= 0.7) {
        onStateChange('step3');
      } else if (firstLine >= 0.8) {
        onStateChange('step2');
      } else {
        onStateChange('step1');
      }
    }
  }, [steps, onStateChange]);

  useEffect(() => {
    const throttledHandleScroll = throttle(calculateProgress, 16); // ~60fps

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    calculateProgress(); // Виклик при монтуванні

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [calculateProgress]);

  return (
    <div ref={containerRef} className='steps-container' role="list">
      {steps.map((step, i) => (
        <div key={`step-${i}`} className='step'>
          {/* КРУЖОК */}
          <svg
            width={CONSTANTS.CIRCLE_SIZE}
            height={CONSTANTS.CIRCLE_SIZE}
            className='circle'
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={`grad-circle-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset={`${progressCircles[i] * 100}%`}
                  stopColor="#FFD600"
                />
                <stop
                  offset={`${progressCircles[i] * 100}%`}
                  stopColor="#C6C6C6"
                />
              </linearGradient>
            </defs>
            <circle
              cx={CONSTANTS.CIRCLE_SIZE / 2}
              cy={CONSTANTS.CIRCLE_SIZE / 2}
              r={CONSTANTS.CIRCLE_RADIUS}
              stroke="none"
              strokeWidth={CONSTANTS.STROKE_WIDTH}
              fill={`url(#grad-circle-${i})`}
            />
            {/* Добавляем цифру в центр кружочка */}
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

          {/* ЛИНИЯ */}
          {i < steps.length - 1 && (
            <svg
              width={CONSTANTS.LINE_WIDTH}
              height={CONSTANTS.LINE_HEIGHT}
              className='line'
              aria-hidden="true"
            >
              <defs>
                <linearGradient id={`grad-line-${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset={`${progressLines[i] * 100}%`}
                    stopColor="#FFD600"
                  />
                  <stop
                    offset={`${progressLines[i] * 100}%`}
                    stopColor="transparent"
                  />
                </linearGradient>
              </defs>
              <rect
                className="connector"
                x={0}
                y={0}
                width={CONSTANTS.LINE_WIDTH}
                height={CONSTANTS.LINE_HEIGHT}
                fill={`url(#grad-line-${i})`}
              />
            </svg>
          )}

          {/* ТЕКСТ */}
          <div className='step-text'>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
