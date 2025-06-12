
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const constitutionTypes = [
  "Company",
  "LLP", 
  "HUF",
  "Individual",
  "AOP",
  "BOI",
  "Trust",
  "Co-op Society"
];

const formSchema = z.object({
  legalName: z.string().min(1, "Legal name is required"),
  domainName: z.string().min(1, "Domain name is required"),
  registeredAddress: z.string().min(1, "Registered office address is required"),
  itContactName: z.string().min(1, "IT contact name is required"),
  itMobile: z.string().min(10, "Valid mobile number is required"),
  itEmail: z.string().email("Valid email is required"),
  accountsContactName: z.string().min(1, "Accounts contact name is required"),
  accountsMobile: z.string().min(10, "Valid mobile number is required"),
  accountsEmail: z.string().email("Valid email is required"),
  signatoryContactName: z.string().min(1, "Signatory contact name is required"),
  signatoryMobile: z.string().min(10, "Valid mobile number is required"),
  signatoryEmail: z.string().email("Valid email is required"),
  constitutionTypes: z.array(z.string()).min(1, "At least one constitution type is required"),
  constitutionOther: z.string().optional(),
  msmeNo: z.string().optional(),
  msmeCertificate: z.any().optional(),
  pan: z.string().min(1, "PAN is required"),
  gstNo: z.string().min(1, "GST registration number is required"),
  tan: z.string().min(1, "TAN is required"),
  gstCertificate: z.any().optional(),
  panCopy: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

const EntityForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      legalName: "",
      domainName: "",
      registeredAddress: "",
      itContactName: "",
      itMobile: "",
      itEmail: "",
      accountsContactName: "",
      accountsMobile: "",
      accountsEmail: "",
      signatoryContactName: "",
      signatoryMobile: "",
      signatoryEmail: "",
      constitutionTypes: [],
      constitutionOther: "",
      msmeNo: "",
      pan: "",
      gstNo: "",
      tan: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      console.log("Form data:", data);
      // Handle form submission here
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConstitutionChange = (type: string, checked: boolean) => {
    const currentTypes = form.getValues("constitutionTypes");
    if (checked) {
      form.setValue("constitutionTypes", [...currentTypes, type]);
      if (type === "Other") {
        setShowOtherInput(true);
      }
    } else {
      form.setValue("constitutionTypes", currentTypes.filter(t => t !== type));
      if (type === "Other") {
        setShowOtherInput(false);
        form.setValue("constitutionOther", "");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Axima Corporation Customer Registration KYC Form 2025
            </h1>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Basic Entity Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                  Basic Entity Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="legalName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Legal Name of the Entity *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter legal name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="domainName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Domain Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter domain name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="registeredAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Registered Office Address *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter complete registered office address"
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Separator />

              {/* IT Department Contact */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                  IT Department Contact
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="itContactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name of Contact Person *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="itMobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter mobile number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="itEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Separator />

              {/* Accounts & Finance Contact */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                  Accounts & Finance Contact
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="accountsContactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name of Contact Person *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="accountsMobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter mobile number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="accountsEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Separator />

              {/* Authorized Signatory Contact */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                  Authorized Signatory Contact
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="signatoryContactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name of Contact Person *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="signatoryMobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter mobile number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="signatoryEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Separator />

              {/* Constitution Type */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                  Type of Constitution (Tick whichever is applicable) *
                </h2>
                
                <FormField
                  control={form.control}
                  name="constitutionTypes"
                  render={() => (
                    <FormItem>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {constitutionTypes.map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox
                              id={type}
                              onCheckedChange={(checked) => handleConstitutionChange(type, checked as boolean)}
                            />
                            <Label htmlFor={type} className="text-sm">{type}</Label>
                          </div>
                        ))}
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="Other"
                            onCheckedChange={(checked) => handleConstitutionChange("Other", checked as boolean)}
                          />
                          <Label htmlFor="Other" className="text-sm">Other</Label>
                        </div>
                      </div>
                      
                      {showOtherInput && (
                        <FormField
                          control={form.control}
                          name="constitutionOther"
                          render={({ field }) => (
                            <FormItem className="mt-4">
                              <FormControl>
                                <Input placeholder="Please specify other constitution type" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Separator />

              {/* Registration Details */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                  Registration Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="msmeNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>MSME No. (If registered with MSME)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter MSME number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="msmeCertificate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>MSME Certificate (If any)</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => field.onChange(e.target.files?.[0])}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PAN *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter PAN number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="gstNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GST Registration No. *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter GST number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="tan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TAN *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter TAN number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Separator />

              {/* Document Attachments */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                  Document Attachments
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="gstCertificate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Attach GST Certificate Copy</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => field.onChange(e.target.files?.[0])}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="panCopy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Attach PAN Copy</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => field.onChange(e.target.files?.[0])}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Form"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EntityForm;
