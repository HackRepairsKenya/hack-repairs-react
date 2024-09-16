
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IoLocationOutline } from "react-icons/io5";
import { toast } from "@/components/ui/use-toast";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const FormSchema = z.object({
  Name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  contactMethod: z.string().min(1, {
    message: "Please select a contact method.",
  }),
});

import { motion } from "framer-motion";
import Navbar from "@/components/mainlayout/Navbar";
import Footer from "@/components/mainlayout/Footer";
import Breadcrumbs from "@/components/BreadCrumbs";
import SEO from "@/components/seo/SEO";

export default function Contact() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Name: "",
      email: "",
      phone: "",
      contactMethod: "",
    },
  });

  const [loading, setLoading] = useState(false);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);

    try {
      const response = await axios.post("https://rochman.mutabletech.co.ke/bookings", {
        name: data.Name,
        email: data.email,
        phone: data.phone,
        date: new Date().toISOString(),
      });

      toast({
        title: "Booking successful!",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(response.data, null, 2)}</code>
          </pre>
        ),
      });

      form.reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // The error is an AxiosError, so you can safely access response properties
        toast({
          title: "An error occurred",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-red-500 p-4">
              <code className="text-white">{JSON.stringify(error.response?.data || error.message, null, 2)}</code>
            </pre>
          ),
        });
      } else {
        // Handle unexpected errors
        toast({
          title: "An unexpected error occurred",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-red-500 p-4">
              <code className="text-white">{JSON.stringify(error, null, 2)}</code>
            </pre>
          ),
        });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <SEO 
     title="Contact Us -HackRepairs"
     description="We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands."
     name="HackRepairs."
     type="website"
     url="https://hackrepairs.co.ke/contact"
     metaKeywords="hack repairs,call,kilifi"
      image="https://hackrepairs.co.ke/contact.png"/>
    <Navbar />
    <Breadcrumbs />
      {/* Hero Section */}
      <section className="relative ">
        <img
        width={600}
        height={500}
          src="/contact.png"
          alt="Sell with us"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-white text-4xl font-bold text-center">Contact Us</h1>
        </div>
      </section>
      <div className="container grid grid-cols-1 gap-4 md:grid-cols-2">
        <motion.div
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 75 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.0 }}
          className="flex flex-wrap -mx-4"
        >
          <div className="p-5">
            <div className="mb-3 p-5">
              <h1 className="text-2xl mb-3 font-semibold ">Our Open Hours</h1>
              <ul className="list-disc p-5">
                <li className="leading-loose text-sm">Monday to Friday: 9:00 AM - 5:00 PM</li>
                <li className="leading-loose text-sm">Saturday: 10:00 AM - 2:00 PM</li>
              </ul>
            </div>
            <div className="p-5">
              <h1 className="text-2xl mb-3 font-semibold ">Contact Us</h1>
              <p className="flex text-sm font-semibold leading-loose">
                <span className="text-button"><IoLocationOutline className="mr-2 h-5 w-5"/></span>Charo Wa Mae, Alongside Pwani University, Mombasa Malindi road.
                P.O. Box 123 Kilifi, Kenya.
              </p>
              <p className="flex text-sm font-semibold mt-3">
                <span className="text-button"><FaPhoneAlt className="mr-2 h-5 w-5"/></span>+254 741 699 821
              </p>
              <p className="flex text-sm font-semibold mt-3">
                <span className="text-button"><IoMdMail className="mr-2 h-5 w-5"/></span>info@hackrepairs.co.ke
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.25 }}
          className="flex flex-wrap -mx-4"
        >
          <div className="container p-5">
            <div className="mb-4 mt-4">
              <h1 className="text-2xl capitalize font-semibold ">
                Book and Schedule a call from our agents
              </h1>
            </div>
            <div className="p-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="pr-3 space-y-6"
                >
                  <FormField
                    name="Name"
                    control={form.control}
                    render={() => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <input
                            placeholder="Full Names  ..."
                            autoComplete="off"
                            className="w-full border border-gray-300 p-2 outline-none"
                            {...form.register("Name")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={() => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <input
                            placeholder="Email  ..."
                            autoComplete="off"
                            className="w-full border border-gray-300 p-2 outline-none"
                            {...form.register("email")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={() => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <input
                            placeholder="Phone"
                            autoComplete="off"
                            className="w-full border border-gray-300 p-2 outline-none"
                            {...form.register("phone")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How Shall We Contact You?</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select contact method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="phone">Phone</SelectItem>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="bg-button capitalize" type="submit" disabled={loading}>
                    {loading ? "Booking..." : "Book a call"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}