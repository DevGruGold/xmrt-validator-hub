import { Shield, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">About XMRT Validators</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are the trusted backbone of the XMRT blockchain, ensuring integrity,
            security, and scalability of the decentralized ecosystem.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Shield,
              title: "Security First",
              description: "We prioritize the safety and integrity of the XMRT network through robust validation protocols."
            },
            {
              icon: Users,
              title: "Community Driven",
              description: "Our network of validators represents a diverse, global community committed to decentralization."
            },
            {
              icon: Globe,
              title: "Global Impact",
              description: "We're building a more accessible and transparent financial future for everyone."
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
              To create a secure, decentralized, and accessible blockchain ecosystem
              that empowers individuals and organizations to participate in the future
              of finance and technology.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Top Validators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "NodeMaster27",
                role: "Lead Validator",
                achievement: "Secured 12,000 blocks this month"
              },
              {
                name: "CryptoGuardians",
                role: "Regional Validator",
                achievement: "Active in 3 regions"
              },
              {
                name: "GlobalChainers",
                role: "Integration Specialist",
                achievement: "Leading cross-chain integrations"
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