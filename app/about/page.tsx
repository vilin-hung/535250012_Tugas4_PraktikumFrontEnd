
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="page-main">
      <section className="page-hero section-container">
        <p className="eyebrow">OUR LITTLE CORNER OF MUSIC ♡</p>
        <h1>A studio where music feels like home.</h1>
        <p className="section-description">
          Vilmuse Studio is a welcoming space for students to
          discover music, build confidence, and enjoy learning
          at their own pace.
        </p>
      </section>

      <section className="about-story section-container">
        <div className="about-illustration">
          <p>Learn · Play · Grow</p>
        </div>

        <div className="about-copy">
          <p className="eyebrow">OUR STORY</p>
          <h2>Small steps can create beautiful melodies.</h2>
          <p>
            Every musical journey begins with curiosity. At Vilmuse Studio, we want students to feel comfortable exploring new skills, asking questions, and learning from every mistake.
          </p>
          <p>
            We combine structured lessons with an encouraging learning environment, helping each student develop both musical skills and a lasting appreciation for music.
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="section-container">
          <p className="eyebrow">WHAT WE BELIEVE IN</p>
          <h2>Learning with heart.</h2>

          <div className="values-grid">
            <article className="value-card">
              <h3>Grow at Your Pace</h3>
              <p>
                Everyone learns differently. We value progress
                over perfection.
              </p>
            </article>

            <article className="value-card">
              <h3>Learn with Joy</h3>
              <p>
                Music education should be meaningful, engaging,
                and enjoyable.
              </p>
            </article>

            <article className="value-card">
              <h3>Build Confidence</h3>
              <p>
                Every lesson is an opportunity to try something
                new and celebrate improvement.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-cta section-container">
        <h2>Ready to begin your musical journey?</h2>
        <p>Let us help you find your own melody.</p>
        <Link href="/programs" className="button-primary">
          Explore our programs →
        </Link>
      </section>
    </main>
  );
}
