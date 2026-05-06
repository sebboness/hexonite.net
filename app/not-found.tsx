import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/sidebar/Sidebar";
import CopyRight from "@/components/CopyRight";

export const metadata: Metadata = { title: "404" };

export default function NotFound() {
    return (
        <div className="not-found-wrapper">
            <div className="leftpart">
                <div className="leftpart_inner">
                    <div className="logo">
                        <Link className="navbar-brand" href="/">
                            <Image
                                width={126}
                                height={22}
                                src="/img/logo/dark.png"
                                alt="brand"
                            />
                        </Link>
                    </div>
                    <CopyRight />
                </div>
            </div>

            <Sidebar />

            <div className="rightpart">
                <div className="rightpart_in">
                    <div className="section">
                        <div className="container">
                            <div className="error">
                                <div className="error_inner">
                                    <h1>404!</h1>
                                    <h3>Page not found</h3>
                                    <p>The page you were looking for could not be found.</p>
                                    <Link href="/" className="ib-button">
                                        Go to Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer-wrapper">
                <CopyRight />
            </footer>
        </div>
    );
}
