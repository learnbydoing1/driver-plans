
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check, BarChart, Shield, Award, Users, Zap, Clock } from 'lucide-react';

type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Benefits = () => {
  const [activeTab, setActiveTab] = useState('earnings');
  
  const benefitCategories = [
    { id: 'earnings', label: 'Increased Earnings' },
    { id: 'support', label: 'Priority Support' },
    { id: 'features', label: 'Premium Features' },
  ];
  
  const benefits: Record<string, Benefit[]> = {
    earnings: [
      {
        id: 'boost',
        title: 'Earnings Boost',
        description: 'Get up to 20% higher earnings on every ride with our premium subscription package.',
        icon: <BarChart className="h-10 w-10 text-jeeny" />,
      },
      {
        id: 'peak',
        title: 'Peak Hour Priority',
        description: 'Subscribers receive priority ride assignments during peak hours, increasing overall earnings potential.',
        icon: <Zap className="h-10 w-10 text-jeeny" />,
      },
      {
        id: 'surge',
        title: 'Surge Multiplier',
        description: 'Enjoy higher multipliers during surge periods compared to non-subscribed drivers.',
        icon: <Award className="h-10 w-10 text-jeeny" />,
      }
    ],
    support: [
      {
        id: 'dedicated',
        title: 'Dedicated Support Line',
        description: 'Access to a premium support line with dedicated agents to resolve issues quickly.',
        icon: <Users className="h-10 w-10 text-jeeny" />,
      },
      {
        id: 'insurance',
        title: 'Enhanced Insurance Coverage',
        description: 'Get additional coverage beyond the standard policy that protects both you and your vehicle.',
        icon: <Shield className="h-10 w-10 text-jeeny" />,
      },
      {
        id: 'response',
        title: 'Rapid Response Team',
        description: 'Our rapid response team ensures your concerns are addressed within minutes, not hours.',
        icon: <Clock className="h-10 w-10 text-jeeny" />,
      }
    ],
    features: [
      {
        id: 'analytics',
        title: 'Advanced Analytics',
        description: 'Access detailed data about your driving patterns, earnings, and opportunities for improvement.',
        icon: <BarChart className="h-10 w-10 text-jeeny" />,
      },
      {
        id: 'routes',
        title: 'Smart Route Planning',
        description: 'Premium routing algorithm that helps you minimize idle time and maximize earnings.',
        icon: <Zap className="h-10 w-10 text-jeeny" />,
      },
      {
        id: 'perks',
        title: 'Driver Perks Program',
        description: 'Exclusive discounts on fuel, vehicle maintenance, and other driver-related expenses.',
        icon: <Award className="h-10 w-10 text-jeeny" />,
      }
    ]
  };
  
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-jeeny uppercase bg-jeeny-light rounded-full fade-in-section">
            Exclusive Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight fade-in-section">
            Why Drivers Choose Our Subscription
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-section">
            Our subscription packages are designed to maximize your earnings and enhance your driving experience.
          </p>
        </div>
        
        {/* Tabs navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4 fade-in-section">
          {benefitCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all border",
                activeTab === category.id
                  ? "bg-jeeny text-white border-jeeny"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits[activeTab].map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="glass-card p-8 rounded-xl fade-in-section"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-6 inline-block p-3 bg-white rounded-lg shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Promotional banner */}
        <div className="mt-16 bg-gradient-to-r from-jeeny to-jeeny-dark rounded-2xl p-8 text-white max-w-4xl mx-auto fade-in-section">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to boost your earnings?</h3>
              <p className="text-white/90">Join thousands of satisfied drivers who've increased their income by 20%.</p>
            </div>
            <a 
              href="#pricing" 
              className="inline-block px-8 py-4 bg-white text-jeeny-dark font-medium rounded-lg hover:shadow-lg transition-all"
            >
              View Subscription Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
