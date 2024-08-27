
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  business_name: z.string().min(2).max(50),
  phone: z.number().min(2).max(50),
  business_location: z.string().min(2).max(50),
  email: z.string().email().max(50),
  product: z.string().min(2).max(50),
});

export default function SellWithusForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      business_name: "",
      phone:NaN,
      business_location: "",
      email: "",
      product: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <h1 className="font-bold  text-3xl capitalize text-center">
        Sign up form and sell
      </h1>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex mx-8 flex-col mb-6  items-center"
      >
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2  w-full text-2xl gap-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>Enter your full name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Business Name */}
          <FormField
            control={form.control}
            name="business_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe Enterprises" {...field} />
                </FormControl>
                <FormDescription>Enter your business name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  w-full text-2xl gap-8">
          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+1234567890" {...field} />
                </FormControl>
                <FormDescription>Enter your phone number.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Business Location */}
          <FormField
            control={form.control}
            name="business_location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="123 Main Street, City, Country"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Enter your business location.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  w-full text-2xl gap-8">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormDescription>Enter your email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Product */}
          <FormField
            control={form.control}
            name="product"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product</FormLabel>
                <FormControl>
                  <Input placeholder="Describe your product" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the product you want to sell.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className='bg-button  w-[30%] font-bold'>Submit</Button>
      </form>
    </Form>
  );
}