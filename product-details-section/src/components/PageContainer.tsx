import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] p-4">
      <div className="m-auto max-w-[1440px] rounded-lg bg-white pt-10 pb-4 shadow-md lg:grid lg:grid-cols-2 lg:p-20">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
