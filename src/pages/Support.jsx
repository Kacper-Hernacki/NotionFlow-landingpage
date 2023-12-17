import styles from "../style";

const Support = () => (
  <main className="max-w-3xl mx-auto text-center min-h-custom grid items-center">
    <div>
      <h2 className={styles.heading2}>Support</h2>
      <p className={`${styles.paragraph}`}>
        Email me at <a target="_blank" href="mailto:hernackikacper@gmail.com" className="text-[#32bbcf] hover:text-blue-800">hernackikacper@gmail.com</a>
      </p>
    </div>
  </main>

);

export default Support;