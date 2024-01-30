import { Inter } from "next/font/google";
import '../styles/custom-bootstrap.scss';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Handcrafted Haven",
  description: "Find local artisans and creatives",
};

export default function RootLayout({ children }) {
  return (
    
    <div className="bg-custom-primary">{ children }</div>
  );
}
