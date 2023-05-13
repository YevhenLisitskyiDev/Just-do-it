import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://wsfrrsjhsrbtdsbfnbgq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzZnJyc2poc3JidGRzYmZuYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwMDM2MDEsImV4cCI6MTk5OTU3OTYwMX0.bRJVWKkvqgQcLkgzsavH0Y5UmdSFd7V02vt8FF6M7m0"
);
