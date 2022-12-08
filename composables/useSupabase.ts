import { createClient } from "@supabase/supabase-js";

const useSupabase = () => {
  const supabaseUrl = "https://rtjpurjprnjxaqqksglu.supabase.co";
  const supabaseAPIKey = process.env.SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseAPIKey);
  return { supabase };
};

export default useSupabase;
