import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Feedback App",
  description: "Request Feedback from Colleagues",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: `0%`, padding: `0%` }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
