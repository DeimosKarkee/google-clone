import "./globals.css";

export const metadata = {
  title: "Google clone",
  description: "Google clone for searching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
