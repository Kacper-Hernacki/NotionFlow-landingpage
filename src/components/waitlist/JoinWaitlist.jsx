import { Helmet } from "react-helmet";

const JoinWaitlist = () => (
  <dialog id="my_modal_2" className="modal max-w-full">
    <div className="modal-box">
      <Helmet>
        <script src="https://getlaunchlist.com/js/widget-diy.js" defer></script>
      </Helmet>
      <h3 className="text-xl text-center text-white font-semibold">Join the Waitlist</h3>
      <form className="launchlist-form mt-4 flex flex-col" action={`https://getlaunchlist.com/s/${import.meta.env.VITE_WAITLIST_ID}`} method="POST">
        <input placeholder="email" className="input input-bordered w-full" name="email" type="email"/>
        <button className="btn mt-4 bg-[#32bbcf] text-gray-950 text-xl hover:text-white" type="submit">Join</button>
      </form>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
);

export default JoinWaitlist ;