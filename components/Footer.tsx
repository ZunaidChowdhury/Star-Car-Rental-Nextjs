import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => (
  <footer className='flex flex-col text-gray-300  mt-[100px] border-t border-theme-primary bg-black'>
    {/* footer top */}
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 py-10 max-w-[1440px] w-[80%] mx-auto'>
      {/* child 1 site logo n description  */}
      <div className='flex flex-col justify-start items-start gap-6 w-[250px]' >
        <Image src='/mine/StarCarRental-logo.png' alt='logo' width={200} height={18} className='object-contain' />
        <p className='text-base text-gray-300'>
          Star Car Rental is the best luxury car rental company in Bangladesh, providing the top new cars in the market, we have a big fleet of 120+ sport and luxury cars, we are known for the professional service we provide along with  the best rates.
        </p>
      </div>
      {/* child 2 footer links */}
      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold text-theme-primary">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="footer-links"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* footer bottom  */}
    <div className='flex flex-col md:flex-row justify-between items-center flex-wrap mt-10 border-t border-theme-primary  py-10 max-w-[1440px] w-[80%] mx-auto'>
      <p className="text-gray-300">© Star Car Rental LLC. All Rights Reserved.</p>

      <div className="footer__copyrights-link ">
        <Link href="/" className="footer-links">
          Privacy & Policy
        </Link>
        <Link href="/" className="footer-links">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;

