function About() {
  return (
    <section className="section">
      <div className="section-title">
        <h1>About Wanderly</h1>
        <p>Making travel planning simple and enjoyable.</p>
      </div>

      <div className="content-box">
        <h2>Who We Are</h2>

        <p>
          Wanderly is a travel booking application designed to
          help travelers discover destinations and select
          suitable travel packages from one convenient platform.
        </p>

        <p>
          Our goal is to make travel planning easier by providing
          useful destination information and carefully designed
          travel packages.
        </p>

        <h2>Our Services</h2>

        <div className="service-list">
          <div>
            <h3>Domestic Trips</h3>
            <p>Explore beautiful destinations across India.</p>
          </div>

          <div>
            <h3>International Trips</h3>
            <p>Discover exciting destinations around the world.</p>
          </div>

          <div>
            <h3>Customized Travel</h3>
            <p>Choose packages according to your requirements.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;