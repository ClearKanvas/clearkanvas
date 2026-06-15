// Re-mounts on every route change, giving each page a soft fade-in.
// Opacity-only: a transform here would break the sticky nav.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
