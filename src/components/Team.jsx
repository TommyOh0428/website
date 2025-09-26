import Section from './Section.jsx';
import { team } from '../data/team.js';

const Team = () => (
  <Section id="team" title="Executive Team" theme="default">
    <div className="card-grid card-grid--team">
      {team.map((member) => (
        <article key={member.name} className="card card--profile">
          <div className="avatar" aria-hidden="true">
            <span>{member.name.split(' ').map((part) => part[0]).join('')}</span>
          </div>
          <div className="card__header">
            <h3>{member.name}</h3>
            <p className="card__subtitle">{member.role}</p>
          </div>
          <p>{member.bio}</p>
        </article>
      ))}
    </div>
  </Section>
);

export default Team;
