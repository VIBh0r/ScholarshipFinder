import { useEffect, useState } from "react";
import ScholarshipCard from "../../components/ScholarshipCard/ScholarshipCard";
import "./Home.css";

const Home = () => {
  const [featuredScholarships, setFeaturedScholarships] = useState([]);

  useEffect(() => {
    // Mock API call - replace with real API in production
    const mockScholarships = [
      {
        id: 1,
        title: "National Merit Scholarship",
        provider: "National Merit Foundation",
        amount: 2500,
        deadline: "2023-12-31",
        eligibility: "High school seniors with 3.5+ GPA"
      },
      // Add more scholarships...
    ];
    setFeaturedScholarships(mockScholarships);
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Find the Perfect Scholarship for You</h1>
        <p>Thousands of scholarships available for students of all backgrounds</p>
      </section>

      <section className="featured-scholarships">
        <h2>Featured Scholarships</h2>
        <div className="scholarships-grid">
          {featuredScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;