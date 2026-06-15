import Link from "next/link";
import Arrow from "./Arrow";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "We learn your business, your goals, and where the friction is.",
  },
  {
    num: "02",
    title: "Design",
    desc: "We shape the right model, scope, and team, and agree how success is measured.",
  },
  {
    num: "03",
    title: "Build",
    desc: "We recruit, set up, and embed into your tools and ways of working.",
  },
  {
    num: "04",
    title: "Operate & optimize",
    desc: "We run the function on a steady cadence, report openly, and keep improving it.",
  },
];

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="wrap">
        <div className="head center reveal">
          <span className="eyebrow on-navy">How we work</span>
          <h2>Simple to start. Built to scale.</h2>
          <p>
            Discover. Design. Build. Operate and optimize. A clear path from first call to a
            function running quietly in the background.
          </p>
        </div>
        <div className="proc-grid" data-stagger>
          <div className="proc-line"></div>
          {STEPS.map((step) => (
            <div className="proc-step" key={step.num}>
              <div className="proc-dot">
                <span>{step.num}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="proc-cta reveal">
          <Link className="btn btn-ghost btn-on-navy" href="/how-we-work/process">
            See our process <Arrow size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
