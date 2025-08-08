import { cn } from "@/lib/utils";
import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-black-100">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:50px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e72a_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e72a_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#e4e4e72a_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e72a_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
    </div>
  );
}
