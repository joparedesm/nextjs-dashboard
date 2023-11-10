import '@/app/ui/global.css'
import { akaya } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ `${akaya.className} antialiased`}>{children}</body>
    </html>
  );
}
