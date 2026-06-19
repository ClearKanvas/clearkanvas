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
              alt="ClearKanvas Global"
              width={160}
              height={60}
            />
            <p className="ft-tagline">Where complexity becomes clarity.</p>
            <p>
              An expert team that builds and runs the finance, talent, technology, and
              operations functions growing companies struggle to staff well.
            </p>
            <div className="socials">
              <a
                className="social"
                href="https://www.linkedin.com/company/clearkanvas-global/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ClearKanvas Global on LinkedIn"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H18.6v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H10z" />
                </svg>
              </a>
              <a
                className="social"
                href="https://www.facebook.com/share/1BGMJ9UgF2/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ClearKanvas Global on Facebook"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
                </svg>
              </a>
              <a
                className="social"
                href="https://www.instagram.com/clearkanvasglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ClearKanvas Global on Instagram"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.8.22 2.43.47.66.25 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.63.42 1.36.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.8-.47 2.43a4.9 4.9 0 0 1-1.15 1.77c-.55.55-1.11.9-1.77 1.15-.63.25-1.36.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.8-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.63-.42-1.36-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.8.47-2.43A4.9 4.9 0 0 1 3.68 3.68c.55-.55 1.11-.9 1.77-1.15.63-.25 1.36-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.98.04-1.51.21-1.86.35-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.35-.31.88-.35 1.86-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.98.21 1.51.35 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.35.14.88.31 1.86.35 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.98-.04 1.51-.21 1.86-.35.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.35.31-.88.35-1.86.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.98-.21-1.51-.35-1.86a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.35-.14-.88-.31-1.86-.35-1.05-.05-1.37-.06-4.04-.06zm0 3.06a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28zm0 1.8a3.34 3.34 0 1 0 0 6.68 3.34 3.34 0 0 0 0-6.68zm5.34-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
                </svg>
              </a>
              <a
                className="social"
                href="https://www.threads.com/@clearkanvasglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ClearKanvas Global on Threads"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.291 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.193.408-2.29 1.331-3.082.879-.756 2.117-1.2 3.582-1.282a13.4 13.4 0 0 1 2.913.13c-.13-.776-.39-1.392-.777-1.836-.531-.61-1.351-.92-2.434-.928h-.03c-.87 0-2.05.239-2.803 1.357L7.34 7.79c1.009-1.497 2.647-2.32 4.623-2.32h.043c3.305.02 5.273 2.043 5.468 5.555.111.047.22.096.329.147 1.534.721 2.654 1.81 3.241 3.146.818 1.86.893 4.893-1.59 7.353-1.895 1.878-4.195 2.724-7.275 2.749Z" />
                </svg>
              </a>
              <a
                className="social"
                href="https://x.com/clearkanvas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ClearKanvas Global on X"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
              <li className="ft-mail-row">
                <span className="ft-loc-k">General enquiries</span>
                <a className="ft-mail" href="mailto:hello@clearkanvas.com">
                  hello@clearkanvas.com
                </a>
              </li>
              <li className="ft-mail-row">
                <span className="ft-loc-k">New business and sales</span>
                <a className="ft-mail" href="mailto:sales@clearkanvas.com">
                  sales@clearkanvas.com
                </a>
              </li>
              <li className="ft-mail-row">
                <span className="ft-loc-k">Partnerships</span>
                <a className="ft-mail" href="mailto:partnerships@clearkanvas.com">
                  partnerships@clearkanvas.com
                </a>
              </li>
              <li className="ft-mail-row">
                <span className="ft-loc-k">Phone</span>
                <a className="ft-mail" href="tel:+923096661176">
                  +92 309 6661176
                </a>
              </li>
              <li className="ft-loc">
                <span className="ft-loc-k">Operating in</span>
                USA, Pakistan, Bahrain
              </li>
              <li className="ft-loc">
                <span className="ft-loc-k">Islamabad office</span>
                Plot 1-E, Lower Ground Floor, Ali Plaza, Blue Area, Islamabad, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="ft-bottom">
          <span>Copyright {YEAR} ClearKanvas Global. All rights reserved.</span>
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
