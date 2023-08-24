
'use client'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qzgkahqztgspippxrwoq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6Z2thaHF6dGdzcGlwcHhyd29xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwNzU3MTAsImV4cCI6MjAwNDY1MTcxMH0.iZuCBR16QWk1OKhjg7qvaWUsC35Dy4aM2BrqTI2WWJI'
const supabase = createClient(supabaseUrl, supabaseKey)
// process.env.SUPABASE_KEY
export default supabase