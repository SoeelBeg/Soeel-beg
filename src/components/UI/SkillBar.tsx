import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    // Animate the progress bar when component mounts
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [percentage]);
  
  // Get color based on percentage
  const getBarColor = () => {
    if (percentage >= 85) {
      return 'from-blue-500 to-blue-600';
    } else if (percentage >= 70) {
      return 'from-teal-500 to-teal-600';
    } else {
      return 'from-purple-500 to-purple-600';
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-800 dark:text-gray-200">{name}</span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${getBarColor()} transition-all duration-1000 ease-out rounded-full`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;