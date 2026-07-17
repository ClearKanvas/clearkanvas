"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Arrow from "./Arrow";
import FlowSteps from "./FlowSteps";
import ApplicationForm from "./ApplicationForm";
import { orbField } from "@/lib/orbField";
import {
  CAREER_VALUES,
  HIRING_STEPS,
  HIRING_PROMISE,
  TALENT_NETWORK_OPTION,
  type CareerValue,
} from "@/lib/careers";
import { ACTIVE_ROLES } from "@/lib/roles";

const ICONS: Record<CareerValue["icon"], ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3.5" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.3A4 4 0 0 1 16 11" />
    </>
  ),
  spark: (
    <>
      <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
};

const CAREERS_ORBS = [
  { bx: 0.18, by: 0.28, r: 400, ax: 76, ay: 50, sx: 0.12, sy: 0.1, ph: 0.5, c: "255,106,43", a: 0.16 },
  { bx: 0.85, by: 0.22, r: 340, ax: 62, ay: 52, sx: 0.11, sy: 0.14, ph: 2.1, c: "15,30,61", a: 0.18 },
  { bx: 0.76, by: 0.8, r: 350, ax: 66, ay: 56, sx: 0.1, sy: 0.12, ph: 3.5, c: "255,106,43", a: 0.1 },
  { bx: 0.26, by: 0.82, r: 300, ax: 72, ay: 46, sx: 0.13, sy: 0.09, ph: 4.6, c: "15,30,61", a: 0.12 },
];

export default function CareersMain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [formRole, setFormRole] = useState<string>(TALENT_NETWORK_OPTION);

  useEffect(() => {
    return orbField(canvasRef.current, CAREERS_ORBS, "source-over");
  }, []);

  const roleOptions = [...ACTIVE_ROLES.map((r) => r.title), TALENT_NETWORK_OPTION];
  const openForm = (role: string) => {
    setFormRole(role);
    setFormOpen(true);
  };

  return (
    <>
      {/* SECTION 1 , HERO */}
      <section className="svc-hero">
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="hero-aurora"></div>
          <canvas className="orb-canvas" ref={canvasRef}></canvas>
        </div>
        <div className="wrap svc-hero-inner">
          <span className="eyebrow reveal">Careers</span>
          <h1 className="reveal">We build careers the way we build teams. Deliberately.</h1>
          <p className="svc-hero-tag reveal">
            ClearKanvas helps global companies build teams in Pakistan. Working here means global
            clients, senior mentors, and real ownership from day one.
          </p>
          <div className="hero-cta reveal">
            <a className="btn btn-primary" href="#open-roles">
              View Open Roles <Arrow size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 , WHY WORK HERE */}
      <section className="section">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Why work here</span>
            <h2>What you actually get.</h2>
          </div>
          <div className="cr-values" data-stagger>
            {CAREER_VALUES.map((v) => (
              <div className="cr-value" key={v.title}>
                <span className="cr-value-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[v.icon]}
                  </svg>
                </span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 , OPEN ROLES */}
      <section className="section engage" id="open-roles">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Open roles</span>
            <h2>Open roles.</h2>
          </div>
          {ACTIVE_ROLES.length > 0 ? (
            <div className="roles-list" data-stagger>
              {ACTIVE_ROLES.map((r) => (
                <div className="role-card" key={r.id}>
                  <div className="role-info">
                    <h3>{r.title}</h3>
                    <p className="role-meta">
                      {r.location} <span aria-hidden="true">&middot;</span> {r.type}
                    </p>
                    {r.description && <p className="role-desc">{r.description}</p>}
                  </div>
                  <button className="btn btn-primary btn-sm role-apply" onClick={() => openForm(r.title)}>
                    Apply <Arrow />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="roles-empty reveal">
              <p>
                Nothing open right now. But we&apos;re always meeting good people. Join our talent
                network below and you&apos;ll hear from us first.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4 , HOW WE HIRE */}
      <section className="section">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">How we hire</span>
            <h2>Four steps. No black hole.</h2>
          </div>
          <FlowSteps steps={HIRING_STEPS} />
          <p className="hire-promise reveal">{HIRING_PROMISE}</p>
        </div>
      </section>

      {/* SECTION 5 , TALENT NETWORK */}
      <section className="section talent-net">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Talent network</span>
            <h2>No role that fits? Stay close.</h2>
            <p>
              Leave your details and we&apos;ll reach out when the right role opens, here or with
              one of the companies we hire for.
            </p>
          </div>
          <div className="reveal">
            <button className="btn btn-ghost" onClick={() => openForm(TALENT_NETWORK_OPTION)}>
              Join the Talent Network <Arrow size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6 , CLOSING CTA */}
      <section className="section cta-band cta-band-static">
        <div className="wrap cta-inner reveal">
          <h2>Good teams start with one good decision.</h2>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#open-roles">
              View Open Roles <Arrow size={15} />
            </a>
          </div>
        </div>
      </section>

      <ApplicationForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        role={formRole}
        roleOptions={roleOptions}
      />
    </>
  );
}
