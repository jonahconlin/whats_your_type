import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type for survey response data
export interface SurveyResponseData {
  q1_casual: string;
  q2_serious: string;
  q3_friendly: string;
  q4_playful: string;
  q5_quirky: string;
  q6_authoritative: string;
  q7_professional: string;
  q8_formal: string;
  q9_funny: string;
  q10_trendy: string;
}

// Function to submit survey response to Supabase
export async function submitSurveyResponse(responses: SurveyResponseData) {
  const { data, error } = await supabase
    .from('survey_responses')
    .insert([responses])
    .select();

  if (error) {
    console.error('Error submitting survey response:', error);
    throw error;
  }

  return data;
}
