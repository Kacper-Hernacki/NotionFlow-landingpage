import styles from "../style";
import { fadeInVariants, slideInFromLeft, slideInFromRight, slideInFromTop } from "../utils/index.js";
import { motion } from "framer-motion";

const Pricing = () => (
  <section id="pricing" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>

    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInFromLeft}>
          <h2 className={styles.heading2}>
            What is the pricing? <br className="sm:block hidden" /> <span className="text-2xl text-[#32bbcf]">save 50% by joining the waitlist</span>
          </h2>
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
          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Find which option suits your criteria.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>


    <section className="flex items-center justify-center mt-10 pb-10">
      <div className="p-4 sm:px-10 flex flex-col justify-center items-center text-base h-100vh mx-auto" id="pricing">
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 grid-rows-1">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            className="flex flex-col h-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInFromLeft}
              className="flex flex-col h-full"
            >

              <div className="ring-1 ring-gray-200 rounded-3xl p-8 xl:p-10 h-full">
                <div className="flex items-center justify-between gap-x-4">
                  <h3 id="tier-standard" className="text-gray-500 text-2xl font-semibold leading-8">Standard</h3>
                </div>
                <p className="mt-4 text-base leading-6 text-gray-600">Landing Page</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="line-through text-2xl font-sans text-gray-500/70">$59</span><span
                  className="text-5xl font-bold tracking-tight text-gray-400">$29</span>
                  One time payment
                </p>
                <button
                  onClick={() => document.getElementById("my_modal_2").showModal()}
                  aria-describedby="tier-standard"
                  className="w-full text-[#32bbcf] ring-1 ring-inset ring-[#32bbcf] hover:ring-blue-300 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >Available soon
                </button>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-[#32bbcf]">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Helpful Videos, Docs and comments
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-[#32bbcf]">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Notion template
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-[#32bbcf]">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Notion CMS setup
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-[#32bbcf]">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Tailwindcss components
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-[#32bbcf]">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    One home page + terms & cookies
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-[#32bbcf]">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Vercel hosting setup
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            className="flex flex-col h-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInFromTop}
              className="flex flex-col h-full"
            >
              <div className="ring-2 ring-[#32bbcf] rounded-3xl p-8 xl:p-10 h-full">
                <div className="flex items-center justify-between gap-x-4">
                  <h3 id="tier-extended" className="text-[#32bbcf] text-2xl font-semibold leading-8">Extended</h3>
                  <p className="rounded-full bg-[#32bbcf] px-2.5 py-1 text-xs font-semibold leading-5 text-gray-950">
                    Most popular</p>
                </div>
                <p className="mt-4 text-base leading-6 text-gray-600">Web app</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="line-through text-2xl font-sans text-gray-500/70">$99</span><span
                  className="text-5xl font-bold tracking-tight text-[#32bbcf]">$49</span>
                  One time payment
                </p>
                <button
                  onClick={() => document.getElementById("my_modal_2").showModal()}
                  aria-describedby="tier-extended"
                  className="w-full bg-[#32bbcf] text-gray-950 shadow-sm hover:bg-gray-950 hover:text-gray-50 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >Available soon
                </button>

                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Helpful Videos, Docs and comments
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Notion templates
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Notion CMS setup
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Tailwindcss components
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    3 pages + terms & cookies + Login/Signin
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Vercel hosting setup
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-[#32bbcf]">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Auth
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-[#32bbcf]">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Firebase config
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-[#32bbcf]">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Stripe checkout setup
                  </li>

                </ul>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            className="flex flex-col h-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInFromRight}
              className="flex flex-col h-full"
            >
              <div className="ring-1 ring-gray-200 rounded-3xl p-8 xl:p-10">
                <div className="flex items-center justify-between gap-x-4">
                  <h3 id="tier-standard" className="text-gray-400 text-2xl font-semibold leading-8">Pro</h3>
                </div>
                <p className="mt-4 text-base leading-6 text-gray-600">SaaS</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="line-through text-2xl font-sans text-gray-500/70">$199</span><span
                  className="text-5xl font-bold tracking-tight text-gray-400">$99</span>
                  One time payment
                </p>
                <button
                  onClick={() => document.getElementById("my_modal_2").showModal()}
                  aria-describedby="tier-standard"
                  className="w-full text-[#32bbcf] ring-1 ring-inset ring-[#32bbcf] hover:ring-blue-300 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >Available soon
                </button>

                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-400 xl:mt-10">
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Helpful Videos, Docs and comments
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Notion templates
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Notion CMS setup
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Tailwindcss components
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Pages every SaaS needs (more details soon)
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Vercel hosting setup
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Auth
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Firebase config
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Stripe checkout setup
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-[#32bbcf]">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Mails Setup
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-[#32bbcf]">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Updates
                  </li>
                  <li className="flex gap-x-3 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-[#32bbcf]">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Discounts for other products
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  </section>
);

export default Pricing;