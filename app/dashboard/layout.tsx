import DashboardNav from "@/components/DashboardNav";
import DashboardSidebar from "@/components/DashboardSidebar";
import StoreProvider from "@/redux/StoreProvider";
import React from "react";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="">
        <DashboardSidebar />
        <div className="page-content">
          <DashboardNav />
          {children}
        </div>
      </div>
  );
}

export default DashboardLayout;
