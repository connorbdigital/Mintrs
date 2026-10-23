import React from 'react';

interface MintrsLogoProps {
  variant?: 'light' | 'dark' | 'auto';
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const MintrsLogo: React.FC<MintrsLogoProps> = ({
  variant = 'dark',
  className = '',
  showSubtitle = true,
  size = 'md',
}) => {
  const isDarkBg = variant === 'dark';
  const textColor = isDarkBg ? '#FFFFFF' : '#0F172A';

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
  };

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <div className={`relative flex items-center ${sizeClasses[size]}`}>
        <svg
          viewBox="0 0 620 140"
          className="h-full w-auto drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Chrome metallic gradient for the wrench & wheel */}
            <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#D4D4D8" />
              <stop offset="45%" stopColor="#71717A" />
              <stop offset="60%" stopColor="#F4F4F5" />
              <stop offset="80%" stopColor="#A1A1AA" />
              <stop offset="100%" stopColor="#52525B" />
            </linearGradient>

            <linearGradient id="rimShine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E4E4E7" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#A1A1AA" />
            </linearGradient>

            <radialGradient id="hubCapGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#A1A1AA" />
              <stop offset="100%" stopColor="#3F3F46" />
            </radialGradient>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Letter 'M' */}
          <text
            x="30"
            y="98"
            fill={textColor}
            fontSize="92"
            fontWeight="900"
            fontFamily="Inter, system-ui, -apple-system, sans-serif"
            letterSpacing="0.04em"
          >
            M
          </text>

          {/* The 'i' composition: Alloy wheel (dot) + Spanner (stem) */}
          <g transform="translate(178, 12)">
            {/* === ALLOY WHEEL (dot of i) === */}
            <g transform="translate(0, 0)">
              {/* Outer tire / rim ring */}
              <circle cx="20" cy="20" r="19" fill="#18181B" stroke="url(#chromeGradient)" strokeWidth="2.5" />
              <circle cx="20" cy="20" r="16.5" fill="none" stroke="#E4E4E7" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
              <circle cx="20" cy="20" r="14" fill="#09090B" stroke="#71717A" strokeWidth="1" />
              
              {/* Alloy Spokes (6 twin spokes) */}
              {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
                <g key={idx} transform={`rotate(${angle} 20 20)`}>
                  <rect x="18.5" y="7" width="3" height="9" rx="1.5" fill="url(#chromeGradient)" />
                  <rect x="19.2" y="7" width="1.2" height="9" fill="#FFFFFF" opacity="0.8" />
                </g>
              ))}

              {/* Central hub cap */}
              <circle cx="20" cy="20" r="5" fill="url(#hubCapGradient)" stroke="#E4E4E7" strokeWidth="1" />
              <circle cx="20" cy="20" r="2" fill="#18181B" />
              {/* Lug nuts */}
              <circle cx="16.5" cy="18" r="0.9" fill="#FFFFFF" />
              <circle cx="23.5" cy="18" r="0.9" fill="#FFFFFF" />
              <circle cx="20" cy="23.5" r="0.9" fill="#FFFFFF" />
            </g>

            {/* === CHROME SPANNER / WRENCH (stem of i) === */}
            <g transform="translate(6, 44)">
              {/* Spanner Head (Open Jaw tilted) */}
              <path
                d="M 5 6 
                   C 5 1, 10 -2, 17 -1 
                   C 23 0, 27 5, 26 11 
                   L 20 18 
                   C 19 14, 15 11, 11 12 
                   C 8 13, 6 15, 6 18 
                   L 2 15 
                   C 1 12, 2 8, 5 6 Z"
                fill="url(#chromeGradient)"
                stroke="#52525B"
                strokeWidth="0.8"
              />

              {/* Spanner Head Interior Jaw Cutout */}
              <path
                d="M 9 14 C 13 10, 17 11, 20 17 L 16 21 C 13 18, 10 18, 8 20 Z"
                fill="#09090B"
                opacity="0.25"
              />

              {/* Spanner Shaft / Handle */}
              <rect
                x="10.5"
                y="19"
                width="7"
                height="56"
                rx="3.5"
                fill="url(#chromeGradient)"
                stroke="#52525B"
                strokeWidth="0.75"
              />

              {/* Handle inner recessed rib */}
              <rect
                x="12"
                y="26"
                width="4"
                height="42"
                rx="2"
                fill="#27272A"
                opacity="0.4"
              />

              {/* Chrome reflection line */}
              <line x1="13.2" y1="21" x2="13.2" y2="70" stroke="#FFFFFF" strokeWidth="1" opacity="0.85" />

              {/* Spanner bottom ring / hole */}
              <circle cx="14" cy="74" r="5" fill="url(#chromeGradient)" stroke="#52525B" strokeWidth="0.75" />
              <circle cx="14" cy="74" r="2.2" fill={isDarkBg ? '#0B0F19' : '#F8FAFC'} />
            </g>
          </g>

          {/* Letter 'N' */}
          <text
            x="245"
            y="98"
            fill={textColor}
            fontSize="92"
            fontWeight="900"
            fontFamily="Inter, system-ui, -apple-system, sans-serif"
            letterSpacing="0.04em"
          >
            N
          </text>

          {/* Letter 'T' */}
          <text
            x="340"
            y="98"
            fill={textColor}
            fontSize="92"
            fontWeight="900"
            fontFamily="Inter, system-ui, -apple-system, sans-serif"
            letterSpacing="0.04em"
          >
            T
          </text>

          {/* Letter 'R' */}
          <text
            x="430"
            y="98"
            fill={textColor}
            fontSize="92"
            fontWeight="900"
            fontFamily="Inter, system-ui, -apple-system, sans-serif"
            letterSpacing="0.04em"
          >
            R
          </text>

          {/* Letter 'S' */}
          <text
            x="525"
            y="98"
            fill={textColor}
            fontSize="92"
            fontWeight="900"
            fontFamily="Inter, system-ui, -apple-system, sans-serif"
            letterSpacing="0.04em"
          >
            S
          </text>
        </svg>
      </div>

      {showSubtitle && (
        <div className="flex items-center gap-1.5 mt-0.5 tracking-[0.25em] uppercase text-[10px] font-bold">
          <span className={isDarkBg ? 'text-amber-400' : 'text-amber-600'}>24H</span>
          <span className={isDarkBg ? 'text-zinc-400' : 'text-zinc-500'}>VEHICLE RECOVERY LTD</span>
        </div>
      )}
    </div>
  );
};
