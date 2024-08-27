import Footer from "@/components/mainlayout/Footer";
import Navbar from "@/components/mainlayout/Navbar";
import SellWithusForm from "@/components/sell-with-us/SellWithUsForm";



const Sell: React.FC = () => {
  return(
  <div>
    <Navbar />
    <SellWithusForm />
    <Footer />
  </div>
)
  
};
export default Sell;