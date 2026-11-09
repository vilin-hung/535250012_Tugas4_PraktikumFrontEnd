
import Link from "next/link";
import type { Teacher } from "../data/teachers";

type TeacherCardProps = {
  teacher: Teacher;
};

export default function TeacherCard({
  teacher,
}: TeacherCardProps) {
  return (
    <article className="teacher-card">
      <div className="teacher-avatar">
        <span>{teacher.emoji}</span>
      </div>

      <p className="teacher-specialty">{teacher.specialty}</p>
      <h2>{teacher.name}</h2>
      <p className="teacher-role">{teacher.role}</p>
      <p className="teacher-description">{teacher.description}</p>

      <Link
        href={`/team/${teacher.id}`}
        className="text-link"
      >
        Meet this teacher →
      </Link>
    </article>
  );
}
