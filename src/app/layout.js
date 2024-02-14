import { Inter } from "next/font/google";
import "./globals.css";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Home Management System",
    description:
        "Management Home something. Security, Tools, Server, support your life.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <DefaultLayout>{children}</DefaultLayout>
            </body>
        </html>
    );
}
