import { Geist, Geist_Mono } from "next/font/google";

import Nav from "../ui/Nav";
import Sidebar from "../ui/Sidebar";





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
    
     <div className="flex items-start gap-4 m-2 ">

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
