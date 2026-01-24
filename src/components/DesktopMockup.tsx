interface DesktopMockupProps {
  frameSrc?: string;
  screenSrc?: string;
  screenPadding?: string;
  screenBackground?: string;
  aspectRatio?: string;
  frameScaleY?: number;
  left?: string;
  top?: string;
  width?: string;
  height?: string;
  radius?: number;
  debug?: boolean;
  className?: string;
}

export function DesktopMockup({
  frameSrc = '/images/desktop_frame.png',
  screenSrc = '/images/powerbi.png',
  screenPadding = '0px',
  screenBackground = 'transparent',
  aspectRatio = '16/10',
  frameScaleY = 1.06,
  left = '7%',
  top = '10.5%',
  width = '86%',
  height = '79%',
  radius = 0,
  debug = false,
  className,
}: DesktopMockupProps) {
  return (
    <div className={className} style={{ position: 'relative', width: '100%', height: '100%', aspectRatio }}>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '6%',
          width: '64%',
          height: '10%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(closest-side, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0))',
          filter: 'blur(14px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '8%',
          width: '58%',
          height: '4%',
          transform: 'translateX(-50%)',
          background: 'rgba(0, 0, 0, 0.22)',
          filter: 'blur(10px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      {/* Desktop Frame - Behind */}
      <img
        src={frameSrc}
        alt="Desktop frame"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          zIndex: 1,
          pointerEvents: 'none',
          transform: `scaleY(${frameScaleY})`,
          transformOrigin: 'center bottom',
        }}
      />
      {/* PowerBI Image - On Top, Inside Frame */}
      <div
        style={{
          position: 'absolute',
          left,
          top,
          width,
          height,
          padding: screenPadding,
          background: screenBackground,
          borderRadius: radius,
          boxSizing: 'border-box',
          zIndex: 2,
          overflow: 'hidden',
          border: debug ? '2px solid red' : 'none',
        }}
      >
        <img
          src={screenSrc}
          alt="Power BI dashboard"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
}
