create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  first_name text not null,
  last_name text,
  email text not null,
  phone text,
  company text,
  service text,
  message text,
  source text default 'contact_form',
  created_at timestamptz default now()
);

-- Enable RLS but allow service role full access
alter table leads enable row level security;

create policy "Service role full access" on leads
  for all using (true) with check (true);
