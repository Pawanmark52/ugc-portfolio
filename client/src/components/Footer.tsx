export function Footer({ name }: { name: string }) {
  return (
    <footer>
      <div className="wrap">
        <div className="giant">{name.toLowerCase()}</div>
        <div className="foot-row">
          <span>© {new Date().getFullYear()} {name}. All rights reserved.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
