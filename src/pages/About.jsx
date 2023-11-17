export default function About() {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    lineHeight: '1.6',
    textAlign: 'justify',
    color: '#333', // Default text color
    backgroundColor: '#ffcc99', // Orange background color
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#ff6600', // Orange color for title
    textAlign: 'center',
    textTransform: 'uppercase',
  };

  const textStyle = {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '15px',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Sunaina Ojha</h1>
      <p style={textStyle}>
        My name is Sunaina Ojha, and I hail from the beautiful country of Nepal. With a background in management, I embarked on a new journey when I relocated to the United States in 2016. Due to personal circumstances, I made the decision to stay at home and focus on raising my daughter. During this time, I enrolled in a coding bootcamp at UNCC to pursue a career in the technology industry.
      </p>
      <p style={textStyle}>
        Driven by my fascination with technology and its potential to enhance lives, I have actively engaged in extensive research, self-study, and online tutorials to broaden my knowledge and skills. Through this journey, I have developed a profound interest in software development, recognizing its capacity to amalgamate problem-solving abilities and my passion for technology.
      </p>
      <p style={textStyle}>
        I am wholeheartedly committed to pursuing a career in software development, as it presents a unique opportunity for me to leverage my extensive management experience, coupled with my technical acumen. I am excited about the boundless possibilities this field offers and eagerly look forward to contributing to the advancement of technology-driven solutions.
      </p>
      
    </div>
  );
}
