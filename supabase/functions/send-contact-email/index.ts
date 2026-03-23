import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const recipients = ['hello@ceylance.com', 'chat@ceylance.com', 'mardy@ceylance.com'];

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #111; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555; width: 120px;">Name</td>
            <td style="padding: 10px 0; color: #111;">${name}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Email</td>
            <td style="padding: 10px 0; color: #111;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Company</td>
            <td style="padding: 10px 0; color: #111;">${company}</td>
          </tr>` : ''}
          <tr style="background: #f9fafb;">
            <td style="padding: 10px 6px; font-weight: bold; color: #555; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #111; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">Sent from the Ceylance website contact form</p>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Ceylance Website <hello@ceylance.com>',
        to: recipients,
        reply_to: email,
        subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
        html: htmlBody,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Resend API error [${res.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error sending contact email:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
