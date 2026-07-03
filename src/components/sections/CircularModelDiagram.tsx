import React from "react";

export default function CircularModelDiagram() {
  const radius = 155;
  const cx = 250;
  const cy = 250;

  const nodes = [
    { label: "Infrastructure" },
    { label: "Environment" },
    { label: "Economy" },
    { label: "Governance" },
    { label: "Society" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-semibold tracking-tight text-green-600 uppercase mb-4">
            Integrated Model
          </h2>
          <p className="text-gray-900 text-xl md:text-2xl font-medium tracking-tight">
            ABSIIDP operates on a holistic model where multiple sectors interlock to create sustainable growth.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-[500px] aspect-square">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              {/* Connecting Lines */}
              {nodes.map((_, i) => {
                const angle = (i * 360) / nodes.length - 90;
                const radian = (angle * Math.PI) / 180;
                const x = cx + radius * Math.cos(radian);
                const y = cy + radius * Math.sin(radian);
                return (
                  <line
                    key={`line-${i}`}
                    x1={cx}
                    y1={cy}
                    x2={x}
                    y2={y}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Central Circle */}
              <circle cx={cx} cy={cy} r="60" fill="white" stroke="#16a34a" strokeWidth="2" />
              <image
                href="/absiidp.png"
                x={cx - 40}
                y={cy - 20}
                width="80"
                height="40"
                preserveAspectRatio="xMidYMid meet"
              />

              {/* Outer Nodes */}
              {nodes.map((node, i) => {
                const angle = (i * 360) / nodes.length - 90;
                const radian = (angle * Math.PI) / 180;
                const x = cx + radius * Math.cos(radian);
                const y = cy + radius * Math.sin(radian);

                return (
                  <g key={`node-${i}`}>
                    <circle cx={x} cy={y} r="55" fill="white" stroke="#d1d5db" strokeWidth="1" />
                    <text
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dy=".3em"
                      fill="#374151"
                      className="text-xs font-medium"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

