import React from 'react';

type Props = {
  value: number;
  onChange: (hours: number) => void;
};

const HoursSlider: React.FC<Props> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value));
  };

  const hours = Array.from({ length: 8 }, (_, i) => i + 1);
  const progress = ((value - 1) / 7) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-medium">Hours Per Day</h2>
        <span className="text-white text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          {value}h
        </span>
      </div>

      <div className="relative">
        {/* Barra de progreso debajo */}
        <div
          className="absolute top-1 left-0 h-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>

        {/* Slider */}
        <input
          type="range"
          min="1"
          max="8"
          value={value}
          onChange={handleChange}
          className="
            w-full h-8 appearance-none bg-transparent relative z-10 cursor-pointer
            focus:outline-none

            [&::-webkit-slider-runnable-track]:bg-gray-700
            [&::-webkit-slider-runnable-track]:h-2
            [&::-webkit-slider-runnable-track]:rounded-lg

            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:shadow-lg
            [&::-webkit-slider-thumb]:shadow-purple-500/20
            [&::-webkit-slider-thumb]:mt-[-6px]
            [&::-webkit-slider-thumb]:border-4
            [&::-webkit-slider-thumb]:border-transparent
            [&::-webkit-slider-thumb]:hover:border-purple-500
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:duration-150
            [&::-webkit-slider-thumb]:touch-action-none
          "
        />

        {/* Etiquetas de horas */}
        <div className="flex justify-between mt-2">
          {hours.map((hour) => (
            <div
              key={hour}
              className={`w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium transition-all duration-300 ${
                value >= hour
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                  : 'bg-gray-700 text-gray-400'
              }`}
            >
              {hour}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoursSlider;