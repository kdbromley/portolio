import "./RoleCard.css"

function RoleCard({ role }) {
  return (
    <div className="rolecard">
      <div className="rolecard__header">
        <h5 className="rolecard__title">{role.title}</h5>
        <span className="rolecard__employer">{role.employer}</span>
        <span className="rolecard__meta">{role.years} · {role.location}</span>
      </div>
      <ul className="rolecard__responsibilities">
        {role.responsibilities.map((item) => (
          <li key={item} className="rolecard__responsibility">{item}</li>
        ))}
      </ul>
      {role.note && (
        <p className="rolecard__note">{role.note}</p>
      )}
    </div>
  )
}

export default RoleCard

/* 
SoCal Horse Adventures · Trail Guide · Sep 2023 – May 2024 · Palmdale, CA
Led 2–6 hour rides across desert and mountain terrain for guests of all levels. Managed 2–3 day overnight camping experiences with horses in Montaña de Oro State Park. Ran full-day horsemanship clinics. Handled booking management, customer communication, children's lessons, and trailer hauling (4 and 6 horse). Also served as their Shopify developer during this period — (see project card).
Saguaro Lake Ranch Stable · Wrangler · Sep 2024 – Jun 2025 · Mesa, AZ
Prepared 20–45 horses each morning for guest rides. Led trail rides for 1–8 guests across all experience levels, managing safety for rider and horse. Responsible for daily horse care, hoof care, tack maintenance and repair, and basic health assessments.
*/