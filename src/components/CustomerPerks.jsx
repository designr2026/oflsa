import React from 'react';

const CustomerPerks = () => {
  const perks = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Financial Records",
      items: [
        "View the invoices issued",
        "Reconcile the SOA",
        "Match the payment"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Track your shipment",
      items: [
        "Manage Running Shipments",
        "Cargo Status",
        "Upload Documents"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Get Notified",
      items: [
        "On Prior Cargo Delivery",
        "On each milestone in transit",
        "On the financial settlements"
      ]
    }
  ];

  return (
    <section className="bg-white">
      {/* Section Title */}
      <div className="bg-blue-900 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white">OUR CUSTOMER PERKS</h2>
        </div>
      </div>
      
      {/* Perks Content */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{perk.title}</h3>
                <ul className="text-gray-600 space-y-2">
                  {perk.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerPerks;
