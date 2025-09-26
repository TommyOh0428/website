import Hero from './components/Hero.jsx';
import Navigation from './components/Navigation.jsx';
import Section from './components/Section.jsx';
import Projects from './components/Projects.jsx';
import Events from './components/Events.jsx';
import Team from './components/Team.jsx';
import Resources from './components/Resources.jsx';
import Footer from './components/Footer.jsx';
import { aboutContent } from './data/about.js';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <Section id="about" title="About Us" theme="primary">
          {aboutContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Section>
        <Projects />
        <Events />
        <Team />
        <Resources />
      </main>
      <Footer />
    </div>
  );
};

export default App;
