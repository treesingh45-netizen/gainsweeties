import React from 'react';

interface BrandEmblemProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  customLogoUrl?: string;
  squareBadge?: boolean;
}

/**
 * Helper to convert Google Drive share URLs (e.g. https://drive.google.com/file/d/FILE_ID/view)
 * into direct image URLs that render inside <img> tags.
 */
export function resolveDriveOrImageUrl(url: string): string {
  if (!url) return '';
  const trimmed = url.trim();
  const fileMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch && fileMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${fileMatch[1]}`;
  }
  const idMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch && idMatch[1] && trimmed.includes('drive.google.com')) {
    return `https://lh3.googleusercontent.com/d/${idMatch[1]}`;
  }
  return trimmed;
}

/**
 * 100% faithful recreation of the official GAIN 24/7 logo (logo.png):
 * - Warm caramel outer framing & deep chocolate brown circular badge (#381709)
 * - Cream outer ring (#F6EAD9)
 * - Overlapping classic serif "G" and "N" monogram in cream (#F6EAD9)
 * - 4-drop melted caramel drip (#BE7432 with #D89655 highlight) on the top curve of the "G"
 * - Sweeping caramel crescent swoosh (#C68342) wrapping across the "GN"
 * - "GAIN 24/7" bold serif wordmark in cream
 * - Bottom horizontal caramel lines flanking the twin cocoa leaves with vein detail
 */
export const BrandEmblem: React.FC<BrandEmblemProps> = ({
  className = '',
  size = 'md',
  customLogoUrl,
  squareBadge = false,
}) => {
  const dimensions = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32 sm:w-36 sm:h-36',
  }[size];

  const resolvedCustomUrl = customLogoUrl
    ? resolveDriveOrImageUrl(customLogoUrl)
    : '';

  if (resolvedCustomUrl) {
    return (
      <img
        src={resolvedCustomUrl}
        alt="GAIN 24/7 Official Logo"
        referrerPolicy="no-referrer"
        className={`${dimensions} ${
          squareBadge ? 'rounded-xl' : 'rounded-full'
        } object-cover shrink-0 select-none shadow-md ${className}`}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${dimensions} ${
        squareBadge ? 'rounded-2xl' : 'rounded-full'
      } shrink-0 select-none shadow-md ${className}`}
      aria-label="GAIN 24/7 Official Logo"
    >
      {/* Optional Square Caramel Backdrop matching logo.png */}
      {squareBadge && <rect width="500" height="500" rx="48" fill="#C98A4B" />}

      {/* Outer Dark Chocolate Circle */}
      <circle cx="250" cy="250" r={squareBadge ? '234' : '248'} fill="#381709" />

      {/* Thick Cream Inner Border Ring */}
      <circle
        cx="250"
        cy="250"
        r={squareBadge ? '217' : '230'}
        stroke="#F6EAD9"
        strokeWidth="9"
      />

      {/* ============================================================
          "G" AND "N" MONOGRAM IN CREAM (#F6EAD9)
      ============================================================ */}
      {/* Large Serif "G" */}
      <path
        d="M286 154 C282 128 260 112 228 112 C178 112 145 150 145 202 C145 252 180 282 225 282 C242 282 256 278 268 271 V210 H245 C228 210 218 206 214 202 V197 H276 V284 C258 293 236 298 213 298 C154 298 116 258 116 202 C116 144 162 96 226 96 C256 96 278 106 290 116 L290 154 H286 Z"
        fill="#F6EAD9"
      />

      {/* Bottom Serif Base of the "G" / "I" Vertical Pillar */}
      <path
        d="M222 198 H268 V282 C268 292 274 296 288 297 V303 H204 V297 C218 296 222 292 222 282 V198 Z"
        fill="#F6EAD9"
      />

      {/* Overlapping Classic Serif "N" */}
      <path
        d="M235 162 H282 L352 252 V180 C352 169 345 165 330 164 V158 H378 V164 C364 165 359 169 359 180 V304 H348 L266 198 V282 C266 292 273 296 288 297 V303 H235 V297 C248 296 254 292 254 282 V178 C254 168 247 164 235 163 V162 Z"
        fill="#F6EAD9"
      />

      {/* ============================================================
          MELTED CARAMEL DRIP ON TOP CURVE OF "G"
      ============================================================ */}
      <path
        d="M150 152 C166 122 196 103 234 103 C252 103 268 108 278 116 C264 116 254 123 252 136 C250 146 248 156 242 156 C236 156 236 141 228 141 C220 141 221 163 213 163 C205 163 206 143 197 144 C188 145 194 188 181 188 C168 188 175 148 166 149 C160 150 161 159 156 159 C151 159 149 155 150 152 Z"
        fill="#BE7432"
        stroke="#D89655"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Subtle Inner Drip Highlight */}
      <path
        d="M179 158 C179 168 178 178 181 181"
        stroke="#D89655"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* ============================================================
          CARAMEL CRESCENT ORBITAL SWOOSH ACROSS "GN"
      ============================================================ */}
      <path
        d="M140 264 C166 288 238 272 308 232 C365 199 392 158 362 142 C408 144 412 186 356 226 C292 272 182 308 140 264 Z"
        fill="#C68342"
      />

      {/* ============================================================
          "GAIN 24/7" SERIF WORDMARK
      ============================================================ */}
      <text
        x="250"
        y="376"
        textAnchor="middle"
        fill="#F6EAD9"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontWeight="700"
        fontSize="62"
        letterSpacing="2"
      >
        GAIN 24/7
      </text>

      {/* ============================================================
          BOTTOM HORIZONTAL BARS & TWIN COCOA LEAVES
      ============================================================ */}
      <line
        x1="126"
        y1="408"
        x2="216"
        y2="408"
        stroke="#C68342"
        strokeWidth="5.5"
        strokeLinecap="round"
      />

      {/* Left Leaf */}
      <path
        d="M248 418 C234 418 225 406 224 392 C237 392 246 401 248 418 Z"
        fill="#C68342"
      />
      <path
        d="M236 404 L246 415"
        stroke="#381709"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Right Leaf */}
      <path
        d="M251 418 C265 418 275 406 276 392 C263 392 253 401 251 418 Z"
        fill="#C68342"
      />
      <path
        d="M262 405 L253 415"
        stroke="#381709"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <line
        x1="284"
        y1="408"
        x2="374"
        y2="408"
        stroke="#C68342"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
