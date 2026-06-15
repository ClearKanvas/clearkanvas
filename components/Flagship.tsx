import Link from "next/link";
import Arrow from "./Arrow";

const FLOW = [
  { k: "Build", d: "We recruit, set up, and embed a team to your standards." },
  { k: "Operate", d: "We run the day to day: HR, infrastructure, compliance, management." },
  { k: "Transfer", d: "When you are ready, you take full ownership of the team." },
];

export default function Flagship() {
  return (
    <section className="section flagship" id="flagship">
      <div className="wrap flagship-grid">
        <div className="flagship-copy reveal">
          <span className="eyebrow">Flagship model</span>
          <h2>Build your own offshore team. Without the entity, the office, or the risk.</h2>
          <p>
            Our flagship model lets you stand up a dedicated team in Pakistan that works to
            your standards, in your tools, on your hours. We handle recruitment,
            infrastructure, HR, and compliance. You direct the work. When you are ready, our
            Build-Operate-Transfer path hands you full ownership.
          </p>
          <Link className="btn btn-primary" href="/services/global-capability-centers">
            See how Global Capability Centers work <Arrow size={15} />
          </Link>
        </div>
        <div className="flagship-flow reveal" aria-hidden="false">
          <span className="flow-label">Build-Operate-Transfer</span>
          <div className="flow-steps" data-stagger>
            {FLOW.map((f, i) => (
              <div className="flow-step" key={f.k}>
                <span className="flow-num">{i + 1}</span>
                <div>
                  <span className="flow-k">{f.k}</span>
                  <span className="flow-d">{f.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
