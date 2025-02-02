import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo aligned to the left */}
      <Link href="/">
        <Image src="/logo.jpg" alt="Logo" width={100} height={100} />
      </Link>

      {/* Links aligned to the right */}
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
