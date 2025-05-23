import { Link } from "react-router-dom";

const ScholarshipCard = ({ scholarship }) => {
  return (
    <div className="scholarship-card">
      <h3>{scholarship.title}</h3>
      <p>Provider: {scholarship.provider}</p>
      <p>Amount: ${scholarship.amount}</p>
      <p>Deadline: {new Date(scholarship.deadline).toLocaleDateString()}</p>
      <p>Eligibility: {scholarship.eligibility}</p>
      <Link to={`/scholarship/${scholarship.id}`}>View Details</Link>
    </div>
  );
};

export default ScholarshipCard;