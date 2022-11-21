import React, { useState } from "react";
import Chip from "./Chip";

const TabLists = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-5 border-b border-gray-600">{children}</div>
  );
};

const InfoTab = ({ data }: any) => {
  const [activeTab, setActiveTab] = useState("casts");
  const tabs = ["casts", "genres", "crews"];
  return (
    <div>
      <TabLists>
        {tabs.map((tab) => (
          <p
            className={`
            ${
              activeTab === tab &&
              "hover: border-b border-green-500 text-green-500"
            } cursor-pointer capitalize`}
            onClick={() => setActiveTab(tab)}
            key="tab"
          >
            {tab}
          </p>
        ))}
      </TabLists>
      <div className="mt-3 flex w-full flex-wrap">
        {activeTab === "casts"
          ? data.credits.cast.map((cast: { id: number; name: string }) => (
              <Chip key={cast.id} href={`/cast/${cast.id}`}>
                {cast.name}
              </Chip>
            ))
          : activeTab === "genres"
          ? data.genres.map((genre: { id: number; name: string }) => (
              <Chip key={genre.id} href={`/genre/${genre.id}`}>
                {genre.name}
              </Chip>
            ))
          : data.credits.crew.map((crew: any) => (
              <Chip key={crew.id} href={`/genre/${crew.id}`}>
                {crew.name}
              </Chip>
            ))}
      </div>
    </div>
  );
};

export default InfoTab;
