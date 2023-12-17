import { Bio, Business, CTA, Demo, Faq, Hero, JoinWaitlist, Platforms, Pricing } from "../components";
import styles from "../style";

const Home = () => (
  <main>
    <JoinWaitlist />
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`pb-40 bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Platforms />
        <Business />
        <Pricing />
        <Bio />
        <Demo />
        <Faq />
        <CTA />
      </div>
    </div>
  </main>
);

export default Home;