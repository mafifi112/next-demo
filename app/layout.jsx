export const metadata = {
  title: "Next.js on GitHub Pages",
  description: "Deploy your static Next.js site to GitHub Pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
