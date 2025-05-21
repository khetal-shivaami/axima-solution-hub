
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
  orderId?: string; // Add orderId field
}

interface PaymentResponse {
  success: boolean;
  paymentLink?: string;
  message?: string;
  error?: string;
}

export async function getPaymentLink(data: PaymentRequestData): Promise<PaymentResponse> {
  try {
    console.log("Payment service called with data:", data);
    
    // Generate a unique order ID if not provided
    if (!data.orderId) {
      data.orderId = `ORDER-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }
    
    // In a real implementation, this would be your actual payment API endpoint
    // For testing, we'll simulate the API response
    // Replace this with your actual API call when ready
    /*
    const response = await fetch('https://your-payment-api-endpoint.com/create-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
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
    */
    
    // For testing purposes, we'll simulate a successful response
    console.log("Simulating payment link generation for order:", data.orderId);
    return {
      success: true,
      paymentLink: `https://your-payment-gateway.com/pay?order=${data.orderId}&amount=${data.orderTotal}`,
    };
  } catch (error) {
    console.error('Payment service error:', error);
    return {
      success: false,
      error: 'Failed to connect to payment service',
    };
  }
}
