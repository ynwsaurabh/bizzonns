// components/ContactInfo.tsx

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="text-gray-600">
        Email, call, or complete the form to learn how we can help.
      </p>
      <p>
        Email: <br />
        <a
          href="mailto:contact@zurielcare.com"
          className="ml-10 hover:text-blue-500 dark:hover:text-blue-300"
        >
          contact@zurielcare.com
        </a>
        <br />
        <a
          href="mailto:hr@zurielcare.com"
          className="ml-10 hover:text-blue-500 dark:hover:text-blue-300"
        >
          hr@zurielcare.com
        </a>
      </p>
      <p>
        Phone:{" "}
        <a
          href="tel:+9102516633927"
          className="text-gray-800 hover:text-blue-500 dark:hover:text-blue-300"
        >
          +91 0251 663 3927
        </a>
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <h3 className="font-semibold">Customer Support</h3>
          <p className="text-gray-600">
            Our support team is available to address any concerns or queries.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Feedback and Suggestions</h3>
          <p className="text-gray-600">
            We value your feedback and continuously work to improve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
