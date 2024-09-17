import React from 'react';
import Layout from './Layout/Layout';


const FAQ = () => {
  return (
    <Layout>
    <div className="container my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions (FAQs)</h2>
      <div className="accordion" id="faqAccordion">
        {/* Section 1: General */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is LabourHub, and how does it work?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              LabourHub is an online platform connecting laborers and employers. Workers can create profiles showcasing their skills and experiences, while employers can search for and hire qualified professionals. The platform streamlines the hiring process by providing a simple and efficient way to connect laborers with job opportunities.
            </div>
          </div>
        </div>

        {/* Section 2: Registration and Account */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How do I register on LabourHub?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              To register on LabourHub, click on the "Sign Up" button on the homepage. You will be prompted to select whether you are registering as a "User" or a "Labour." Fill in the required details, such as your name, email, and password, and click "Submit" to create your account.
            </div>
          </div>
        </div>

        {/* Section 3: Services and Features */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What services does LabourHub offer?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              LabourHub offers a variety of services to both laborers and employers. These services include job posting, profile creation, skill assessments, messaging, and secure payments. Employers can post job requirements, and laborers can apply to jobs matching their skills.
            </div>
          </div>
        </div>

        {/* Section 4: Profile Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              How can I manage my profile on LabourHub?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              You can manage your profile by logging in and navigating to the "Profile" section from the dashboard. Here, you can update your personal information, skills, experience, and preferences. Ensure your profile is complete to attract more job opportunities.
            </div>
          </div>
        </div>

        {/* Section 5: Payments */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              How do I get paid for my services?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Payments are processed securely through the LabourHub platform. After completing a job, the employer will release the payment to your account. You can withdraw your earnings through various methods such as bank transfer, PayPal, or other supported payment gateways.
            </div>
          </div>
        </div>

        {/* Section 6: Support and Assistance */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              How can I contact customer support?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              If you need help or have any questions, you can contact our customer support team by visiting the "Contact Us" page. Fill out the contact form or use the provided email and phone numbers to reach us. We are here to assist you 24/7.
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default FAQ;
