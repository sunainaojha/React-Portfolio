export default function Contact() {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    lineHeight: '1.6',
    textAlign: 'center',
    color: '#333', 
    backgroundColor: '#ffcc99', 
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#ff6600', 
    textTransform: 'uppercase',
    fontWeight: 'bold',
  };

  const linkStyle = {
    fontSize: '1.2rem',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
    margin: '0 5px', 
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Contact Information</h1>
      <p>
        Please feel free to reach out to me via email:
        <br />
        <a href="mailto:sunainaojha1242@gmail.com" style={linkStyle}>sunainaojha1242@gmail.com</a>
      </p>
      <p>
        You can also find me on GitHub:
        <br />
        <a href="https://github.com/sunainaojha" style={linkStyle}>GitHub</a>
      </p>
      <p>
        I look forward to connecting with you!
      </p>
    </div>
  );
}
