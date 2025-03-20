
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className
}) => {
  return (
    <div className={cn(
      'group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 ease-out-expo bg-white border border-sphinx-black/5 hover:border-sphinx-orange/20 hover:shadow-xl hover:shadow-sphinx-orange/5',
      className
    )}>
      <div className="absolute top-0 left-0 h-1 w-0 bg-sphinx-orange transition-all duration-500 ease-out-expo group-hover:w-full"></div>
      
      <div className="mb-6 inline-flex items-center justify-center h-14 w-14 rounded-xl bg-sphinx-orange/10 text-sphinx-orange transition-all duration-500 ease-out-expo group-hover:bg-sphinx-orange group-hover:text-white">
        {icon}
      </div>
      
      <h3 className="heading-sm mb-3 text-sphinx-black transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-sphinx-black/70">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
