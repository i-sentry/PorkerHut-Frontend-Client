import React from 'react'
import NavBar from '../components/nav-component/NavBar'
import BreadCrumbs from "../components/BreadCrumbs";
import BlogBanner from '../assets/images/BlogBanner.png'
import SuyaImg from '../assets/images/SuyaImg.png'
import ServiceForm from "../components/services-component/ServiceForm";
import Footer from '../components/footer-component/Footer';




const WeekendKills = () => {
  return (
    <>
        <div>

                <div className="overflow-x-hidden">
                    <nav className="mb-20">
                        <NavBar />
                            </nav>
                            <div className="container  max-w-screen-xl ">
                                <div
                                className=" md:block xxs:flex flex-col items-center justify-center w-full md:h-[330px] bg-cover bg-center py-20 md:px-20 lg:px-28"
                                style={{
                                    backgroundImage: ` url('${BlogBanner}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    width: "100vw",
                                }}
                                >
                                <h1 className="mb-2 text-3xl font-medium text-[#fff]">
                                    Weekend Kills
                                </h1>

                                <BreadCrumbs
                                    items={[
                                    {
                                        name: "Home",
                                        link: "/",
                                    },
                                    {
                                        name: "Weekend Kills",
                                        link: "/weekend",
                                    },
                                    ]}
                                />
                                </div>
                            </div>
                </div>
        </div>
        <div className=" bg-[#F4F4F4] mt-20 rounded-md max-w-[1360px] m-auto md:flex">
        <div className=" p-6 flex-1 md:p-16">
          <h1 className=" text-4xl mb-4 font-bold text-[#333]">Our Weekend Kills</h1>
          <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
            Lorem ipsum dolor sit amet consectetur. Tristique rhoncus nulla mollis dui in in in aliquet. 
            Dapibus aenean sed felis adipiscing habitant a amet volutpat. Auctor donec at nisl justo
            vel ut faucibus. Ornare elit aenean at nunc integer facilisis at facilisi velit. Lorem ipsum
            dolor sit amet consectetur. Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus aenean
            sed felis adipiscing habitant a amet volutpat. Auctor donec at nisl justo vel ut faucibus. 
            Ornare elit aenean at nunc integer facilisis at facilisi velit.Lorem ipsum dolor sit amet 
            consectetur. Tristique rhoncus nulla mollis dui in in in aliquet. Dapibus aenean sed felis 
            adipiscing habitant a amet volutpat. Auctor donec at nisl justo vel ut faucibus. Ornare elit 
            aenean at nunc integer facilisis at facilisi velit.
          </p>
        </div>
        <figure className=" flex-1">
          <img
            className="object-cover h-full p-6 md:p-0"
            src={SuyaImg}
            alt=""
          />
        </figure>
      </div>

      <section className="w-full h-full md:p-14">
        <ServiceForm
          text="How can we help? Please contact us and we will get back to you as soon as possible. If you have an inquiry about your order, you can respond directly to the order confirmation email or contact us via chat."
          title="Send us a Message"
        />
      </section>

      <footer>
        <Footer />
      </footer>


    </>
  )
}

export default WeekendKills