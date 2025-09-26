import Section from './Section.jsx';
import { faqs, resourcesLinks } from '../data/resources.js';

const Resources = () => (
  <Section id="resources" title="Resources" theme="contrast">
    <div className="resources">
      <div className="resources__faqs">
        <h3>Q &amp; A</h3>
        <ul>
          {faqs.map((faq) => (
            <li key={faq.question}>
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="resources__links">
        <h3>Quick Links</h3>
        <ul>
          {resourcesLinks.map((resource) => (
            <li key={resource.label}>
              <a href={resource.href}>{resource.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default Resources;
