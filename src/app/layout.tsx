import "./globals.css";

export const metadata = {
  title: "Pravin Rajah — Portfolio",
  description: "EECS @ UC Berkeley • SWE/QA • Full-Stack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">{children}</body>
    </html>
  );
}
