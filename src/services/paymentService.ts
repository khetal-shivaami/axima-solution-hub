
interface PaymentRequestData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  domainName?: string;
  streetAddress?: string;
  apartmentSuiteUnit?: string;
  city?: string;
  state?: string;
  country?: string;
  postcode?: string;
  orderTotal: number;
  orderItems: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    licenseType: string;
  }>;
}

interface PaymentResponse {
  success: boolean;
  paymentLink?: string;
  message?: string;
  error?: string;
}

export async function getPaymentLink(data: PaymentRequestData): Promise<PaymentResponse> {
  try {
    // This is where you would make the actual API call to your payment service
    // Replace this with your actual API endpoint
    const response = await fetch('http://127.0.0.1:8000/generate_payment_link/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    // For testing purposes, we'll simulate a successful response
    // Remove this and use the actual API response in production
    if (!response.ok) {
      return {
        success: false,
        error: result.message || 'Failed to generate payment link',
      };
    }

    return {
      success: true,
      paymentLink: result.paymentLink,
    };
  } catch (error) {
    console.error('Payment service error:', error);
    return {
      success: false,
      error: 'Failed to connect to payment service',
    };
  }
}
