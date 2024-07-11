import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <main className="max-w-[95%] mx-auto">{children}</main>;
}
