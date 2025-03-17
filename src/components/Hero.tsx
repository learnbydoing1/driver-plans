
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-jeeny uppercase bg-jeeny-light rounded-full animate-fade-in">
            For Jeeny Drivers
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-balance animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Subscribe to <span className="text-jeeny">elevate</span> your driving experience
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Unlock premium benefits and maximize your earnings with our weekly and monthly subscription plans.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#pricing" 
              className="button-primary group flex items-center justify-center gap-2"
            >
              View Packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="#benefits" 
              className="button-secondary"
            >
              Learn More
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center">
              <div className="h-12 w-12 bg-green-500/10 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-2 text-gray-600 font-medium">Cancel anytime</span>
            </div>
            
            <div className="flex items-center">
              <div className="h-12 w-12 bg-jeeny/10 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-jeeny" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="ml-2 text-gray-600 font-medium">Instant activation</span>
            </div>
            
            <div className="flex items-center">
              <div className="h-12 w-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="ml-2 text-gray-600 font-medium">Secure payments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
