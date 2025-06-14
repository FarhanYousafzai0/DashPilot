import { Geist, Geist_Mono } from "next/font/google";

import Nav from "../ui/Nav";





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
    
     <div className="flex items-start gap-4 ">

<Sidebar/>


<div className="w-full ">

<Nav/>
        {children}
</div>
    </div>
      </body>
    </html>
  );
}
