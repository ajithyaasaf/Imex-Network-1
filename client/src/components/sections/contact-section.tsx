import { MapPin, Phone, Mail, CheckCircle2, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useState } from "react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  location: z.string().min(2, "Please enter project location"),
  description: z.string().min(10, "Please provide a brief description (minimum 10 characters)"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const offices = [
  {
    id: 1,
    city: "Chennai, India",
    type: "Headquarters",
    address: "18 C, Rayala Towers - III, 158, Anna Salai, Chennai - 600 002",
    phones: ["+91 98431 10585", "+91 44 23506452"],
    email: "chennai@imex.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8411523694734!2d80.25423831482189!3d13.047985290802974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a68e3f8b0f%3A0x3e1c8df1b78e8f8e!2sAnna%20Salai%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
  },
  {
    id: 2,
    city: "Madurai, India",
    type: "Regional Office",
    address: "No. 82, Pandiya Vellalar Street, Madurai, Tamilnadu - 625 001",
    phones: ["+91 98423 33807", "+91 0452 4382072"],
    email: "madurai@imex.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7665894717595!2d78.11947631482006!3d9.925201292851234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
  },
  {
    id: 3,
    city: "Foshan, China",
    type: "Sourcing Hub",
    address: "DeYi Commercial Building, 4th Construction Road, 2nd Floor, Lecong Town, Shunde, Foshan, Guangdong - 528 315",
    phones: ["+86 18689244807", "+86 13217573736"],
    email: "foshan@imex.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59540.89537726633!2d113.09399672167967!3d22.895828700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403fefbf5b0d6f7%3A0x1e1c8df1b78e8f8e!2sFoshan%2C%20Guangdong%20Province%2C%20China!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "",
      location: "",
      description: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    
    try {
      if (!db) {
        throw new Error("Database not initialized. Please complete Firebase setup.");
      }
      
      await addDoc(collection(db, "contactInquiries"), {
        ...data,
        status: "new",
        createdAt: new Date(),
      });
      
      setSubmitSuccess(true);
      
      toast({
        title: "Thank you for your inquiry!",
        description: "We'll contact you within 24 hours to discuss your project.",
      });

      form.reset();
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "Unable to submit your inquiry. Please try calling us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start Your Project
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Share your project details and our team will get back to you with a tailored solution
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          <div className="lg:col-span-3">
            {submitSuccess ? (
              <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-green-500" data-testid="success-message">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Inquiry Received!
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Thank you for reaching out. Our team will review your project details and contact you within 24 hours.
                  </p>
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>What happens next?</strong>
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Our team reviews your requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>We prepare a customized proposal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>You'll receive a call or email within 24 hours</span>
                      </li>
                    </ul>
                  </div>
                  <Button
                    onClick={() => setSubmitSuccess(false)}
                    variant="outline"
                    className="mt-8"
                    data-testid="button-submit-another"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-imex-red rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Project Inquiry
                    </h3>
                    <p className="text-sm text-gray-600">All fields marked with * are required</p>
                  </div>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                className="h-12 text-base"
                                data-testid="input-name" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Company Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your Company Ltd." 
                                className="h-12 text-base"
                                data-testid="input-company" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="john@company.com" 
                                className="h-12 text-base"
                                data-testid="input-email" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Phone Number *</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="+91 98765 43210" 
                                className="h-12 text-base"
                                data-testid="input-phone" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Project Type *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 text-base" data-testid="select-project-type">
                                  <SelectValue placeholder="Select your project type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="hospital">Hospital Projects</SelectItem>
                                <SelectItem value="hotel">Hotel & Resort Projects</SelectItem>
                                <SelectItem value="villa">Villa & Apartment Developments</SelectItem>
                                <SelectItem value="institute">Institutes & Corporate Spaces</SelectItem>
                                <SelectItem value="retail">Branded Retail Outlets</SelectItem>
                                <SelectItem value="other">Other Projects</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Project Location *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g., Chennai, India" 
                                className="h-12 text-base"
                                data-testid="input-location" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">Project Description *</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Tell us about your project requirements, timeline, budget, and any specific needs..."
                              className="text-base resize-none"
                              data-testid="textarea-description"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full h-14 bg-imex-red hover:bg-red-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                      disabled={isSubmitting}
                      data-testid="button-submit-inquiry"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting Your Inquiry...
                        </span>
                      ) : (
                        "Submit Project Inquiry"
                      )}
                    </Button>
                    
                    <p className="text-xs text-center text-gray-500 mt-4">
                      By submitting this form, you agree to be contacted about your project inquiry
                    </p>
                  </form>
                </Form>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Offices
              </h3>
              <div className="space-y-5">
                {offices.map((office) => (
                  <div 
                    key={office.id} 
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow" 
                    data-testid={`office-${office.id}`}
                  >
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-imex-red" />
                        {office.city}
                      </h4>
                      <p className="text-xs text-imex-red font-semibold uppercase tracking-wide mt-1">
                        {office.type}
                      </p>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <p className="text-gray-600 leading-relaxed">
                        {office.address}
                      </p>
                      
                      <div className="pt-3 border-t border-gray-200 space-y-2">
                        {office.phones.map((phone, idx) => (
                          <a 
                            key={idx}
                            href={`tel:${phone.replace(/\s/g, '')}`} 
                            className="flex items-center gap-2 text-gray-700 hover:text-imex-red transition-colors group"
                            data-testid={`phone-${office.id}-${idx}`}
                          >
                            <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="group-hover:underline">{phone}</span>
                          </a>
                        ))}
                        
                        <a 
                          href={`mailto:${office.email}`} 
                          className="flex items-center gap-2 text-gray-700 hover:text-imex-red transition-colors group"
                          data-testid={`email-${office.id}`}
                        >
                          <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="group-hover:underline">{office.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gradient-to-br from-imex-red to-red-700 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-3">Need Immediate Assistance?</h4>
                <p className="text-sm opacity-90 mb-4">
                  Call our headquarters directly for urgent inquiries
                </p>
                <a 
                  href="tel:+919843110585"
                  className="flex items-center justify-center gap-2 bg-white text-imex-red font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors"
                  data-testid="link-call-headquarters"
                >
                  <Phone className="w-5 h-5" />
                  +91 98431 10585
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Find Us on the Map
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div key={office.id} className="group">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{office.city}</p>
                    <p className="text-xs text-gray-500 uppercase">{office.type}</p>
                  </div>
                </div>
                <iframe
                  src={office.mapUrl}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl shadow-md group-hover:shadow-lg transition-shadow"
                  title={`Map of ${office.city}`}
                  data-testid={`map-${office.id}`}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
