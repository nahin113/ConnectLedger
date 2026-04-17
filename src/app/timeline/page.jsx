'use client'

import { useState } from "react";
import { useTimeline } from "@/lib/timelineStore";
import Image from "next/image";
import Call from '../../../public/assets/call.png'
import Text from '../../../public/assets/text.png'
import Video from '../../../public/assets/video.png'

const TimelinePage = () => {
  const { timeline } = useTimeline();

  const [filter, setFilter] = useState("all");

  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter((item) => item.type === filter);

const setImg = (type)=> {
    if(type==='Call') return Call
    else if (type === 'Text') return Text
    else return Video
}

  return (
    <div className="bg-base-300">
      <div className="w-8/12 mx-auto py-20">
        <h1 className="text-5xl font-bold text-[#1f2937] mb-6">Timeline</h1>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select select-bordered w-full max-w-xs text-[#64748b] text-lg bg-base-300 mb-6"
        >
          {["Filter Timeline", "Call", "Text", "Video"].map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {filteredTimeline.length === 0 ? (
          <p className="text-white text-center">No interactions found.</p>
        ) : (
          <div className="space-y-6">
            {filteredTimeline.map((item) => (
              <div
                key={item.id}
                className="border bg-base-100 rounded-lg p-4 shadow-sm flex justify-between items-center"
              >
                <div className="flex justify-center items-center gap-4">
                  <div>
                    <Image
                      src={setImg(item.type)}
                      width={42}
                      height={34}
                      alt='call Icon'
                    />
                  </div>
                  <div>
                    <p className="flex justify-center gap-2">
                      <span className="font-semibold text-[#244d3f]">
                        {item.type}
                      </span>
                      <span className="text-[#64748b]">
                        with {item.friendName}
                      </span>
                    </p>

                    <p className="font-semibold text-[#64748b]">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;