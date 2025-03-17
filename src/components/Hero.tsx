import { ArrowRight, Wallet, Percent } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-jeeny bg-jeeny/10 rounded-full">
            Zero Commission
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Keep <span className="text-jeeny">100%</span> of what you earn
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to Jeeny and enjoy zero commission on all your rides. No hidden fees, just a simple subscription that lets you keep everything you earn.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#pricing" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-jeeny hover:bg-jeeny/90 rounded-lg transition-colors group"
            >
              Start Earning More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-jeeny/10 rounded-full flex items-center justify-center">
                <Percent className="h-6 w-6 text-jeeny" />
              </div>
              <span className="ml-2 text-gray-600 font-medium">
                Zero Commission
              </span>
            </div>
            
            <div className="flex items-center">
              <div className="h-12 w-12 bg-jeeny/10 rounded-full flex items-center justify-center">
                <Wallet className="h-6 w-6 text-jeeny" />
              </div>
              <span className="ml-2 text-gray-600 font-medium">
                Keep 100% Earnings
              </span>
            </div>
            
            <div className="flex items-center">
              <div className="h-12 w-12 bg-jeeny/10 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-jeeny" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="ml-2 text-gray-600 font-medium">
                Instant activation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
