import Breadcrumbs from "@/components/BreadCrumbs";
import Footer from "@/components/mainlayout/Footer";
import Navbar from "@/components/mainlayout/Navbar";
import SEO from "@/components/seo/SEO";
import ServicesCard from "@/components/ServicesCard";




interface Services {
  title: string;
  img: string;
  link: string;
}
const services: Services[] = [
  {
    title: "phone screen replacement",
    link: "/services/screen-replacement",
    img: "/repair.png",
  },
  {
    title: "Computer/laptop services",
    link: "/services/screen-replacement",
    img: "/repair.png",
  },
  {
    title: "Other services",
    link: "/services/screen-replacement",
    img: "/repair.png",
  },
] as const;
const Services = () => {
  return (
    <>
    <SEO 
     title="Services -HackRepairs"
     description="We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands."
     name="HackRepairs."
     type="service  page"
     image="/hack-repairs.jpg"/>
      <Navbar />
      <Breadcrumbs />
      <div className="container mx-auto p-6">
        {/* hero section */}
        <section className="relative mb-12">
          <img
            width={600}
            height={500}
            src="/images/sell-with-us-hero.jpg"
            alt="Sell with us"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <h1 className="text-white text-4xl font-bold text-center">
              Explore Our services
            </h1>
          </div>
        </section>
       
      </div>
      
       {/* services section */}
       <section className="bg-gray-100 p-6">
          <h2 className="text-3xl font-semibold capitalize text-center mb-6">
            Our Services
          </h2>
          <div className="flex flex-col md:flex-row gap-4 ">
            {services.map((service, index) => (
              <div key={index}>
                {" "}
                <ServicesCard
                  title={service.title}
                  img={service.img}
                  link={service.link}
                />
              </div>
            ))}
          </div>
        </section>
      <Footer />
    </>
  );
};
export default Services;