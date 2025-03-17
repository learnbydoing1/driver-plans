
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type SubscriptionCardProps = {
  type: "weekly" | "monthly";
  price: number;
  popular?: boolean;
  features: string[];
  onSelect: (type: "weekly" | "monthly") => void;
  isSelected: boolean;
};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  type,
  price,
  popular = false,
  features,
  onSelect,
  isSelected
}) => {
  return (
    <div 
      className={cn(
        "rounded-2xl p-1 transition-all duration-300 fade-in-section", 
        popular && "bg-gradient-to-b from-jeeny/20 to-jeeny-dark/20",
        isSelected && "scale-105 shadow-xl"
      )}
    >
      <div 
        className={cn(
          "rounded-xl overflow-hidden", 
          "h-full flex flex-col",
          "bg-white border border-gray-200"
        )}
      >
        {popular && (
          <div className="bg-jeeny-dark py-1.5 text-white text-xs font-medium text-center">
            MOST POPULAR
          </div>
        )}
        
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 capitalize">
            {type} Plan
          </h3>
          
          <div className="mb-6">
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-gray-500 ml-1">/{type.toLowerCase()}</span>
          </div>
          
          <ul className="space-y-3 mb-8 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-jeeny shrink-0 mr-2" />
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={() => onSelect(type)}
            className={cn(
              "w-full py-3 rounded-lg font-medium transition-all",
              isSelected 
                ? "bg-jeeny text-white hover:bg-jeeny-dark"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            )}
          >
            {isSelected ? "Selected" : "Select Plan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
