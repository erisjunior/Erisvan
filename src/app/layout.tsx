import "@/styles/globals.css";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Erisvan",
  description: "Antonio Erisvan - Site pessoal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaCode.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
