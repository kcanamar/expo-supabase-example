import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://lgemgkrzitdqsdkpwdrl.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnZW1na3J6aXRkcXNka3B3ZHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2MTM2ODIsImV4cCI6MTk5NTE4OTY4Mn0.bDYFnLatzUpRdTYiX8YqnrPOWoeQBVgArp0id-WBRao"

console.log("debug lib/supabase.js", {supabaseURL, supabaseAnonKey})

export const supabase = createClient(supabaseURL, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    }
})