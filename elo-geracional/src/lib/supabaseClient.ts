import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Initialize the Supabase client
// For usage in Client Components. For Server Components, consider using @supabase/ssr
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
