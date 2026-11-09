
import ProgramCard from "../components/ProgramCard";

const programs = [
  {
    id: 1,
    title: "Piano Lessons",
    description:
      "Develop your piano technique, sight-reading, musical expression, and repertoire through lessons suited to your level",
    icon: "P",
    level: "BEGINNER, INTERMEDIATE, AND ADVANCED",
    duration: "45–60 minutes",
  },
  {
    id: 2,
    title: "Music Theory",
    description:
      "Build your understanding of notes, rhythm, scales, chords, and musical structure",
    icon: "T",
    level: "FOUNDATION TO GRADE 5",
    duration: "45–60 minutes",
  },
  {
    id: 3,
    title: "Exam Preparation",
    description:
      "Prepare for practical or theory music examinations through focused practice, structured guidance, and constructive feedback",
    icon: "E",
    level: "EXAM PREPARATION",
    duration: "45–60 minutes",
  },
  {
    id: 4,
    title: "Music Discovery",
    description:
      "Discover the joy of music through rhythm, listening activities, and playful musical experiences for young beginners",
    icon: "M",
    level: "YOUNG BEGINNERS",
    duration: "30–45 minutes",
  },
];

export default function ProgramsPage() {
  return (
    <main className="page-main">
      <section className="page-hero section-container">
        <p className="eyebrow">OUR PROGRAMS</p>
        <h1>Find the lesson that strikes a chord</h1>
        <p className="section-description">
          Whether you are picking up an instrument for the first
          time or working towards a musical goal, we are here
          to support your journey
        </p>
      </section>

      <section className="programs-section section-container">
        <div className="program-grid">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title}
              description={program.description}
              icon={program.icon}
              level={program.level}
              duration={program.duration}
            />
          ))}
        </div>

        <div className="programs-note">
          <span>NOTE</span>
          <div>
            <h2>Not sure where to start?</h2>
            <p>
              Every student&lsquo;s journey is different. Get in touch
              with us to discuss your interests, experience, and
              learning goals so we can help you find a suitable starting point
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
