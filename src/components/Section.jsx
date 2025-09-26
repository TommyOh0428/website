const Section = ({ id, title, theme = 'default', children }) => (
  <section id={id} className={`section section--${theme}`}>
    <div className="section__inner">
      <div className="section__header">
        <h2>{title}</h2>
      </div>
      <div className="section__body">{children}</div>
    </div>
  </section>
);

export default Section;
