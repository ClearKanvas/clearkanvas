"use client";

import { useState } from "react";
import Arrow from "./Arrow";
import ApplicationForm from "./ApplicationForm";
import Slideshow from "./Slideshow";
import { TALENT_NETWORK_OPTION } from "@/lib/careers";
import { ACTIVE_ROLES } from "@/lib/roles";

// Careers hero slideshow: license-clear, people-free symbolic imagery on a
// dark/warm palette (growth, strategy, ideas). Swap by replacing these files
// in public/slides.
const CAREER_SLIDES = [
  "/slides/career-stairs.jpg",
  "/slides/career-chess.jpg",
  "/slides/career-bulb.jpg",
];

export default function CareersMain() {
  const [formOpen, setFormOpen] = useState(false);
  const [formRole, setFormRole] = useState<string>(TALENT_NETWORK_OPTION);

  const openForm = (role: string) => {
    setFormRole(role);
    setFormOpen(true);
  };

  return (
    <>
      {/* HERO , cinematic careers slideshow, one line and two buttons */}
      <section className="svc-hero svc-hero-cine">
        <div className="svc-hero-bg" aria-hidden="true">
          <Slideshow images={CAREER_SLIDES} />
        </div>
        <div className="wrap svc-hero-inner">
          <span className="eyebrow reveal">Careers</span>
          <h1 className="reveal">We build careers the way we build teams. Deliberately.</h1>
          <p className="svc-hero-tag reveal">
            Global clients, senior mentors, and real ownership from day one.
          </p>
          <div className="hero-cta reveal">
            <a className="btn btn-primary" href="#open-roles">
              Open Roles <Arrow size={15} />
            </a>
            <button className="btn btn-ghost" onClick={() => openForm(TALENT_NETWORK_OPTION)}>
              Apply now <Arrow size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
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
                Nothing open right now. But we&apos;re always meeting good people. Send your CV with
                Apply now and we&apos;ll reach out when the right role opens, here or with one of the
                companies we hire for.
              </p>
              <div className="hero-cta">
                <button className="btn btn-primary" onClick={() => openForm(TALENT_NETWORK_OPTION)}>
                  Apply now <Arrow size={15} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <ApplicationForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        posting={formRole}
      />
    </>
  );
}
