import { MdOutlinePayment } from "react-icons/md";
import { GrCreditCard } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { Layout } from "antd";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";

export const Foot = () => {
  const navigate = useNavigate();
  return (
    <Layout className=" bg-slate-100 text-black px-8 md:px-12 py-4 ">
      <div className="container mx-auto text-xs md:text-lg">
        <div className="flex justify-center gap-x-10 md:gap-x-20">
          <div
            className="flex gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <MdOutlinePayment size={40} />
            <div className=" space-y-2 ml-2 font-poppins">
              <h4 className=" font-bold">ONLINE PAYMENT</h4>
              <h5 className="text-gray-400 text-base	">Payment methods</h5>
            </div>
          </div>
          <div
            className="flex gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <GrCreditCard size={40} />
            <div className=" space-y-2 ml-2 font-poppins">
              <h4 className=" font-bold ">100% SAFE</h4>
              <h5 className="text-gray-400 text-base	">View our benifits</h5>
            </div>
          </div>
        </div>
        <div className=" my-10 border-t-2  border-black">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 my-3 md:my-5 gap-x-4">
            <div className=" col-span-2 ">
              <h3 className=" font-varela text-sm md:text-lg font-bold">
                Shinay SHOES
              </h3>
              <p className="text-gray-500 my-3">
                We are Shinay Shoes from Kathmandu, Nepal. With the vision of
                crafting design and comfort in footwear we set on this venture
                to stir domestic production and manufacturing.
              </p>
              <div className="my-5">
                <div className="flex  text-sm md:text-lg items-center text-gray-500 mb-2">
                  <FaLocationArrow size={15} />
                  <h3 className=" ml-2">Kathmandu, Nepal</h3>
                </div>
                <div className="flex  text-sm md:text-lg items-center text-gray-500 mb-2 ">
                  <MdPhoneIphone size={15} />
                  <h3 className=" ml-2">Phone: 01-5344748</h3>
                </div>
                <div className="flex  text-sm md:text-lg items-center text-gray-500 ">
                  <MdOutlineMail size={15} />
                  <h3 className=" ml-2">Email: info@shinayshoes.com</h3>
                </div>
                <div className="mt-3 flex items-center gap-x-2">
                  <Link to={"https://www.facebook.com/"}>
                    <ImFacebook2 className=" text-[18px] md:text-3xl" />
                  </Link>
                  <Link to={"https://www.instagram.com/"}>
                    <FaInstagramSquare className=" text-[20px] md:text-3xl" />
                  </Link>
                  <Link to={"https://www.youtube.com/"}>
                    <FaYoutube className=" text-[24px] md:text-3xl" />
                  </Link>
                </div>
              </div>
            </div>

            <div className=" space-y-1 my-1.5">
              <h3 className=" font-varela  text-sm md:text-lg font-bold">
                OUR STORES
              </h3>
              <Link>
                <h4 className="text-gray-500 text-lg  hover:text-lime-700 o">
                  Main Branch
                </h4>
              </Link>
              <Link>
                <h4 className="text-gray-500  text-sm md:text-lg  hover:text-lime-700 ">
                  Shoe Box
                </h4>
              </Link>
              <Link>
                <h4 className="text-gray-500  text-sm md:text-lg  hover:text-lime-700 ">
                  Shinay Ason
                </h4>
              </Link>
              <Link>
                <h4 className="text-gray-500  text-sm md:text-lg  hover:text-lime-700 ">
                  Shinay Banepa
                </h4>
              </Link>
              <Link>
                <h4 className="text-gray-500  text-sm md:text-lg  hover:text-lime-700 ">
                  Shinay Dharan
                </h4>
              </Link>
              <Link>
                <h4 className="text-gray-500  text-sm md:text-lg  hover:text-lime-700 ">
                  View More
                </h4>
              </Link>
            </div>
            <div className=" space-y-1 my-1.5">
              <h3 className=" font-varela  text-sm md:text-lg font-bold">
                USEFUL LINKS
              </h3>
              <Link>
                <h4 className="text-gray-500  text-sm md:text-lg  hover:text-lime-700 ">
                  Terms & Conditions
                </h4>
              </Link>
              <Link>
                <h4 className="text-gray-500  text-sm md:text-lg  hover:text-lime-700 ">
                  Shipping and Return Policy
                </h4>
              </Link>
              <Link>
                <h4 className="text-gray-500 text-lg  hover:text-lime-700 ">
                  Privacy Policy
                </h4>
              </Link>
            </div>
            <div className=" space-y-1 my-1.5">
              <h3 className=" font-varela text-sm md:text-lg  font-bold">
                FOOTER MENU
              </h3>
              <Link>
                <h4 className="text-gray-500 text-sm md:text-lg  hover:text-lime-700 ">
                  Shop
                </h4>
              </Link>
              <Link>
                <h4 className="text-gray-500 text-sm md:text-lg  hover:text-lime-700 ">
                  Outlets
                </h4>
              </Link>
              <Link>
                <h4 className="text-gray-500 text-sm md:text-lg  hover:text-lime-700 ">
                  Blog
                </h4>
              </Link>
              <Link>
                <h4 className="text-gray-500 text-sm md:text-lg my-1  hover:text-lime-700 ">
                  Help and FAQs
                </h4>
              </Link>
            </div>
            <div className=" space-y-1 my-1.5">
              <h3 className=" font-varela text-sm md:text-lg font-bold">
                CUSTOMER SERVICE
              </h3>
              <Link to="/about">
                <h4 className="text-gray-500 text-sm md:text-lg  hover:text-lime-700 ">
                  About Us
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Foot;
