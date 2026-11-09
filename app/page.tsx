
import Link from "next/link";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section className="home-intro section-container">
        <p className="eyebrow">FEEL THE MUSIC, FEEL THE FUN</p>
        <h2>Every note tells a story</h2>

        <p className="section-description">
          At Vilmuse Studio, we believe learning music should be
          a joyful journey. We create a welcoming space where
          students can learn, grow, and express themselves through music
        </p>

        <Link href="/about" className="text-link">
          More about our studio →
        </Link>
      </section>

      <section className="home-programs">
        <div className="section-container">
          <p className="eyebrow">FIND YOUR MELODY</p>
          <h2>There is a place for every musician</h2>

          <p className="section-description">
            From your very first lesson to exploring new musical
            goals, every step is worth celebrating
          </p>

          <div className="home-program-grid">
            <article className="mini-program">
              <h3>Piano Lessons</h3>
              <p>
                Develop your technique, musicality, and confidence
                one note at a time
              </p>
            </article>

            <article className="mini-program">
              <h3>Music Theory</h3>
              <p>
                Understand notes, rhythms, and the ideas behind
                the music you love
              </p>
            </article>

            <article className="mini-program">
              <h3>Exam Preparation</h3>
              <p>
                Work towards your musical goals with structured
                practice and supportive guidance
              </p>
            </article>

            <article className="mini-program">
              <h3>Concerts & Recitals</h3>
              <p>
                Share your progress, build confidence, and enjoy
                the experience of performing
              </p>
            </article>
          </div>

          <Link href="/programs" className="button-primary">
            Discover our programs →
          </Link>
        </div>
      </section>

      <section className="home-quote section-container">
        <p className="eyebrow">YOUR MUSICAL JOURNEY STARTS HERE</p>
        <h2>It&lsquo;s never too late to begin</h2>
        <p>
          Whether you&lsquo;re discovering music for the first time
          or returning to a long-loved passion, there&lsquo;s always
          room to learn, grow, and enjoy the journey
        </p>
      </section>
    </main>
  );
}
