import React, { ReactNode, useState } from "react";
import { FiAlertCircle, FiChevronDown, FiChevronUp } from "react-icons/fi";

interface AccordionProps {
  icon?: ReactNode;
  iconColor?: string;
  title: string;
  titleColor?: string;
  subTitle: string;
  IsOpen?: boolean;
  children?: ReactNode;

}

const AccordionComponent: React.FC<AccordionProps> = ({
  icon = <FiAlertCircle size={20} />, // Default icon
  iconColor = "text-red-500",
  title,
  titleColor = "text-white",
  subTitle,
  children,
  IsOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(IsOpen);

  return (
    <div
      className="bg-background p-4 rounded-lg text-gray-300 "
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-start gap-3 cursor-pointer">
        <span className={iconColor}>{icon}</span>
        <div className="flex-1">
          <h3 className={`font-semibold ${titleColor}`}>{title}</h3>
        </div>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-800 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm bg-light p-2 rounded-xl mt-1">{subTitle}</p>
        {children && <div className="mt-2">{children}</div>}
      </div>
    </div>
  );
};

export default AccordionComponent;
