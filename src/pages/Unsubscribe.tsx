import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!token) { setStatus("invalid"); return; }

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

    fetch(`${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: anonKey },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.valid === false && d.reason === "already_unsubscribed") setStatus("already");
        else if (d.valid) setStatus("valid");
        else setStatus("invalid");
      })
      .catch(() => setStatus("invalid"));
  }, [token]);

  const handleConfirm = async () => {
    setStatus("loading");
    try {
      const { error } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
      if (error) throw error;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <SEO
        title="Unsubscribe from Ceylance emails"
        description="Manage your Ceylance email preferences and unsubscribe from our updates in one click. No account or login required."
        canonical="https://ceylance.com/unsubscribe"
        noindex
      />
      <div className="max-w-md w-full text-center space-y-6">
        {status === "loading" && <p className="text-muted-foreground">Loading…</p>}
        {status === "valid" && (
          <>
            <h1 className="font-display text-2xl font-bold">Unsubscribe</h1>
            <p className="text-muted-foreground text-sm">Click below to stop receiving emails from Ceylance.</p>
            <button onClick={handleConfirm} className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
              Confirm Unsubscribe
            </button>
          </>
        )}
        {status === "already" && (
          <>
            <h1 className="font-display text-2xl font-bold">Already Unsubscribed</h1>
            <p className="text-muted-foreground text-sm">You've already been unsubscribed from our emails.</p>
          </>
        )}
        {status === "success" && (
          <>
            <h1 className="font-display text-2xl font-bold">Unsubscribed</h1>
            <p className="text-muted-foreground text-sm">You won't receive any more emails from us.</p>
          </>
        )}
        {status === "invalid" && (
          <>
            <h1 className="font-display text-2xl font-bold">Invalid Link</h1>
            <p className="text-muted-foreground text-sm">This unsubscribe link is invalid or has expired.</p>
          </>
        )}
        {status === "error" && (
          <>
            <h1 className="font-display text-2xl font-bold">Something Went Wrong</h1>
            <p className="text-muted-foreground text-sm">Please try again later or contact us directly.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
