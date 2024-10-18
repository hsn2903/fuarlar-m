/* eslint-disable @next/next/no-img-element */
import SocialAccounts from "./social-accounts";

export default function TopHeader() {
  return (
    <div
      className={` hidden md:block text-[#3b444f] border-b border-b-[#ebf0f]`}
    >
      <div className="text-sm flex flex-col md:flex-row justify-between py-0.5 wrapper ">
        <div className="flex items-center justify-between gap-6 font-[300] px-2 md:px-0">
          <a
            href="tel:+90212-219-75-75"
            className={`flex items-center gap-[10px] text-sm `}
          >
            <span className=" tracking-wider">(0212) 219-75-75</span>
          </a>

          <p className="text-[#ebf0f7]">|</p>
          <a
            href="mailto:info@fuarara.com"
            className={`flex items-center gap-[10px] text-sm`}
          >
            info@fuarara.com
          </a>
        </div>

        <div className="flex items-center justify-between gap-6">
          <SocialAccounts />
          {/* <p className="text-[#ebf0f7]">|</p> */}

          {/* <section className="pr-[25px]">
            <div className="flex justify-end md:justify-end items-center gap-3 text-xs max-w-[960px] mx-auto h-[30px] mb-0.5">
              <Link
                href="/uyeol"
                className={`flex items-center gap-1.5 text-[#3b444f]`}
              >
                <FaUserPlus size={12} />
                <span>ÜYE OL</span>
              </Link>
              <Link
                href="/bize-yazin"
                className={`flex items-center gap-1.5 text-[#3b444f] `}
              >
                <FaPen size={12} />
                <span>BİZE YAZIN</span>
              </Link>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
}
