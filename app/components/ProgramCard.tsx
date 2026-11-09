
type ProgramCardProps = {
  title: string;
  description: string;
  icon: string;
  level: string;
  duration: string;
};

export default function ProgramCard({
  title,
  description,
  icon,
  level,
  duration,
}: ProgramCardProps) {
  return (
    <article className="program-card">
      <div className="program-card-icon">{icon}</div>

      <p className="program-level">{level}</p>
      <h2>{title}</h2>
      <p className="program-description">{description}</p>

      <div className="program-card-footer">
        <span>◷ {duration}</span>
        <span className="program-heart">♡</span>
      </div>
    </article>
  );
}
