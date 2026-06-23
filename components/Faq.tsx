import { FAQS } from "@/lib/faq";

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list" data-stagger>
          {FAQS.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary className="faq-q">
                {f.q}
                <span className="faq-mark" aria-hidden="true"></span>
              </summary>
              <div className="faq-a">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
