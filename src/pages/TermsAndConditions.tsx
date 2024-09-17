import Breadcrumbs from "@/components/BreadCrumbs";
import Footer from "@/components/mainlayout/Footer";
import Navbar from "@/components/mainlayout/Navbar";

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar />
      {/* content */}
      <Breadcrumbs />
      <main className='mx-8'>
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to Hack Repairs. These terms and conditions govern your use of
        our website and services. By accessing or using our website, you agree
        to comply with these terms. Please read them carefully before proceeding
        with any transactions or interactions.
      </p>
      1. Use of Website:
      <ul className="list-disc">
        <li>
          You must be at least 18 years old to use our website or make purchases
          unless supervised by a parent or guardian.
        </li>
        <li>
          You agree to provide accurate and complete information when creating
          an account or making purchases on our website.
        </li>
      </ul>
      </main>
      .
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
