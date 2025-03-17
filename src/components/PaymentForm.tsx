
import { useState } from 'react';
import { Check, CreditCard, Apple } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaymentFormProps {
  selectedPlan: "weekly" | "monthly" | null;
  planPrice: number;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ selectedPlan, planPrice }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  // Mock form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPlan) return;
    
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      
      // Reset after 3 seconds
      setTimeout(() => setIsComplete(false), 3000);
    }, 1500);
  };
  
  if (!selectedPlan) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-xl">
        <p className="text-gray-500">Please select a subscription plan to continue</p>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden fade-in-section">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Complete Your Subscription</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method
          </label>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setPaymentMethod('card')}
              className={cn(
                "flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all",
                paymentMethod === 'card' 
                  ? "border-jeeny bg-jeeny/5 text-jeeny"
                  : "border-gray-200 hover:border-gray-300"
              )}
            >
              <CreditCard className="h-5 w-5" />
              <span>Credit Card</span>
            </button>
            
            <button
              type="button"
              onClick={() => setPaymentMethod('apple')}
              className={cn(
                "flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all",
                paymentMethod === 'apple' 
                  ? "border-jeeny bg-jeeny/5 text-jeeny"
                  : "border-gray-200 hover:border-gray-300"
              )}
            >
              <Apple className="h-5 w-5" />
              <span>Apple Pay</span>
            </button>
          </div>
        </div>
        
        {paymentMethod === 'card' ? (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <input 
                type="text" 
                placeholder="4242 4242 4242 4242"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-jeeny focus:ring-2 focus:ring-jeeny/20 outline-none transition-all"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiration Date
                </label>
                <input 
                  type="text" 
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-jeeny focus:ring-2 focus:ring-jeeny/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Security Code
                </label>
                <input 
                  type="text" 
                  placeholder="CVC"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-jeeny focus:ring-2 focus:ring-jeeny/20 outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name on Card
              </label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-jeeny focus:ring-2 focus:ring-jeeny/20 outline-none transition-all"
              />
            </div>
          </>
        ) : (
          <div className="my-8 flex justify-center">
            <div 
              className="apple-pay-button w-full max-w-xs"
              role="button"
              aria-label="Apple Pay"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(e as any);
              }}
            ></div>
          </div>
        )}
        
        <div className="border-t border-gray-200 pt-4 mt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Subscription Plan ({selectedPlan})</span>
            <span>${planPrice}</span>
          </div>
          <div className="flex justify-between items-center mb-4 font-medium">
            <span>Total</span>
            <span>${planPrice}</span>
          </div>
        </div>
        
        {paymentMethod === 'card' && (
          <button
            type="submit"
            disabled={isProcessing || isComplete}
            className={cn(
              "w-full mt-6 py-4 rounded-lg font-medium text-white transition-all flex items-center justify-center",
              isComplete 
                ? "bg-green-500" 
                : isProcessing 
                ? "bg-jeeny opacity-80 cursor-not-allowed" 
                : "bg-jeeny hover:bg-jeeny-dark"
            )}
          >
            {isComplete ? (
              <>
                <Check className="h-5 w-5 mr-2" />
                Payment Successful
              </>
            ) : isProcessing ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </div>
            ) : (
              `Pay $${planPrice} Now`
            )}
          </button>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;
