"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Arrow from "./Arrow";
import {
  SERVICE_GROUPS,
  servicesByGroup,
  FLAGSHIP_SERVICE,
  INDUSTRIES,
  industrySlug,
  HOW_WE_WORK_NAV,
  ABOUT_NAV,
} from "@/lib/services";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Which top-level dropdown is open on mobile (accordion). Desktop uses hover.
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => {
    setMenuOpen(false);
    setOpenItem(null);
  };
  const toggleItem = (label: string) =>
    setOpenItem((cur) => (cur === label ? null : label));

  return (
    <header
      className={`nav${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}
      id="nav"
    >
      <div className="wrap nav-inner">
        <Link className="brand" href="/" aria-label="ClearKanvas home" onClick={close}>
          <Image
            className="brand-logo"
            src="/logo.png"
            alt="ClearKanvas"
            width={160}
            height={60}
            priority
          />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {/* SERVICES , mega menu */}
          <div className={`nav-item has-mega${openItem === "Services" ? " open" : ""}`}>
            <Link
              className="nav-item-link"
              href="/services"
              onClick={close}
              aria-expanded={openItem === "Services"}
            >
              Services
              <Caret />
            </Link>
            <button
              className="nav-acc-toggle"
              aria-label="Toggle Services"
              onClick={() => toggleItem("Services")}
            >
              <Caret />
            </button>
            <div className="mega" role="menu" aria-label="Services">
              <div className="mega-cols">
                {SERVICE_GROUPS.map((group) => (
                  <div className="mega-col" key={group}>
                    <p className="mega-head">{group}</p>
                    {servicesByGroup(group).map((s) => (
                      <Link
                        className="mega-link"
                        href={`/services/${s.slug}`}
                        key={s.slug}
                        role="menuitem"
                        onClick={close}
                      >
                        <span className="mega-link-name">
                          {s.name}
                          {s.flagship && <span className="mega-flag">Flagship</span>}
                        </span>
                        <span className="mega-link-desc">{s.menuDesc}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <div className="mega-feature">
                <p className="mega-feature-title">
                  Build your offshore team in weeks, not months.
                </p>
                <p className="mega-feature-sub">Dedicated teams, fully managed.</p>
                <div className="mega-feature-cta">
                  <Link
                    className="btn btn-primary btn-sm"
                    href={`/services/${FLAGSHIP_SERVICE.slug}`}
                    onClick={close}
                  >
                    Explore GCC <Arrow />
                  </Link>
                  <Link className="mega-feature-link" href="/contact" onClick={close}>
                    Book a discovery call
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* INDUSTRIES , dropdown */}
          <Dropdown
            label="Industries"
            href="/industries"
            open={openItem === "Industries"}
            onToggle={() => toggleItem("Industries")}
            onNavigate={close}
            items={INDUSTRIES.map((name) => ({
              href: `/industries#${industrySlug(name)}`,
              label: name,
            }))}
          />

          {/* HOW WE WORK , dropdown */}
          <Dropdown
            label="How We Work"
            href="/how-we-work"
            open={openItem === "How We Work"}
            onToggle={() => toggleItem("How We Work")}
            onNavigate={close}
            items={HOW_WE_WORK_NAV}
          />

          {/* ABOUT , dropdown */}
          <Dropdown
            label="About"
            href="/about"
            open={openItem === "About"}
            onToggle={() => toggleItem("About")}
            onNavigate={close}
            items={ABOUT_NAV}
          />

          {/* CONTACT , plain link (button lives in nav-right) */}
          <Link className="nav-item-link nav-contact-link" href="/contact" onClick={close}>
            Contact
          </Link>
        </nav>

        <div className="nav-right">
          <Link className="btn btn-primary btn-sm" href="/contact" onClick={close}>
            Book a discovery call <Arrow />
          </Link>
          <button
            className="btn btn-ghost btn-sm nav-toggle"
            id="navToggle"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}

function Caret() {
  return (
    <svg className="caret" width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Dropdown({
  label,
  href,
  items,
  open,
  onToggle,
  onNavigate,
}: {
  label: string;
  href: string;
  items: { href: string; label: string }[];
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className={`nav-item has-menu${open ? " open" : ""}`}>
      <Link className="nav-item-link" href={href} onClick={onNavigate} aria-expanded={open}>
        {label}
        <Caret />
      </Link>
      <button className="nav-acc-toggle" aria-label={`Toggle ${label}`} onClick={onToggle}>
        <Caret />
      </button>
      <div className="nav-menu" role="menu" aria-label={label}>
        {items.map((child) => (
          <Link
            className="nav-menu-link"
            role="menuitem"
            href={child.href}
            key={child.label}
            onClick={onNavigate}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
