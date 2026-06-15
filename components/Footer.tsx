import Link from "next/link";
import Image from "next/image";
import { SERVICE_NAV } from "@/lib/services";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-grid">
          {/* Column 1: brand */}
          <div className="ft-brand">
            <Image
              className="brand-logo ft-logo"
              src="/logo.png"
              alt="ClearKanvas"
              width={160}
              height={60}
            />
            <p className="ft-tagline">Where complexity becomes clarity.</p>
            <p>
              A senior team that builds and runs the finance, talent, technology, and
              operations functions growing companies struggle to staff well.
            </p>
            <div className="socials">
              <a className="social" href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H18.6v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H10z" />
                </svg>
              </a>
              <a className="social" href="mailto:hello@clearkanvas.com" aria-label="Email">
                <svg viewBox="0 0 24 24">
                  <path d="M3 5h18v14H3zM4.8 7l7.2 5 7.2-5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: services */}
          <div className="ft-col">
            <h4>Services</h4>
            <ul>
              {SERVICE_NAV.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.shortName}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: company */}
          <div className="ft-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/how-we-work">How We Work</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: get in touch */}
          <div className="ft-col">
            <h4>Get in touch</h4>
            <ul>
              <li>
                <a className="ft-mail" href="mailto:hello@clearkanvas.com">
                  hello@clearkanvas.com
                </a>
              </li>
              <li className="ft-loc">
                <span className="ft-loc-k">Operating in</span>
                Pakistan, Bahrain, Dubai
              </li>
              <li className="ft-loc">
                <span className="ft-loc-k">Serving</span>
                US, Canada, UK, Europe
              </li>
            </ul>
          </div>
        </div>

        <div className="ft-bottom">
          <span>Copyright {YEAR} ClearKanvas. All rights reserved.</span>
          <span className="ft-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
