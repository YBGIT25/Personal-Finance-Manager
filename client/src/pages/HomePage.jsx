import React from "react";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="home-container">
        {/* Hero Section */}
        <header className="hero">
          <h1>Welcome to Personal Finance Manager</h1>
          <p>Take control of your expenses and build a secure future.</p>
          <button className="cta-btn">Get Started</button>
        </header>

        {/* Features Section */}
        <section className="features">
          <div className="feature-card">
            <h3>Track Expenses</h3>
            <p>Monitor where your money goes with our expense tracker.</p>
          </div>
          <div className="feature-card">
            <h3>Set Budgets</h3>
            <p>Plan your spending and save more each month.</p>
          </div>
          <div className="feature-card">
            <h3>Generate Reports</h3>
            <p>Get insights with detailed financial reports.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
