
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
      'group relative overflow-hidden rounded-xl p-8 transition-all duration-500 ease-out-expo bg-dark-card border border-white/5 hover:border-dark-accent/20 hover:shadow-dark-accent',
      className
    )}>
      <div className="absolute top-0 left-0 h-1 w-0 bg-dark-accent transition-all duration-500 ease-out-expo group-hover:w-full"></div>
      
      <div className="mb-6 inline-flex items-center justify-center h-14 w-14 rounded-xl bg-dark-accent/10 text-dark-accent transition-all duration-500 ease-out-expo group-hover:bg-dark-accent group-hover:text-white">
        {icon}
      </div>
      
      <h3 className="heading-sm mb-3 text-dark-headers transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-dark-text/80">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
