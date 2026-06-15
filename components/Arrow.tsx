// Shared "arrow" glyph used inside buttons and links.
export default function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg
      className="arr"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h9M8 4l5 4-5 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
