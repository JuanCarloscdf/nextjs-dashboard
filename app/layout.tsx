import "@/app/ui/global.css";
import { inter, poppins } from "./ui/fonts";
import Image from "next/image";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
