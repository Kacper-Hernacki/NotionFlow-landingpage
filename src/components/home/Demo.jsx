import styles from "../../style";
import { fadeInVariants, slideInFromLeft, slideInFromRight } from "../../utils";
import { motion } from "framer-motion";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

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
            Demo of the product
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
            <LiteYouTubeEmbed id="d3OaXOwuq80" title="NotionFlow demo"/>
          </div>
        </motion.div>
      </motion.div>
    </div>

  </section>
);

export default Demo;