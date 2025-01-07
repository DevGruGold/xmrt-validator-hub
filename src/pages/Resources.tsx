import { Book, Calculator, MessageSquare, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">Validator Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed as an XMRT validator. Access documentation,
            tools, and community support.
          </p>
        </div>

        {/* Main Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            {
              icon: Book,
              title: "Documentation",
              description: "Comprehensive guides and technical documentation for validators.",
              link: "#"
            },
            {
              icon: Calculator,
              title: "Staking Calculator",
              description: "Calculate potential rewards and returns for your stake.",
              link: "#"
            },
            {
              icon: MessageSquare,
              title: "Support Forum",
              description: "Connect with other validators and get help from the community.",
              link: "#"
            },
            {
              icon: Download,
              title: "Validator Package",
              description: "Download the tools you need to launch your validator node.",
              link: "#"
            }
          ].map((resource, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <resource.icon size={24} className="text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="text-secondary hover:text-secondary-hover transition-colors inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Getting Started Steps */}
        <div className="bg-gradient-primary text-white rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Download Package",
                description: "Get the validator software and tools"
              },
              {
                step: "2",
                title: "Join Community",
                description: "Connect with other validators"
              },
              {
                step: "3",
                title: "Start Validating",
                description: "Begin securing the network"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="opacity-90">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What are the hardware requirements?",
                answer: "Minimum requirements include 8GB RAM, 4 CPU cores, and 500GB SSD storage."
              },
              {
                question: "How much XMRT do I need to stake?",
                answer: "The minimum stake requirement is 10,000 XMRT tokens."
              },
              {
                question: "What are the rewards?",
                answer: "Validators earn transaction fees and block rewards, typically 8-12% APR."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-left">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
