-- Adds a constrained "education level" field to manuscripts, used to tailor
-- AI tone suggestions (manuscript-writing-assist) to the intended audience.

create type education_level as enum (
  'preschool',
  'kindergarten',
  'high_school',
  'undergrad',
  'grad'
);

alter table public.manuscripts
  add column education_level education_level;
