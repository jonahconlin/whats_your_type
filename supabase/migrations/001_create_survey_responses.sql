-- Create survey_responses table for "What's Your Type" survey
-- This table stores each user's font selections for all 10 adjectives

CREATE TABLE IF NOT EXISTS survey_responses (
  -- Primary key
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Timestamp when the response was submitted
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  
  -- Font selections for each adjective question (q1-q10)
  -- Each stores the final selected font name
  q1_casual TEXT NOT NULL,           -- Question 1: Casual
  q2_serious TEXT NOT NULL,          -- Question 2: Serious
  q3_friendly TEXT NOT NULL,         -- Question 3: Friendly
  q4_playful TEXT NOT NULL,          -- Question 4: Playful
  q5_quirky TEXT NOT NULL,           -- Question 5: Quirky
  q6_authoritative TEXT NOT NULL,    -- Question 6: Authoritative
  q7_professional TEXT NOT NULL,     -- Question 7: Professional
  q8_formal TEXT NOT NULL,           -- Question 8: Formal
  q9_funny TEXT NOT NULL,            -- Question 9: Funny
  q10_trendy TEXT NOT NULL           -- Question 10: Trendy
);

-- Enable Row Level Security (RLS)
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to INSERT data (anonymous survey submissions)
-- This allows users to submit survey responses without authentication
CREATE POLICY "Allow anonymous inserts" ON survey_responses
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow anyone to SELECT data (for viewing aggregate results)
-- You can remove this if you don't want public read access
CREATE POLICY "Allow public read access" ON survey_responses
  FOR SELECT
  TO anon
  USING (true);

-- Add index on created_at for efficient time-based queries
CREATE INDEX idx_survey_responses_created_at ON survey_responses(created_at DESC);

-- Comment on table
COMMENT ON TABLE survey_responses IS 'Stores font preference survey responses for the What''s Your Type survey';
