import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">WELCOME TO VILMUSE STUDIO</p>

        <h1>
          Let your
          <br />
          <span>music bloom</span>
        </h1>

        <p className="hero-description">
          Feel the Music, Feel the Fun!
          <br />
          Discover your musical potential through piano and music theory lessons designed for your own pace
        </p>

        <div className="hero-actions">
          <Link href="/programs" className="button-primary">
            Explore our programs →
          </Link>

          <Link href="/about" className="button-secondary">
            Get to know us
          </Link>
        </div>

        <p className="hero-note">
          It&lsquo;s never too late to start your musical journey
        </p>
      </div>

      <div className="hero-visual">
        <div className="hero-photo">
          <Image
            src="/images/piano.jpg"
            alt="Piano at Vilmuse Studio"
            width={600}
            height={700}
            priority
          />
        </div>
      </div>
    </section>
  );
}
