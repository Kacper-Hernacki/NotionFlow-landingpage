import { layout } from "../style";
import { Link } from "react-router-dom";
import { moderndev } from "../assets/index.js";
import { fadeInVariants, slideInFromTop } from "../utils/index.js";
import { motion } from "framer-motion";

const Bio = () => (
  <motion.div
    className="w-full"
    initial="hidden"
    whileInView="visible"
    variants={fadeInVariants}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideInFromTop}
      className="w-full">
      <section id="product" className={layout.sectionReverse}>
        <div className="font-semibold">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row">
              <img className="w-[310px] h-[310px] object-cover mx-auto" src={moderndev} alt="" />
              <div className="flex flex-col gap-4 text-2xl text-justify">
                <h2 className="text-4xl font-bold text-gray-100">Hey, I am Kacper 👋</h2>
                <p>Since 2019 I was focused on building projects, it led me to start working as a freelancer.</p>
                <p>After making few apps which were a total disaster, I have started learning in public and sharing my
                  journey
                  on
                  different social platforms.
                </p>
                <p>It allowed me to join a startup in web3 industry and master more complex and commercial skills. When
                  I saw
                  how
                  professional, business focused software works, what are the difficulties and time consuming features
                  to
                  implement, I started to build <span className="font-bold text-[#32bbcf]">NotionFlow</span></p>
                <p>As more and more people are falling in love with Notion, I decided to launch it.</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4 text-2xl text-justify">
            <p>
              When I was creating seperate web apps with Notion as a CMS, I realized that many things have to be set
              over
              and over again. Inspired to build systems, I knew that well built boilerplate can be a perfect, helpful
              product. Each developer is extremely happy, when he can save hours or days of debugging or configuring
              stack, so <span className="font-bold text-[#32bbcf]">NotionFlow</span> will:
            </p>
            <ul className="flex flex-col gap-4 text-2xl text-justify">
              <li>1. <span className="text-gray-100">Save time and focus</span> on things which are repetitive and time
                consuming
              </li>
              <li>2. Allow to <span className="text-gray-100">manage content from Notion</span> level</li>
              <li>3. Easily <span className="text-gray-100">scale</span> your app</li>
            </ul>
          </div>
          <div className="mt-4 text-2xl text-justify">
            About <span className="text-gray-100">20,000 people</span> trust me and follow my journey on my social media
            platforms combined, <Link target="_blank" className="underline" to="https://linktr.ee/kacperhernacki">see
            what they say.</Link>
          </div>
        </div>
      </section>
    </motion.div>
  </motion.div>
);

export default Bio;