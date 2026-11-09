
import Link from "next/link";
import { notFound } from "next/navigation";
import { teachers } from "../../data/teachers";

export default async function TeacherDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const teacher = teachers.find((item) => item.id === id);

  if (!teacher) {
    notFound();
  }

  return (
    <main className="teacher-detail section-container">
      <Link href="/team" className="back-link">
        ← Back to our team
      </Link>

      <section className="teacher-detail-content">
        <div className="teacher-detail-initials">
          {teacher.name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </div>

        <div className="teacher-detail-info">
          <p className="eyebrow">MEET OUR TEACHERS</p>
          <h1>{teacher.name}</h1>
          <p className="teacher-detail-role">{teacher.role}</p>
          <p className="teacher-detail-specialty">
            {teacher.specialty}
          </p>
          <p className="teacher-detail-description">
            {teacher.description}
          </p>

          <Link href="/team" className="button-primary">
            Meet the whole team
          </Link>
        </div>
      </section>
    </main>
  );
}
