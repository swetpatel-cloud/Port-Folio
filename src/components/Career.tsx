import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B-Tech (CE)</h4>
                <h5>Silver Oak University</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Currently Pursuing B-Tech in Computer Engineering. <br />
              CGPA: 8.80
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSC (Science)</h4>
                <h5>Satyam Vidhyalay High School</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed 11th and 12th grade in the Science stream. <br />
              Percentage: 77.76%
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Coordinator</h4>
                <h5>GDSC Silver Oak University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Participated in the management committee, contributing to planning and organizing events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
