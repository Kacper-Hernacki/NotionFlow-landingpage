import styles from "../style";
import { fadeInVariants, slideInFromLeft, slideInFromRight } from "../utils/index.js";
import { motion } from "framer-motion";

const Demo = () => (
  <section id="demo" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInFromLeft}
          className="w-full">
          <h2 className={styles.heading2}>
            Demo will be soon
          </h2>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        className="w-full"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInFromRight}
          className="w-full"
        >
          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Demo video will be available by the end of the year
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>


  </section>
);

export default Demo;