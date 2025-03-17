import { useState } from 'react';
import { Wallet, CreditCard, Apple } from 'lucide-react';

interface PaymentFormProps {
  selectedPlan: string;
  planPrice: number;
}

interface CardDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  name: string;
}

const PaymentOption = ({ 
  icon: Icon, 
  title, 
  description, 
  selected, 
  onClick 
}: { 
  icon: any; 
  title: string; 
  description: string;
  selected?: boolean;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-full p-4 rounded-lg border-2 flex items-center gap-4 transition-colors ${
      selected ? 'border-jeeny' : 'border-gray-200 hover:border-jeeny/50'
    }`}
  >
    <div className="h-12 w-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div className="flex-grow text-left">
      <div className="font-medium text-gray-900">{title}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </div>
  </button>
);

const CardDetailsForm = ({ 
  cardDetails, 
  setCardDetails
}: { 
  cardDetails: CardDetails;
  setCardDetails: (details: CardDetails) => void;
}) => (
  <div className="mt-6 space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Name on Card
      </label>
      <input
        type="text"
        value={cardDetails.name}
        onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-jeeny focus:border-jeeny"
        placeholder="John Doe"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Card Number
      </label>
      <input
        type="text"
        value={cardDetails.cardNumber}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, '').slice(0, 16);
          const formatted = value.replace(/(\d{4})/g, '$1 ').trim();
          setCardDetails({ ...cardDetails, cardNumber: formatted });
        }}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-jeeny focus:border-jeeny"
        placeholder="1234 5678 9012 3456"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Expiry Date
        </label>
        <input
          type="text"
          value={cardDetails.expiryDate}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 4);
            if (value.length >= 2) {
              const formatted = value.slice(0, 2) + '/' + value.slice(2);
              setCardDetails({ ...cardDetails, expiryDate: formatted });
            } else {
              setCardDetails({ ...cardDetails, expiryDate: value });
            }
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-jeeny focus:border-jeeny"
          placeholder="MM/YY"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          CVV
        </label>
        <input
          type="text"
          value={cardDetails.cvv}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 3);
            setCardDetails({ ...cardDetails, cvv: value });
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-jeeny focus:border-jeeny"
          placeholder="123"
        />
      </div>
    </div>
  </div>
);

const PaymentForm: React.FC<PaymentFormProps> = ({ selectedPlan, planPrice }) => {
  const [selectedPayment, setSelectedPayment] = useState<'wallet' | 'apple' | 'card'>('wallet');
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6">
        Payment Method
      </h2>
      
      <div className="space-y-4 mb-8">
        <PaymentOption
          icon={Wallet}
          title="Jeeny Wallet"
          description="Pay using your wallet balance"
          selected={selectedPayment === 'wallet'}
          onClick={() => setSelectedPayment('wallet')}
        />
        <PaymentOption
          icon={Apple}
          title="Apple Pay"
          description="Pay using Apple Pay"
          selected={selectedPayment === 'apple'}
          onClick={() => setSelectedPayment('apple')}
        />
        <PaymentOption
          icon={CreditCard}
          title="Credit Card"
          description="Pay using your credit card"
          selected={selectedPayment === 'card'}
          onClick={() => setSelectedPayment('card')}
        />
      </div>

      {selectedPayment === 'card' && (
        <CardDetailsForm cardDetails={cardDetails} setCardDetails={setCardDetails} />
      )}

      <div className="mt-8 pt-6 border-t">
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-600">Total</span>
          <span className="text-2xl font-bold">SAR {planPrice}</span>
        </div>

        <button className="w-full py-3 px-4 bg-jeeny text-white font-medium rounded-lg hover:bg-jeeny/90 transition-colors">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
