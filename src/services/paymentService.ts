/**
 * Simulated luxury payment gateway integrations (e.g. Razorpay).
 */

export interface PaymentTransaction {
  transactionId: string;
  status: 'captured' | 'failed';
  amount: number;
}

export const paymentService = {
  /**
   * Simulates processing a credit/debit card payment.
   */
  processCardPayment(amount: number): Promise<PaymentTransaction> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const generatedId = `TXN-${Math.floor(1000000000 + Math.random() * 9000000000)}`;
        resolve({
          transactionId: generatedId,
          status: 'captured',
          amount
        });
      }, 2000);
    });
  }
};
