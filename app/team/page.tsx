import TeacherCard from "../components/TeacherCard";
import { teachers } from "../data/teachers";

export default function TeamPage() {
  return (
    <main className="page-main">
      <section className="team-intro section-container">
        <p className="eyebrow">BEHIND THE MELODIES</p>
        <h1>Meet Your Music Teachers!</h1>
        <p>
          Learning music is a personal journey. Get to know the teachers who will help you find your rhythm, build confidence, and enjoy every little milestone.
        </p>
      </section>

      <section className="team-section section-container">
        <div className="teacher-grid">
          {teachers.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
