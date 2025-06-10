
import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "How long has Travella Egypt been in business?",
          answer: "Travella Egypt has been serving clients for over 10 years, since 2010. We've built our reputation on trust, professionalism, and exceptional customer service."
        },
        {
          question: "What areas do you cover in Egypt?",
          answer: "We cover major cities and regions across Egypt including Cairo, Giza, Alexandria, New Capital, Hurghada, Sharm El Sheikh, and many other locations. Our agents specialize in different regions to provide you with local expertise."
        },
        {
          question: "Do you work with both buyers and sellers?",
          answer: "Yes, we provide comprehensive real estate services for both buyers and sellers. Whether you're looking to purchase your dream home or sell your current property, our expert agents are here to help."
        }
      ]
    },
    {
      category: "Buying Process",
      questions: [
        {
          question: "How do I start the home buying process?",
          answer: "Start by contacting one of our agents who will understand your needs, budget, and preferences. We'll then schedule property viewings that match your criteria and guide you through every step of the process."
        },
        {
          question: "What documents do I need to buy a property in Egypt?",
          answer: "You'll need your Egyptian national ID (or passport for foreigners), proof of income, bank statements, and financing pre-approval if applicable. Our agents will provide you with a complete checklist."
        },
        {
          question: "Can foreigners buy property in Egypt?",
          answer: "Yes, foreigners can buy property in Egypt with certain restrictions. Our agents are well-versed in the legal requirements and can guide you through the process to ensure compliance with Egyptian law."
        },
        {
          question: "How long does the buying process take?",
          answer: "The timeline varies depending on various factors, but typically ranges from 30-60 days from offer acceptance to closing. This includes property inspections, financing, and legal procedures."
        }
      ]
    },
    {
      category: "Financing",
      questions: [
        {
          question: "Do you help with mortgage financing?",
          answer: "Yes, we work with leading banks and financial institutions in Egypt to help you secure the best mortgage rates and terms. Our team can connect you with trusted mortgage brokers."
        },
        {
          question: "What's the typical down payment required?",
          answer: "Down payments typically range from 20-30% of the property value, depending on the lender and your financial profile. Some developers offer flexible payment plans with lower initial payments."
        },
        {
          question: "Can I get pre-approved for a mortgage?",
          answer: "Absolutely! We recommend getting pre-approved before starting your property search. This gives you a clear budget and makes you a more attractive buyer to sellers."
        }
      ]
    },
    {
      category: "Services",
      questions: [
        {
          question: "Do you charge buyers any fees?",
          answer: "Our buyer representation services are typically free to buyers, as we're compensated by the seller's commission. We'll always be transparent about any costs upfront."
        },
        {
          question: "Do you provide property management services?",
          answer: "Yes, we offer comprehensive property management services for rental properties, including tenant screening, rent collection, maintenance coordination, and regular property inspections."
        },
        {
          question: "Can you help with property inspections?",
          answer: "Absolutely! We coordinate professional property inspections with certified inspectors to ensure you're making an informed decision about the property's condition."
        },
        {
          question: "Do you offer investment consultation?",
          answer: "Yes, our investment specialists can help you identify profitable real estate opportunities, analyze market trends, and develop investment strategies tailored to your goals."
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Find answers to common questions about our services and the real estate process in Egypt
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${categoryIndex}-${index}`}
                    className="bg-white rounded-lg shadow-sm border"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our friendly team is here to help you with any questions about real estate in Egypt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+201234567890"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Call Us Now: +20 123 456 7890
            </a>
            <a 
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
