import Breadcrumbs from "@/components/BreadCrumbs";
import Footer from "@/components/mainlayout/Footer";
import Navbar from "@/components/mainlayout/Navbar";
import SEO from "@/components/seo/SEO";
import ServicesCard from "@/components/ServicesCard";

interface Services {
  title: string;
  img: string;
  link: string;
  description: string; // Added description field
}

const services: Services[] = [
  {
    title: "Phone Screen Replacement",
    link: "/services/screen-replacement",
    img: "/repair.png",
    description: "We offer professional phone screen  replacement services for all major brands to keep your phone in top condition.",
  },
  {
    title: "Computer/Laptop Services",
    link: "/",
    img: "/laptop-repair.png",
    description: "From hardware to software issues, our expert technicians can repair and optimize your computers and laptops.",
  },
 
  {
    title: "Data Recovery Services",
    link: "/",
    img: "/data-recover.jpeg",
    description: "Our advanced data recovery solutions help you retrieve lost files from your devices securely.",
  }
  
] as const;

const Services = () => {
  return (
    <>
      <SEO 
        title="Services - HackRepairs"
        description="We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands."
        name="HackRepairs."
        type="website"
        url="https://hackrepairs.co.ke/services"
        metaKeywords="services,screen replacement, computer services, laptop services"
        image="/hack-repairs.jpg"
      />
      <Navbar />
      <Breadcrumbs />
     

      {/* services section */}
      <div className='bg-gray-200 '>
      <section className="mx-4 pb-6">
        <h2 className="text-3xl font-semibold capitalize text-center mb-6">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index}>
              <ServicesCard
                title={service.title}
                img={service.img}
                link={service.link}
                description={service.description} // Pass the description to the ServicesCard
              />
            </div>
          ))}
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;
