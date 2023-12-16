import { platforms } from "../constants";
import styles from "../style";
import { fadeInVariants, slideInFromLeft } from "../utils/index.js";
import { motion } from "framer-motion";

const Platforms = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInFromLeft}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
          <h3 className="sm:w-[192px] w-40px] font-poppins text-md lg:text-xl text-[#414041] font-semibold">Featured
            soon on:</h3>
          {platforms.map((client) => (
            <a target="_blank" href={client.link} key={client.id} className={`${styles.flexCenter} cursor-pointer sm:min-w-[192px] min-w-[120px] m-5`}>
              <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Platforms;