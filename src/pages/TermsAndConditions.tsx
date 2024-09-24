import Breadcrumbs from "@/components/BreadCrumbs";
import Footer from "@/components/mainlayout/Footer";
import Navbar from "@/components/mainlayout/Navbar";

const TermsAndConditions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Breadcrumbs />
      <main className="flex-grow px-8 py-12 max-w-4xl mx-auto space-y-8">
        <section>
          <h1 className="text-3xl font-extrabold text-center mb-6">
            Terms and Conditions for Products Offered
          </h1>
          <p className="leading-relaxed mb-4">
            Welcome to Hack Repairs. These terms and conditions govern your use
            of our website and services. By accessing or using our website, you
            agree to comply with these terms. Please read them carefully before
            proceeding with any transactions or interactions.
          </p>
          <h2 className="font-bold text-xl mt-8 mb-2">1. Use of Website:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>You must be at least 18 years old to use our website or make purchases unless supervised by a parent or guardian.</li>
            <li>You agree to provide accurate and complete information when creating an account or making purchases on our website.</li>
          </ul>
          
          <h2 className="font-bold text-xl mt-8 mb-2">2. Product Information:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>We strive to provide accurate and up-to-date information about our products, including descriptions, pricing, and availability.</li>
            <li>We reserve the right to modify or discontinue products at any time without prior notice.</li>
          </ul>

          <h2 className="font-bold text-xl mt-8 mb-2">3. Ordering and Payment:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>By placing an order on our website, you agree to pay the specified price for the products and any applicable taxes or shipping fees.</li>
            <li>Payments are processed securely through trusted payment gateways. We do not store credit card details.</li>
          </ul>

          <h2 className="font-bold text-xl mt-8 mb-2">4. Shipping and Delivery:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Our shipping and delivery policy governs the terms of shipment, delivery times, and costs associated with your purchases.</li>
            <li>We are not responsible for delays or issues caused by third-party shipping carriers.</li>
          </ul>

          <h2 className="font-bold text-xl mt-8 mb-2">5. Returns and Refunds:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Please review our returns and refunds policy for information on eligibility, procedures, and conditions for returning products and receiving refunds.</li>
          </ul>

          <h2 className="font-bold text-xl mt-8 mb-2">6. Privacy and Security:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Your privacy is important to us. Please review our privacy policy to understand how we collect, use, and safeguard your personal information.</li>
          </ul>

          <h2 className="font-bold text-xl mt-8 mb-2">7. Intellectual Property:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>All content on our website, including logos, trademarks, images, and text, is the property of Wemi Traders or its licensors and is protected by copyright and other intellectual property laws.</li>
            <li>You may not reproduce, distribute, or modify any content from our website without prior written permission.</li>
          </ul>

          <h2 className="font-bold text-xl mt-8 mb-2">8. Limitation of Liability:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Hack Repairs shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our website or products, including but not limited to loss of profits, data, or goodwill.</li>
          </ul>

          <h2 className="font-bold text-xl mt-8 mb-2">9. Governing Law:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>These terms and conditions are governed by the laws of Kenya, without regard to its conflict of law provisions.</li>
          </ul>
        </section>

        <section>
          <h1 className="text-3xl font-extrabold text-center mb-6">Tax Liability</h1>

          <h2 className="font-bold text-xl mb-2">1. Sales Tax:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Sales tax may be applicable based on your location and the products purchased. The amount of sales tax, if applicable, will be calculated and displayed at checkout.</li>
            <li>Customers are responsible for paying any required sales tax associated with their purchases.</li>
          </ul>

          <h2 className="font-bold text-xl mt-8 mb-2">2. International Taxes and Duties:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>For international orders, customs duties, taxes, and fees may apply upon importation into your country. These charges are determined by customs authorities and are the responsibility of the recipient.</li>
            <li>We do not collect or remit international taxes or duties. Please check with your local customs office for information on potential charges.</li>
          </ul>

          {/* Continue with other sections with similar structure */}
        </section>

        <section>
          <h1 className="text-3xl font-extrabold text-center mb-6">Terms of Service for Phone and Laptop Repairs</h1>

          <h2 className="font-bold text-xl mb-2">1. Service Agreement:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>By handing over your phone or laptop for repair, you authorize us to carry out the necessary repairs as agreed. We will only perform the work that has been authorized by you.</li>
          </ul>

          <h2 className="font-bold text-xl mt-8 mb-2">2. Diagnostics and Repair Estimates:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Upon receiving your device, we will perform a diagnostic test to determine the nature of the issue. We will provide you with an estimated cost of repair, including parts and labor. Any additional repairs or replacements will only be carried out with your explicit approval.</li>
          </ul>

          <h2 className="font-bold text-xl mt-8 mb-2">3. Warranty on Repairs:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>All repairs come with a 21-day limited warranty, covering the parts replaced and the labor involved. The warranty is void if the device has been tampered with by a third party after the repair.</li>
          </ul>

          {/* Add remaining terms for the repair services section */}
        </section>

        <p className="text-center mt-12">
          If you have any questions or concerns about these terms and conditions, please contact us at info@hackrepairs.co.ke or call us at +254 741 699 821.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
