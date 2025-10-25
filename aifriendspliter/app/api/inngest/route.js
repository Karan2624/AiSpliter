import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { paymentReminders } from "@/lib/inngest/payments-reminders";
import { spendingInsights } from "@/lib/inngest/spending-insights";


// Create an API that serves your Inngest functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    paymentReminders,
    spendingInsights,
  ],
});
