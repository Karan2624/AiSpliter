import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { helloWorld } from "@/lib/inngest/functions";

// Create an API that serves your Inngest functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld, // include your function(s) here
  ],
});
