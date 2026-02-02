"use client";

import React from "react";
import PaymentRecordCard from "./PaymentRecordCard";
import TotalSalesCard from "./TotalSalesCard";

export default function CrmMainSection() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
      <div className="xl:col-span-8">
        <PaymentRecordCard />
      </div>
      <div className="xl:col-span-4">
        <TotalSalesCard />
      </div>
    </div>
  );
}
