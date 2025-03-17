import { Check } from 'lucide-react';

interface SubscriptionCardProps {
  type: "weekly" | "monthly";
  price: number;
  features: string[];
  onSelect: (type: "weekly" | "monthly") => void;
  isSelected: boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  type,
  price,
  features,
  onSelect,
  isSelected
}) => {
  return (
    <div 
      className={`rounded-2xl p-6 bg-white border border-gray-200 transition-all duration-300 hover:shadow-lg ${
        isSelected ? 'ring-2 ring-jeeny shadow-lg' : ''
      }`}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 capitalize">
          {type}
        </h3>
        
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">SAR {price}</span>
            <span className="text-gray-500 ml-1">/{type}</span>
          </div>
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
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            isSelected 
              ? 'bg-jeeny text-white hover:bg-jeeny/90'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {isSelected ? 'Selected' : 'Select Plan'}
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
