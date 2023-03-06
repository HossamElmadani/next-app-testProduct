import Link from "next/link"
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Navbar() {
        // const router = useRouter();
        // useEffect(() => {
        //   typeof document !== undefined
        //     ? require("bootstrap/dist/js/bootstrap")
        //     : null;
        // }, [router.events]);
    return (
        <nav className="navbar navbar-inverse bg-warning">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" href="/">LOGO</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/product">Product</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar