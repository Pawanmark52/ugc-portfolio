export function Footer({ name }: { name: string }) {
  return (
    <footer>
      <div className="wrap">
        <img className="foot-logo" src="/logo-full.png" alt={name} loading="lazy" />
        <div className="foot-row">
          <span>© {new Date().getFullYear()} {name}. All rights reserved.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
