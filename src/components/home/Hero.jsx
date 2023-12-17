import styles from "../../style";
import { gitCloneNotionFlow, notionFlow } from "../../assets";
import Button from "../waitlist/Button.jsx";
import { motion } from "framer-motion";
import { fadeInVariants, slideInFromLeft, slideInFromRight } from "../../utils";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInFromLeft}>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                Manage your<br className="sm:block hidden" />{" "}
                <span className="text-solid">Web APP</span>{" "}
              </h1>
            </div>

            <h1 className="bg-blue font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
              from Notion
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              The NextJS boilerplate with custom NOTION API connection and all you need, dedicated to launch and manage
              content from Notion level.
            </p>
            <Button styles="mt-8 lg:w-[450px]" onClick={() => document.getElementById("my_modal_2").showModal()} />
            <div className="mt-8 flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
              <p className={`${styles.paragraph} ml-2`}>
                <span className="text-white">50%</span> Discount For{" "}
                <span className="text-white">first 100</span> customers
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInFromRight}>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative max-w-2xl`}>
        <img src={notionFlow} alt="billing" className="w-[100%] h-[100%] relative z-[5] object-cover" />
        <img src={gitCloneNotionFlow} alt="terminal" className="absolute -bottom-10 object-cover max-w-[400px]" />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;