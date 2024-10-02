import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

export const revalidate = 10;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ul class="flex gap-4 py-3 px-3">
          <li>
            <Link href="/" class="hover:border-b border-red-600 pb-1">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" class="hover:border-b border-red-600 pb-1">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" class="hover:border-b border-red-600 pb-1">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/posts" class="hover:border-b border-red-600 pb-1">
              Posts
            </Link>
          </li>
        </ul>
        <div className="p-4 bg-gray-200">{children}</div>
      </body>
    </html>
  );
}
