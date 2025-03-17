import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SubscriptionCard from '../components/SubscriptionCard';
import PaymentForm from '../components/PaymentForm';
import Footer from '../components/Footer';

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<"weekly" | "monthly" | null>(null);
  const [showPayment, setShowPayment] = useState(false);

  const getPlanPrice = () => {
    if (selectedPlan === 'weekly') return 49.99;
    if (selectedPlan === 'monthly') return 149.99;
    return 0;
  };

  const handlePlanSelect = (plan: "weekly" | "monthly") => {
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <section className="py-16 px-4 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-jeeny bg-jeeny/10 rounded-full">
                Flexible Plans
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your Subscription Plan
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Select the plan that best fits your driving schedule and goals.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <SubscriptionCard
                  type="weekly"
                  price={49.99}
                  features={[
                    "Zero commission on rides",
                    "Priority ride matching",
                    "Weekend peak hour priority",
                    "Access to driver community"
                  ]}
                  onSelect={handlePlanSelect}
                  isSelected={selectedPlan === "weekly"}
                />
                
                <SubscriptionCard
                  type="monthly"
                  price={149.99}
                  features={[
                    "All Weekly Plan features",
                    "24/7 Premium support",
                    "Driver perks program access",
                    "Exclusive partner discounts"
                  ]}
                  onSelect={handlePlanSelect}
                  isSelected={selectedPlan === "monthly"}
                />
              </div>
              
              {showPayment && (
                <div className="mt-12 max-w-md mx-auto">
                  <PaymentForm 
                    selectedPlan={selectedPlan} 
                    planPrice={getPlanPrice()} 
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
