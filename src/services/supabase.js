import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rfwvjqnqxqarorbdqkgy.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmd3ZqcW5xeHFhcm9yYmRxa2d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNDA5OTYsImV4cCI6MjAxMzkxNjk5Nn0.woZlrgI4YBfUB6WWzMhPLcRmOckZxV3GFo4cGxg8jGU`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
