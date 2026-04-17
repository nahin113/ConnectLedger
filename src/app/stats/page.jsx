"use client";

import { useTimeline } from "@/lib/timelineStore";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StatsPage = () => {
  const { timeline } = useTimeline();
  const counts = {
    call: 0,
    text: 0,
    video: 0,
  };

  timeline.forEach((item) => {
    const type = item.type?.toLowerCase();
    if (counts[type] !== undefined) {
      counts[type]++;
    }
  });

  const chartData = [
    { name: "Call", value: counts.call },
    { name: "Text", value: counts.text },
    { name: "Video", value: counts.video },
  ];

  const COLORS = ["#244d3f", "#7e35e1", "#37a163"];

  return (
    <div className="bg-base-300 min-h-screen">
      <div className="w-8/12 mx-auto p-[32px]">
        <h1 className="text-[48px] font-bold text-[#1f2937] mb-[24px]">
          Friendship Analytics
        </h1>

        <div className="bg-base-100 rounded-xl shadow p-6">
          <h2 className="mb-[24px] font-semibold text-[20px] text-[#244d3f]">
            By Interaction Type
          </h2>

          {timeline.length === 0 ? (
            <div className="bg-base-300">
              <div className="py-[80px] text-center space-y-6">
                <h1 className="text-[#244d3f] text-6xl font-bold">
                  No Data Available
                </h1>
              </div>
            </div>
          ) : (
            <div className="w-full h-[300px]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
