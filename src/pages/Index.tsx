
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import SubscriptionCard from '@/components/SubscriptionCard';
import PaymentForm from '@/components/PaymentForm';
import Footer from '@/components/Footer';
import { setupIntersectionObserver } from '@/lib/animation';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<"weekly" | "monthly" | null>(null);
  
  // Get selected plan price
  const getPlanPrice = () => {
    if (selectedPlan === 'weekly') return 49.99;
    if (selectedPlan === 'monthly') return 149.99;
    return 0;
  };
  
  // Setup intersection observer for animations
  useEffect(() => {
    const observer = setupIntersectionObserver();
    
    return () => {
      // Cleanup observer
      document.querySelectorAll('.fade-in-section').forEach(
        element => observer.unobserve(element)
      );
    };
  }, []);
  
  // Scroll to pricing section when selecting a plan from hero
  const handlePricingClick = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <Benefits />
        
        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-jeeny uppercase bg-jeeny-light rounded-full fade-in-section">
                Subscription Plans
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight fade-in-section">
                Choose the Perfect Plan for You
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-section">
                Select a plan that fits your needs and start enjoying premium benefits immediately.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <SubscriptionCard
                  type="weekly"
                  price={49.99}
                  features={[
                    "5% earnings boost on all rides",
                    "Standard support response time",
                    "Basic driver analytics",
                    "Weekend peak hour priority",
                    "Access to driver community"
                  ]}
                  onSelect={setSelectedPlan}
                  isSelected={selectedPlan === "weekly"}
                />
                
                <SubscriptionCard
                  type="monthly"
                  price={149.99}
                  popular={true}
                  features={[
                    "20% earnings boost on all rides",
                    "Priority 24/7 support",
                    "Advanced driver analytics",
                    "Priority on all peak hours",
                    "Driver perks program access",
                    "Exclusive partner discounts"
                  ]}
                  onSelect={setSelectedPlan}
                  isSelected={selectedPlan === "monthly"}
                />
              </div>
              
              <div id="subscribe" className="fade-in-section">
                <PaymentForm 
                  selectedPlan={selectedPlan} 
                  planPrice={getPlanPrice()} 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-jeeny uppercase bg-jeeny-light rounded-full fade-in-section">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight fade-in-section">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-section">
                Find answers to common questions about our subscription plans.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How do I activate my subscription?",
                  answer: "Your subscription is activated immediately after your payment is processed. You'll receive a confirmation email with details and your account will be upgraded instantly."
                },
                {
                  question: "Can I cancel my subscription anytime?",
                  answer: "Yes, you can cancel your subscription at any time through your account settings. If you cancel, you'll continue to enjoy benefits until the end of your current billing cycle."
                },
                {
                  question: "How do the earnings boosts work?",
                  answer: "Earnings boosts are automatically applied to your rides. Weekly subscribers receive a 5% boost, while monthly subscribers enjoy a 20% boost on all fares."
                },
                {
                  question: "Is there a difference between weekly and monthly plans besides price?",
                  answer: "Yes, the monthly plan includes additional premium features such as higher earnings boosts, priority support, and exclusive partner discounts that aren't available with the weekly plan."
                },
                {
                  question: "How is payment information handled?",
                  answer: "Your payment information is securely processed and stored using industry-standard encryption. We never store your complete credit card information on our servers."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 fade-in-section">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-lg font-semibold">{faq.question}</span>
                      <ChevronDown className="h-5 w-5 text-jeeny transition group-open:rotate-180" />
                    </summary>
                    <p className="text-gray-600 mt-4 group-open:animate-fade-in">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-jeeny uppercase bg-jeeny-light rounded-full fade-in-section">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight fade-in-section">
                What Our Drivers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-section">
                Hear from drivers who have boosted their earnings with our subscription plans.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Morgan",
                  location: "Chicago, IL",
                  testimonial: "The monthly subscription has been a game-changer for me. I'm earning 20% more and the priority support has saved me countless hours of downtime.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                },
                {
                  name: "Sarah Johnson",
                  location: "New York, NY",
                  testimonial: "I was hesitant at first, but after just two weeks, the subscription has more than paid for itself. The earnings boost alone makes it worth every penny.",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                },
                {
                  name: "Michael Chen",
                  location: "San Francisco, CA",
                  testimonial: "The analytics features have helped me optimize my driving hours and routes. I'm working less but earning more. Best decision I've made this year!",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-8 fade-in-section"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
                  <div className="mt-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-jeeny to-jeeny-dark text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight fade-in-section">
              Ready to Boost Your Earnings?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 fade-in-section">
              Join thousands of drivers who have already increased their income with our subscription plans.
            </p>
            <a 
              href="#pricing" 
              onClick={handlePricingClick}
              className="inline-block px-8 py-4 bg-white text-jeeny-dark font-medium rounded-lg hover:shadow-lg transition-all fade-in-section"
            >
              Subscribe Now
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
