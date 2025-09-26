import Section from './Section.jsx';
import { events } from '../data/events.js';

const Events = () => (
  <Section id="events" title="Events" theme="primary">
    <div className="timeline">
      {events.map((event) => (
        <article key={event.title} className="timeline__item">
          <div className="timeline__marker" aria-hidden="true" />
          <div className="timeline__content">
            <h3>{event.title}</h3>
            <p className="timeline__meta">
              <span>{event.date}</span> · <span>{event.location}</span>
            </p>
            <p>{event.description}</p>
            <a className="button button--ghost" href="#">
              {event.cta}
            </a>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export default Events;
