import React from 'react';

const Help = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Need Help?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <ul>
              <li className="mb-2">
                <h3 className="font-semibold">How do I reset my password?</h3>
                <p className="text-gray-600">You can reset your password by clicking on the "Forgot Password" link on the login page.</p>
              </li>
              <li className="mb-2">
                <h3 className="font-semibold">How can I contact customer support?</h3>
                <p className="text-gray-600">You can contact our customer support team  by phone at 1234567890</p>
              </li>
              <li className="mb-2">
                <h3 className="font-semibold">Do you offer refunds?</h3>
                <p className="text-gray-600">Yes, we offer refunds within 30 days of purchase. Please refer to our refund policy for more details.</p>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <ul>
              <li className="mb-2">
                <h3 className="font-semibold">How do I reset my password?</h3>
                <p className="text-gray-600">You can reset your password by clicking on the "Forgot Password" link on the login page.</p>
              </li>
              <li className="mb-2">
                <h3 className="font-semibold">How can I contact customer support?</h3>
                <p className="text-gray-600">You can contact our customer support team via email at support@example.com or by phone at 1-800-123-4567.</p>
              </li>
              <li className="mb-2">
                <h3 className="font-semibold">Do you offer refunds?</h3>
                <p className="text-gray-600">Yes, we offer refunds within 30 days of purchase. Please refer to our refund policy for more details.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
