
import HeroSection from "./components/HeroSection";

const programs = [
  {
    number: "01",
    title: "Piano Lessons",
    description:
      "Build technique, musicality, and confidence through lessons shaped around your pace and goals.",
    detail: "Beginner to advanced",
  },
  {
    number: "02",
    title: "Music Theory",
    description:
      "Understand the language behind music, from reading notes to rhythm, harmony, and expression.",
    detail: "Learn the why behind the music",
  },
  {
    number: "03",
    title: "Exam Preparation",
    description:
      "Prepare for music examinations with structured guidance, thoughtful feedback, and steady progress.",
    detail: "A supportive learning journey",
  },
  {
    number: "04",
    title: "Concerts & Recitals",
    description:
      "Celebrate every milestone, share what you have learned, and grow more confident on stage.",
    detail: "Make every performance count",
  },
];

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* ABOUT SECTION */}
      <section id="about" className="vm-about vm-section">
        <div className="vm-section-inner vm-about-grid">

          <div className="vm-about-mark">
            <span>♪</span>
            <small>FEEL THE MUSIC</small>
            <strong>Feel the fun.</strong>
          </div>

          <div className="vm-about-copy">
            <p className="vm-eyebrow">
              A LITTLE ABOUT US
            </p>

            <h2>
              Every note has a story.
              <br/>
              Let yours begin here.
            </h2>

            <p>
              At Vilmuse Studio, we believe learning music
              should be a joyful journey. We create a
              welcoming space where students can explore
              their creativity, build confidence, and grow
              through music.
            </p>

            <p>
              Whether you are taking your very first lesson
              or returning to a long-loved passion, there is
              always room for a new beginning.
            </p>

            <a className="vm-text-link" href="#programs">
              Find your learning path →
            </a>
          </div>

        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="vm-programs vm-section">
        <div className="vm-section-inner">

          <div className="vm-section-heading">
            <p className="vm-eyebrow">
              FIND YOUR MELODY
            </p>

            <h2>
              There is a place for every musician.
            </h2>

            <p>
              Start with what inspires you. We will help
              you take it one note at a time.
            </p>
          </div>

          <div className="vm-program-grid">
            {programs.map((program) => (
              <article
                className="vm-program-card"
                key={program.number}
              >
                <span className="vm-program-number">
                  {program.number}
                </span>

                <div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </div>

                <span className="vm-program-detail">
                  {program.detail}
                </span>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CLOSING SECTION */}
      <section id="journey" className="vm-journey vm-section">
        <div className="vm-section-inner vm-journey-inner">

          <p className="vm-eyebrow">
            YOUR MUSICAL JOURNEY STARTS HERE
          </p>

          <h2>It is never too late to begin.</h2>

          <p>
            Big performances begin with small steps.
            Come as you are, discover what you love,
            and let your musical journey bloom.
          </p>

          <a
            className="vm-button vm-button-dark"
            href="#contact"
          >
            Let&apos;s make music together →
          </a>

        </div>
      </section>
    </main>
  );
}
