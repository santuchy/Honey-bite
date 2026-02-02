"use client";

import React from "react";
import TopStatsCards from "./TopStatsCards";
import CrmMainSection from "./CrmMainSection";

export default function CrmPage() {
  return (
    <div className="space-y-6">
      <TopStatsCards />
      <CrmMainSection />
    </div>
  );
}
