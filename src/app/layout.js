import { Inter } from "next/font/google";
import "./globals.css";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Home Management System",
    description: "Management Home something. Security, Tools, Server, support your life.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <DefaultLayout>{children}</DefaultLayout>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    limit={3}
                    pauseOnHover={false}
                />
            </body>
        </html>
    );
}
