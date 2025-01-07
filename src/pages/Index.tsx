import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Professional Asset<br />Validation Network
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeIn">
              Secure validation for tokenized assets, collectibles, and digital properties
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors animate-fadeIn"
            >
              Join Our Network
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose XMRT Validators?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Validation",
                description: "Secure validation services for digital assets, NFTs, and tokenized real-world items."
              },
              {
                title: "Trusted Network",
                description: "Join a network of certified appraisers, notaries, and authentication experts."
              },
              {
                title: "Blockchain Security",
                description: "Leverage blockchain technology to create immutable records of asset validation."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Validating?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Join our network of professional validators and help secure the future of digital assets
          </p>
          <Link
            to="/resources"
            className="inline-flex items-center px-6 py-3 bg-white text-primary hover:bg-gray-100 rounded-lg transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;