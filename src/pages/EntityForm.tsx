import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
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

const typeofconstitution = [
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
  legalname: z.string().min(1, "Legal name is required"),
  domainname: z.string().min(1, "Domain name is required"),
  regofficeaddress: z.string().min(1, "Registered office address is required"),
  contactitpersonname: z.string().min(1, "IT contact name is required"),
  mobilenoitperson: z.string().min(10, "Valid mobile number is required"),
  emailiditperson: z.string().email("Valid email is required"),
  accountfinpersonname: z.string().min(1, "Accounts contact name is required"),
  mobileaccountfinperson: z.string().min(10, "Valid mobile number is required"),
  emailidaccountfinperson: z.string().email("Valid email is required"),
  authorizedpersonname: z.string().min(1, "Signatory contact name is required"),
  mobileauthorizedperson: z.string().min(10, "Valid mobile number is required"),
  emailidauthorizedperson: z.string().email("Valid email is required"),
  typeofconstitution: z.array(z.string()).min(1, "At least one constitution type is required"),
  constitutionOther: z.string().optional(),
  msmeno: z.string().optional(),
  msmecertificate: z.any().optional(),
  pannumber: z.string().min(1, "pannumber is required"),
  gstnumber: z.string().min(1, "GST registration number is required"),
  tan: z.string().min(1, "TAN is required"),
  gstcertificatefile: z.any().optional(),
  pancardfile: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

const EntityForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const navigate = useNavigate();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      legalname: "",
      domainname: "",
      regofficeaddress: "",
      contactitpersonname: "",
      mobilenoitperson: "",
      emailiditperson: "",
      accountfinpersonname: "",
      mobileaccountfinperson: "",
      emailidaccountfinperson: "",
      authorizedpersonname: "",
      mobileauthorizedperson: "",
      emailidauthorizedperson: "",
      typeofconstitution: [],
      constitutionOther: "",
      msmeno: "",
      pannumber: "",
      gstnumber: "",
      tan: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("Form submission started", data);
    setIsSubmitting(true);
    
    try {
      let constitutionTypesValue = data.typeofconstitution.join(", ");
      if (data.typeofconstitution.includes("Other") && data.constitutionOther) {
        constitutionTypesValue = data.typeofconstitution
          .filter(type => type !== "Other")
          .concat(data.constitutionOther)
          .join(", ");
      }
      
      const payload = {
        legalname: data.legalname,
        domainname: data.domainname,
        regofficeaddress: data.regofficeaddress,
        contactitpersonname: data.contactitpersonname,
        mobilenoitperson: data.mobilenoitperson,
        emailiditperson: data.emailiditperson,
        accountfinpersonname: data.accountfinpersonname,
        mobileaccountfinperson: data.mobileaccountfinperson,
        emailidaccountfinperson: data.emailidaccountfinperson,
        authorizedpersonname: data.authorizedpersonname,
        mobileauthorizedperson: data.mobileauthorizedperson,
        emailidauthorizedperson: data.emailidauthorizedperson,
        typeofconstitution: constitutionTypesValue,
        msmeno: data.msmeno || "",
        msmecertificate: data.msmecertificate?.[0] || null,
        pannumber: data.pannumber,
        gstnumber: data.gstnumber,
        tannumber: data.tan,
        gstcertificatefile: data.gstcertificatefile?.[0] || null,
        pancardfile: data.pancardfile?.[0] || null
      };

      console.log("Sending payload:", payload);

      const response = await fetch("https://portal-api.shiviom.com/store_aximaordedetails/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Fetch call completed. Response status:", response.status);

      if (response.ok) {
        const result = await response.json();
        console.log("API Success Response (JSON):", result);
        navigate("/entity-form-thank-you");
      } else {
        const errorText = await response.text();
        console.error(`API Error: Status ${response.status}, Body: ${errorText}`);
        alert(`Error submitting form: ${response.status} - ${errorText}. Please check console for details.`);
      }
    } catch (error) {
      console.error("Critical error during form submission or API call:", error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      alert(`Critical error: ${errorMessage}. Please check console for details.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConstitutionChange = (type: string, checked: boolean) => {
    const currentTypes = form.getValues("typeofconstitution");
    if (checked) {
      form.setValue("typeofconstitution", [...currentTypes, type]);
      if (type === "Other") {
        setShowOtherInput(true);
      }
    } else {
      form.setValue("typeofconstitution", currentTypes.filter(t => t !== type));
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
                    name="legalname"
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
                    name="domainname"
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
                  name="regofficeaddress"
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
                    name="contactitpersonname"
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
                    name="mobilenoitperson"
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
                    name="emailiditperson"
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
                    name="accountfinpersonname"
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
                    name="mobileaccountfinperson"
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
                    name="emailidaccountfinperson"
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
                    name="authorizedpersonname"
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
                    name="mobileauthorizedperson"
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
                    name="emailidauthorizedperson"
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
                  name="typeofconstitution"
                  render={() => (
                    <FormItem>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {typeofconstitution.map((type) => (
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
                    name="msmeno"
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
                    name="msmecertificate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>MSME Certificate (If any)</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => field.onChange(e.target.files)} // Pass FileList
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pannumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>pannumber *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter pannumber number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="gstnumber"
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
                    name="gstcertificatefile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Attach GST Certificate Copy</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => field.onChange(e.target.files)} // Pass FileList
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pancardfile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Attach pannumber Copy</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => field.onChange(e.target.files)} // Pass FileList
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
                  onClick={() => console.log("Submit button clicked")}
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
