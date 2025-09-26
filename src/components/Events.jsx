import { useState } from 'react';
import Section from './Section.jsx';
import { events } from '../data/events.js';

const COLLAPSED_COUNT = 3;

const Events = () => {
  const [expanded, setExpanded] = useState(false);
  const hasOverflow = events.length > COLLAPSED_COUNT;

  const visibleEvents = !hasOverflow || expanded ? events : events.slice(0, COLLAPSED_COUNT);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <Section id="events" title="Events" theme="primary">
      <div className="timeline" id="events-timeline">
        {visibleEvents.map((event) => (
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

      {hasOverflow && (
        <div className="timeline__toggle">
          <button
            type="button"
            className="button button--ghost timeline__toggle-button"
            onClick={toggleExpanded}
            aria-expanded={expanded}
            aria-controls="events-timeline"
          >
            {expanded ? 'Show fewer events' : 'Show all events'}
          </button>
        </div>
      )}
    </Section>
  );
};

export default Events;
