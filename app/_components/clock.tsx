'use client';

import { useEffect, useState } from "react";
import moment from "moment";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("hh:mm:ss"))
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (<div className="bg-blue-700 w-1/2 px-10 py-10">
    <p className="text-white text-9xl text-center">{time}</p>
  </div>);
}
