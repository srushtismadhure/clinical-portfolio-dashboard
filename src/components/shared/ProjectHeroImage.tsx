interface ProjectHeroImageProps {
    frameSrc?: string;
    screenSrc?: string;
    alt: string;
  
    left?: string;
    top?: string;
    width?: string;
    height?: string;
  
    radius?: number;
    fit?: "cover" | "contain";
    debug?: boolean;
  }
  
  export function ProjectHeroImage({
    frameSrc,
    screenSrc,
    alt,
    left = "12.14%",
    top = "16.63%",
    width = "75.56%",
    height = "50.30%",
    radius = 10,
    fit = "cover",
    debug = false,
  }: ProjectHeroImageProps) {
    return (
      <div className="mb-8 py-14 md:py-20 lg:py-24 -mx-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto flex justify-center">
          <div className="relative w-full max-w-[980px]" style={{ aspectRatio: "626 / 505" }}>
            {/* Screen window (clips dashboard) */}
            {screenSrc && (
              <div
                style={{
                  position: "absolute",
                  left,
                  top,
                  width,
                  height,
                  overflow: "hidden",
                  borderRadius: radius,
                  background: "#fff",
                  zIndex: 1,
                  outline: debug ? "2px solid red" : "none",
                }}
              >
                <img
                  src={screenSrc}
                  alt="Dashboard"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: fit,
                    display: "block",
                  }}
                  draggable={false}
                />
              </div>
            )}
  
            {/* Frame on top */}
            {frameSrc && (
              <img
                src={frameSrc}
                alt={alt}
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                style={{ zIndex: 2 }}
                draggable={false}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
  