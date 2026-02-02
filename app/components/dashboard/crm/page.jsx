"use client";

import React from "react";
import TopStatsCards from "./TopStatsCards";
import CrmMainSection from "./CrmMainSection";
import TaskMiniCards from "./TaskMiniCards";
import LeadsSection from "./LeadsSection";
import BottomThreeCards from "./BottomThreeCards";

export default function CrmPage() {
  return (
    <div className="space-y-6">
      <TopStatsCards />
      <CrmMainSection />
       <TaskMiniCards />
       <LeadsSection />
       <BottomThreeCards/>
    </div>
  );
}
