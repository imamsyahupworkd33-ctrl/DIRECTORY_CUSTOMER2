// Sama persis dengan project Supabase yang dipakai dashboard admin Anda.
// Jika Anda mengganti Supabase project di /config.js utama, ganti juga di sini.

const SUPABASE_URL = "https://drryamosodluupxbbtee.supabase.co";

const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRycnlhbW9zb2RsdXVweGJidGVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyMzEwMTgsImV4cCI6MjA5ODgwNzAxOH0.q_Dq4w3Ugv7rCq3NeEXSIYEuNCbsG19Ghsj2vo0_TOc";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
