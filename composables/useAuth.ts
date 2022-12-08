import useSupabase from "./useSupabase";

const useAuth = () => {
  const user = useState("user", () => null);

  const { supabase } = useSupabase();
  supabase.auth.onAuthStateChange((event, session) => {
    user.value = session?.user || null;
  });

  const signUp = async ({ email, password,...metadata }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/profile`,
        data: metadata
      },
    });
    if (error) throw error;
    return data.user;
  };

  const logIn = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data.user;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const isLoggedIn = () => !!user.value;
  return {
    user,
    signUp,
    logIn,
    isLoggedIn,
    signOut,
  };
};

export default useAuth;