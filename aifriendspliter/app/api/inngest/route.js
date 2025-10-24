import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { paymentReminders } from "@/lib/inngest/payments-reminders";


// Create an API that serves your Inngest functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    paymentReminders,
  ],
});
