import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] bg-white pb-[100px] pt-3 lg:pb-3">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">

        {/* Social Icons */}
        <ul className="flex items-center gap-2">
          <li>
            <a
              href="/"
              target="_blank"
              className="group flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[rgba(0,0,0,0.1)] transition-all hover:bg-primary"
            >
              <FaFacebookF className="text-[17px] group-hover:text-white" />
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
              className="group flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[rgba(0,0,0,0.1)] transition-all hover:bg-primary"
            >
              <FaTwitter className="text-[17px] group-hover:text-white" />
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
              className="group flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[rgba(0,0,0,0.1)] transition-all hover:bg-primary"
            >
              <FaInstagram className="text-[17px] group-hover:text-white" />
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
              className="group flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[rgba(0,0,0,0.1)] transition-all hover:bg-primary"
            >
              <FaLinkedinIn className="text-[17px] group-hover:text-white" />
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
              className="group flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[rgba(0,0,0,0.1)] transition-all hover:bg-primary"
            >
              <FaYoutube className="text-[17px] group-hover:text-white" />
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="mb-0 text-center text-[13px]">
         © 2024 - Ecommerce Template
        </p>

        {/* Payment Icons */}
        <div className="flex items-center gap-2">
          <img src="/carte_bleue.png" alt="Carte Bleue" className="h-6"/>
          <img src="/visa.png" alt="Visa" className="h-6"/>
          <img src="/master_card.png" alt="MasterCard" className="h-6"/>
          <img src="/american_express.png" alt="American Express" className="h-6"/>
          <img src="/paypal.png" alt="Paypal" className="h-6"/>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
