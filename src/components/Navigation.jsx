const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Events', href: '#events' },
  { label: 'Executive Team', href: '#team' },
  { label: 'Resources', href: '#resources' }
];

const Navigation = () => (
  <header className="navigation">
    <div className="navigation__inner">
      <a className="navigation__brand" href="#top">
        <img src="/club-logo.svg" alt="SFU Open Source Development Club logo" />
        <span>SFU Open Source Development Club</span>
      </a>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Navigation;
