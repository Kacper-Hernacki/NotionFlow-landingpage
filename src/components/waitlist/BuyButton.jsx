
const BuyButton = ({ styles, onClick }) => (
  <a target="_blank" href="https://hernackikacper.gumroad.com/l/notionflow-standard">
    <button onClick={onClick} type="button" className={`mt-8 min-w-[200px] py-4 font-poppins font-bold text-[18px] text-primary bg-yellow-300 rounded-[10px] outline-none ${styles}`}>
      Buy Demo for 10$
    </button>
  </a>
);

export default BuyButton;