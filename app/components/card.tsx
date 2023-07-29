"use client";

import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='overflow-hidden relative duration-700 border rounded-xl hover:bg-white/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-700'>
      {children}
    </div>
  );
};
