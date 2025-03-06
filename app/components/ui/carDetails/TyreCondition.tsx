interface TyreConditionProps {
    percentage: number;
  }
  
  const TyreCondition: React.FC<TyreConditionProps> = ({ percentage }) => {
    const getColor = () => {
      if (percentage >= 75) return "text-green-500 stroke-green-500";
      if (percentage >= 50) return "text-yellow-500 stroke-yellow-500";
      if (percentage >= 25) return "text-orange-500 stroke-orange-500";
      return "text-red-500 stroke-red-500";
    };
  
    return (
      <div className="flex flex-col items-center space-y-2">
        <div className="relative w-14 h-14">
          {/* Background Circle */}
          <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
            <circle
              className="stroke-gray-300"
              cx="50"
              cy="50"
              r="40"
              strokeWidth="4"
              fill="none"
            />
            {/* Progress Circle */}
            <circle
              className={`transition-all duration-500 ${getColor()}`}
              cx="50"
              cy="50"
              r="40"
              strokeWidth="4"
              fill="none"
              strokeDasharray="251.2"
              strokeDashoffset={`${251.2 - (percentage / 100) * 251.2}`}
              strokeLinecap="round"
            />
          </svg>
          {/* Percentage Text */}
          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
            {percentage}%
          </span>
        </div>

      </div>
    );
  };
  
  export default TyreCondition;
  