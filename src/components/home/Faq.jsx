import styles, { layout } from "../../style";
import { Link } from "react-router-dom";
import { fadeInVariants, slideInFromLeft, slideInFromRight } from "../../utils";
import { motion } from "framer-motion";

const Faq = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className="w-full flex justify-between items-start md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <motion.div
        className="w-full md:w-1/2"
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInFromLeft}>
          <h2 className={styles.heading2}>
            Frequently Asked Questions<br className="sm:block hidden" /> <span className="text-2xl text-gray-500">Have another question? contact me <Link className="text-[#32bbcf]" to="/support">directly</Link></span>
          </h2>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInFromRight}>
          <div className="w-full flex flex-col gap-2">
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-xl text-[#32bbcf] font-medium">
                What do I get exactly
              </div>
              <div className="collapse-content">
                <p className="mb-2">
                  1/ The NextJS starter with all the boilerplate code you need to run an online business, landing page
                  or
                  web app with Notion as a CMS (Content Management System).
                  <br></br>
                  Also, depending on purchased version there are included payment system, a database, login, a blog, UI
                  components, and much more.
                  <br></br>
                  The repo is available in:
                  - Javascript and Typescript
                  - /app router and /pages router.
                </p>

                <p className="mb-2">
                  2/ The documentation helps you set up your app from scratch, write copy that sells, and ship fast.
                </p>

                <p className="mb-2">
                  3/ Access to our Discord with makers who build fast to stay accountable!
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl text-[#32bbcf] font-medium">
                Can I get a refund?
              </div>
              <div className="collapse-content">
                <p>Yes! You can request a refund within 7 days of your purchase. Reach out by email at
                  hernackikacper@gmail.com.</p>
              </div>
            </div>
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl text-[#32bbcf] font-medium">
                Is it a website template?
              </div>
              <div className="collapse-content">
                <p>It is more than website, it is a customizable code template for your projects or online
                  businesses.</p>
              </div>
            </div>
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl text-[#32bbcf] font-medium">
                My Tech Stack is different, can I still use it?
              </div>
              <div className="collapse-content">
                <p>Yes, as far as you want to utilize Notion with Next.js or React in your code, you can just swap other
                  tech.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Faq;