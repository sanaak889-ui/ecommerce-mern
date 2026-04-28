import React from "react";
import { IoChatboxOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="border-t bg-white pb-1 pt-6">
      <div className="container mx-auto flex flex-col gap-8 px-2 lg:flex-row lg:px-0">

        {/* Part 1 - Contact */}
        <div className="part1 w-full border-r border-[rgba(0,0,0,0.1)] lg:w-[20%]">
          <h2 className="mb-4 font-semibold text-[25px]">Contact us</h2>
          <p className="pb-4 font-normal text-[13px]">
            WoWshop - Mega Super Store<br />
            SafaGoldMall F-7 Islamabad, Pakistan
          </p>
          <a className="mb-2 block text-[13px]" href="mailto:someone@example.com">
            sales@yourcompany.com
          </a>
          <span className="mb-5 mt-3 block font-semibold text-[#ff5252] text-[22px]">
            (+92) 1111-246-246
          </span>
          <div className="flex items-center gap-2">
            <IoChatboxOutline className="text-[#ff5252] text-[40px]" />
            <span className="font-semibold text-[16px]">
              Online Chat<br />
              Get Expert Help
            </span>
          </div>
        </div>

        {/* Part 2 - Links */}
        <div className="part2 mt-5 flex w-full gap-8 lg:mt-0 lg:w-[55%] lg:gap-12">
          {/* Column 1 */}
          <div className="w-1/2">
            <h2 className="mb-4 font-semibold text-[18px]">Products</h2>
            <ul className="space-y-2">
              <li><a className="text-[14px] hover:text-primary" href="/">Prices drop</a></li>
              <li><a className="text-[14px] hover:text-primary" href="/">New products</a></li>
              <li><a className="text-[14px] hover:text-primary" href="/">Best sales</a></li>
              <li><a className="text-[14px] hover:text-primary" href="/">Contact us</a></li>
              <li><a className="text-[14px] hover:text-primary" href="/">Sitemap</a></li>
              <li><a className="text-[14px] hover:text-primary" href="/">Stores</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-1/2">
            <h2 className="mb-4 font-semibold text-[18px]">Our company</h2>
            <ul className="space-y-2">
              <li><a className="text-[14px] hover:text-primary" href="/">Delivery</a></li>
              <li><a className="text-[14px] hover:text-primary" href="/">Legal Notice</a></li>
              <li><a className="text-[14px] hover:text-primary" href="/">Terms and conditions of use</a></li>
              <li><a className="text-[14px] hover:text-primary" href="/">About us</a></li>
              <li><a className="text-[14px] hover:text-primary" href="/">Secure payment</a></li>
              <li><a className="text-[14px] hover:text-primary" href="/">Login</a></li>
            </ul>
          </div>
        </div>

        {/* Part 3 - Newsletter */}
        <div className="part3 mt-5 flex w-full flex-col pl-0 pr-8 lg:mt-0 lg:w-[35%] lg:pl-8">
          <h2 className="mb-2 font-semibold text-[18px] lg:mb-4">Subscribe to newsletter</h2>
          <p className="mb-4 text-[13px]">
            Subscribe to our latest newsletter to get news about special discounts.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              className="h-[45px] w-full rounded-sm border pl-4 pr-4 outline-none focus:border-[rgba(0,0,0,0.3)]"
              placeholder="Your Email Address"
            />
           <button
              type="button"
              className="bg-primary w-full rounded-sm py-2 font-semibold text-white
                         transition-colors transition-transform duration-300
                         hover:scale-105 hover:bg-[#ff5252] hover:shadow-lg"
            >
              SUBSCRIBE
            </button>
           <label className="mt-2 flex items-center gap-2 text-[13px]">
              <input 
                type="checkbox" 
                className="h-4 w-4 accent-[#ff5252]" 
              />
              I agree to the terms and conditions and the privacy policy
            </label>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
