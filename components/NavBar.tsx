import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav className={styles.nav}>
      <Link
        style={{ color: router.pathname === "/" ? "red" : "blue" }}
        className="hellow"
        href="/"
      >
        Home
      </Link>
      <Link
        style={{ color: router.pathname === "/" ? "blue" : "red" }}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
