"use client";

import { useEffect } from "react";

export default function PerformanceFix() {
  useEffect(() => {
    if (typeof performance !== "undefined") {
      if (typeof performance.clearMarks !== "function") {
        performance.clearMarks = () => {};
      }
      if (typeof performance.clearMeasures !== "function") {
        performance.clearMeasures = () => {};
      }
    }
  }, []);

  return null;
}
