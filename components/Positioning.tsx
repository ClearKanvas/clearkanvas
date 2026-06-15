const PROOF = [
  "Serving the US, Canada, UK, Europe & Gulf",
  "Senior-led delivery",
  "Built in Pakistan, built for the world",
];

export default function Positioning() {
  return (
    <section className="positioning" aria-label="What sets ClearKanvas apart">
      <div className="wrap pos-inner reveal">
        <p className="pos-quote">
          Most providers rent you seats. We build you capability. ClearKanvas is run by
          senior operators who advise, build, and run the functions other firms only
          consult on.
        </p>
        <div className="pos-proof" data-stagger>
          {PROOF.map((p) => (
            <span className="pos-point" key={p}>
              <span className="pos-dot" aria-hidden="true"></span>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
