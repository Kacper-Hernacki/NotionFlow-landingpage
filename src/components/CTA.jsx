import styles from "../style";
import Button from "./Button.jsx";
import { fadeInVariants, slideInFromBottom } from "../utils/index.js";
import { motion } from "framer-motion";
const CTA = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeInVariants}
    className="flex flex-col h-full">
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideInFromBottom}
      className="flex flex-col h-full"
    >
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Join the Waitlist</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Get 50% discount as an early bird!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles="mt-8 lg:w-[450px]" onClick={() => document.getElementById("my_modal_2").showModal()}/>

    </div>
  </section>
    </motion.div>
    </motion.div>
);

export default CTA;