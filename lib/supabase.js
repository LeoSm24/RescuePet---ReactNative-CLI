import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qywwwxsczfpzsbdofnsw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5d3d3eHNjemZwenNiZG9mbnN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNjI0NjgsImV4cCI6MjA1ODgzODQ2OH0.g5B9L80pXOPOl72eL27s6LolsQ0l1DDgdmiH6CnU60M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
