import Link from 'next/link';
import styles from '../../styles/About.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href='/user'>
              <a>User</a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
