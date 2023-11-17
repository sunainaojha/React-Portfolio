
export default function Home() {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1000px', // Adjust the maximum width of the container
    margin: '0 auto',
    padding: '20px',
    lineHeight: '1.6',
    textAlign: 'center',
    color: '#333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items to the top
    height: '300vh',
    backgroundColor: 'lightblue'
  
    

  };

  const imageContainer = {
    flex: '1', // Make the image container take up one-third of the available space
    marginRight: '300px', // Add space between image and content
   
  };

  const contentContainer = {
    flex: '2', // Make the content container take up two-thirds of the available space
    
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px', // Adjust content width



  };

  const imageStyle = {
    width: '200%', // Make the image fill its container
    maxWidth: '700px', // Adjust image width
    //borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '100%',
    marginBottom: '50px',
  };



  return (
    <div style={containerStyle}>
      <div style={imageContainer}>
        <img
          src="https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/346629401_633951185250827_4927155995561112756_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0AJVJj0BwTMAX_tuJKS&_nc_ht=scontent-iad3-1.xx&oh=00_AfA76fF7BGSWlX97F_OkQJ-tC9VDDXSuOGCkkp8gPJsdEA&oe=655AE395" // Replace with your image URL
          alt="Sunaina Ojha"
          style={imageStyle}
        />
      </div>


      <div style={contentContainer}>


        <h1 className="title" style={{ fontSize: '2rem', color: 'orange', borderTop: '2px solid orange' }}>Sunaina Ojha</h1>
        <p style={{ fontSize: '2rem', marginBottom: '10px', fontStyle: 'inherit' }}>
          I'm a passionate full-stack developer. My goal is to craft efficient and innovative software solutions and contribute meaningfully to the tech industry.
        </p>
        <p style={{ fontSize: '2rem', fontStyle: 'italic' }}>
          With a dedication to problem-solving and a drive to create impactful solutions, I aim to push the boundaries of technology and make a difference in the digital world.
        </p>
      </div>
    </div>
  );
}

