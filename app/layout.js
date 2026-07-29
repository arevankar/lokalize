import "./globals.css";

export const metadata = {
  title: "Number Adder",
  description: "Add two numbers in a simple Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}