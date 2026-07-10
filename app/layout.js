import './globals.css';

export const metadata = {
  title: 'Salaro — UK-led digital consultancy',
  description: 'A UK-led digital consultancy. We build thoughtful, resilient digital products with clear decisions and practical delivery.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
