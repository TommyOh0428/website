const Hero = () => (
  <section id="top" className="hero">
    <div className="hero__content">
      <p className="hero__eyebrow">SFU Open Source Development Club</p>
      <h1>Build, Learn, and Share Open Source at SFU</h1>
      <p>
        We are a student-led community dedicated to exploring open source
        technologies, collaborating on impactful projects, and empowering
        students to become contributors to the global developer ecosystem.
      </p>
      <div className="hero__actions">
        <a className="button button--solid" href="#projects">Explore Projects</a>
        <a className="button button--ghost" href="#events">Join an Event</a>
      </div>
    </div>
    <div className="hero__graphic" aria-hidden="true">
      <div className="logo-orb">
        <div className="logo-orb__inner" />
      </div>
    </div>
  </section>
);

export default Hero;
