import { Shield, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">About XMRT Validators</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a trusted network of professional validators specializing in the authentication
            and validation of tokenized assets, collectibles, and digital properties.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Shield,
              title: "Professional Standards",
              description: "Our network maintains the highest standards of asset validation and authentication."
            },
            {
              icon: Users,
              title: "Expert Network",
              description: "Connect with certified appraisers, notaries, and authentication specialists."
            },
            {
              icon: Globe,
              title: "Global Reach",
              description: "Access validation services for digital assets worldwide."
            }
          ].map((value, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <value.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-primary text-white rounded-2xl p-8 md:p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg opacity-90">
              To provide secure, professional validation services for tokenized assets while maintaining
              the highest standards of authenticity and trust in the digital age.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Our Expert Validators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "ArtAuth Pro",
                role: "Fine Art Specialist",
                achievement: "Validated over 500 digital art pieces"
              },
              {
                name: "PropTech Validators",
                role: "Real Estate Authentication",
                achievement: "Leading tokenized property validation"
              },
              {
                name: "CollectibleGuard",
                role: "Collectibles Expert",
                achievement: "Specialized in rare digital collectibles"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-24 h-24 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={40} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm text-secondary">{member.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;