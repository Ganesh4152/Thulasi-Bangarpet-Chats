import React from "react";
import "./WhyChooseUs.css";

const features = [
  {
    id: 1,
    icon: "🥗",
    title: "Fresh Ingredients",
    description: "Prepared daily using fresh vegetables, spices, and quality ingredients.",
  },
  {
    id: 2,
    icon: "🧼",
    title: "Hygienic Kitchen",
    description: "Every dish is prepared in a clean and hygienic environment.",
  },
  {
    id: 3,
    icon: "🚚",
    title: "Fast Delivery",
    description: "Quick and reliable delivery right to your doorstep.",
  },
  {
    id: 4,
    icon: "💰",
    title: "Affordable Prices",
    description: "Enjoy delicious chats at pocket-friendly prices.",
  },
  {
    id: 5,
    icon: "🌶️",
    title: "Authentic Bangarpet Taste",
    description: "Experience the original Bangarpet style chat recipes.",
  },
  {
    id: 6,
    icon: "📱",
    title: "Online Ordering",
    description: "Order your favorite chats anytime from your phone or computer.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Why Choose Us?</h2>

        <div className="row">
          {features.map((feature) => (
            <div className="col-md-6 col-lg-4 mb-4" key={feature.id}>
              <div className="why-card h-100 text-center">
                <div className="why-icon">{feature.icon}</div>

                <h5>{feature.title}</h5>

                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
