import React from "react";

const POWER_BI_IMAGE_URL = "/images/powerbifinal.png";

function AnalyticsChart() {
  return (
    <div className="w-full">
      <div className="rounded-[14px] border-[3px] border-slate-900 bg-[#0B1220] p-3">
        <div className="rounded-[10px] border-[2px] border-[#0B0F1A] bg-[#0B1220] overflow-hidden">
          <div className="w-full aspect-video">
            <img
              src={POWER_BI_IMAGE_URL}
              alt="Power BI dashboard"
              className="w-full h-full block object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnalyticsChart };
export default AnalyticsChart;
