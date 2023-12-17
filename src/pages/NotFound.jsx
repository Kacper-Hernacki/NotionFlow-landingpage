import styles from "../style";
import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="max-w-3xl mx-auto text-center min-h-custom grid items-center">
    <div>
      <h2 className={styles.heading2}>Page not found</h2>
      <p className={`${styles.paragraph}`}>
        This page does not exist,<Link className="text-[#32bbcf]" to='/'> go back</Link>
      </p>
    </div>
  </main>
);

export default NotFound;