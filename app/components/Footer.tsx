export default function Footer() {
  return (
    <footer id="contact" className="vm-footer">

      <div className="vm-footer-main">

        <div className="vm-footer-brand">
          <a href="#home" className="vm-footer-logo">
            vilmuse<span>.</span>
          </a>

          <p>
            Feel the Music, Feel the Fun!
            <br />
            Let your musical journey bloom.
          </p>
        </div>

        <div className="vm-footer-column">
          <h3>Explore</h3>
          <a href="#about">About the studio</a>
          <a href="#programs">Our programs</a>
          <a href="#journey">Our approach</a>
        </div>

        <div className="vm-footer-column">
          <h3>Get in touch</h3>
          <p>Have questions about lessons?</p>
          <a href="mailto:hello@vilmuse.com">
            hello@vilmuse.com
          </a>
        </div>

      </div>

      <div className="vm-footer-bottom">
        <span>
          © 2026 Vilmuse Studio. Made with ♡ and music.
        </span>

        <span>
          Keep playing, keep growing.
        </span>
      </div>

    </footer>
  );
}
