import ServicesCard from "../shared/ServicesCard";
interface OtherProducts {
  title: string;
  img: string;
  link: string;
}

const otherProducts: OtherProducts[] = [
  {
    title: "sim trays",
    img: "/otherproducts/trays.png",
    link: "",
  },
  {
    title: "sim batteries",
    img: "/otherproducts/batteries.png",
    link: "",
  },
  {
    title: "phone covers",
    img: "/otherproducts/covers.png",
    link: "",
  },
] as const;
const OtherProducts = () => {
  return (
    <div className="mx-8">
        
      <h1 className="text-2xl font-bold">Other Products</h1>
      <div className="grid grids-cols-1 md:grid-cols-4 gap-4 mt-6">
        {otherProducts.map((item, index) => {
          return (
            <div key={index}>
              <ServicesCard
                title={item.title}
                img={item.img}
                link={item.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherProducts;