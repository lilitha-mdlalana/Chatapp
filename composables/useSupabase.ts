import { createClient } from "@supabase/supabase-js";

const useSupabase = () => {
  const runtimeConfig = useRuntimeConfig()
  const supabaseUrl = "https://rtjpurjprnjxaqqksglu.supabase.co";
  const supabaseAPIKey = runtimeConfig.public.SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseAPIKey);
  return { supabase };
};

export default useSupabase;
