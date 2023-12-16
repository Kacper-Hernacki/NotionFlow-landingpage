import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeInVariants, slideInFromLeft, slideInFromRight } from "../utils";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInFromLeft}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Just clone repo, <br className="sm:block hidden" /> and <span className="bowed-underline">save days</span>
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Repo consists helpful comments, video tutorials and many more tips. It will allow you to customize code in a
            blink of an eye, without complications. Moreover, product includes notion templates used in a code.
          </p>

          <Button styles="mt-8 lg:w-[450px]" onClick={() => document.getElementById("my_modal_2").showModal()} />
        </div>
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
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Business;