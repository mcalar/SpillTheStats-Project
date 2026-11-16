export type UiIconName = 'accessibility' | 'heart' | 'moon' | 'sun' | 'user';

interface UiIconProps {
  name: UiIconName;
  size?: number;
  className?: string;
}

export function UiIcon({ name, size = 20, className }: UiIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {name === 'accessibility' && (
        <>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="7" r="1" />
          <path d="M5 10h14M12 9v5m0 0-4 6m4-6 4 6" />
        </>
      )}
      {name === 'heart' && (
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
      )}
      {name === 'moon' && (
        <path d="M20.985 12.486A9 9 0 1 1 11.514 3.015a.75.75 0 0 0 .99.99 6 6 0 0 0 8.48 8.48.75.75 0 0 0 .001-.999Z" />
      )}
      {name === 'sun' && (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </>
      )}
      {name === 'user' && (
        <>
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </>
      )}
    </svg>
  );
}
