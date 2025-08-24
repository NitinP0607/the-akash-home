import React from "react";
import "./Policies.css";

const Policies = () => {
  return (
    <div className="policies-container">
      <div className="header-policy">
        <h1>Our Policies</h1>
        <p>At House of Akash, we prioritize customer satisfaction.</p>
      </div>

      {/* FAQ Section */}
      <div className="policy-sections">
        <section className="policy-section">
        <h2>❓ Frequently Asked Questions</h2>
        <div className="policy-content">
          <p><strong>1. </strong> How can I contact customer support?</p>
          <p><strong>A. </strong> You can reach us anytime via email or our contact page.</p>

          <p><strong>2. </strong> Do you offer international shipping?</p>
          <p><strong>A .</strong>No we currently do not offer international shipping.</p>

          <p><strong>3. </strong> How do I track my order?</p>
          <p><strong>A. </strong> Once your order is shipped, you will receive a tracking ID via email or SMS.</p>

          <p><strong>4. </strong> Can I change my shipping address after placing an order?</p>
          <p><strong>A. </strong> Yes, please contact us within 12 hours of placing the order to update your details.</p>

          <p><strong>5. </strong> What payment methods do you accept?</p>
          <p><strong>A. </strong> We accept all major credit/debit cards, UPI, Net Banking, and Wallet payments.</p>

          <p><strong>6. </strong> Do you provide discounts for bulk purchases?</p>
          <p><strong>A. </strong> Yes, we offer special pricing for bulk and corporate orders. Contact support for details.</p>

          <p><strong>7. </strong> Is my payment information secure?</p>
          <p><strong>A. </strong> Absolutely. We use encrypted payment gateways to ensure your data is protected.</p>
        </div>
      </section>

      {/* Returns Section */}
      <section className="policy-section">
        <h2>↩️ Returns</h2>
        <div className="policy-content">
          <p>
            We offer a <strong>7-day return policy</strong> only when the item is defective or damaged
            ,open box delivery available so you have to approach us within 24 hrs from the date of delivery. <br />
            Note that Items must be unused, in original packaging, and accompanied by a receipt.
          </p>
          <p>
            Refunds will be processed within 5–7 business days after inspection of the returned product.
          </p>
        </div>
      </section>

      {/* Shipping Section */}
      <section className="policy-section">
        <h2>🚚 Shipping</h2>
        <div className="policy-content">
          <p>
            Orders are usually processed within <strong>24–48 hours</strong>.
          </p>
          <p>
            Standard shipping takes 5–7 business days, while express shipping 
            is available at an additional cost.
          </p>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="policy-section">
        <h2>🔒 Privacy Policy</h2>
        <div className="policy-content">
          <p>
            We value your privacy. Your personal information is only used for 
            order processing and will not be shared with third parties without consent.
          </p>
          <p>
            For more details, please review our full privacy statement or 
            contact our support team.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Policies;
