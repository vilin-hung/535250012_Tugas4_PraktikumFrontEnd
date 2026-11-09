
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            vilmuse<span> ♫</span>
          </Link>

          <p>
            Feel the Music, Feel the Fun!
            <br />
            Let your musical journey bloom  ✿
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/team">Our Team</Link>
        </div>

        <div className="footer-contact">
          <h3>Stay in tune ♡</h3>
          <p>Have questions about our lessons?</p>
          <a href="mailto:hello@vilmuse.com">
            hello@vilmuse.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Vilmuse Studio. Made with ♡ and music.</p>
        <p>Keep playing, keep growing</p>
      </div>
    </footer>
  );
}
