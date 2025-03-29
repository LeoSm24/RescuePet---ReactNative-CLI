import { supabase } from '../lib/supabase';

export async function register(email, password, extraData) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return { data, error };

  // Si se registra correctamente, insertar en tabla `profiles`
  const user = data.user;

  if (user) {
    const { name, phone } = extraData;
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([{ id: user.id, name, phone, email }]);

    if (profileError) return { data, error: profileError };
  }

  return { data, error: null };
}

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function logout() {
  await supabase.auth.signOut();
}
