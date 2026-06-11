-- Database Schema para Elo Geracional (ODS 3)

-- Habilitar a extensao UUID
create extension if not exists "uuid-ossp";

-- Tabela de Perfis de Usuarios
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  role text check (role in ('senior', 'student')) not null,
  full_name text not null,
  avatar_url text,
  bio text,
  phone text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabela de Atividades Ofertadas
create table activities (
  id uuid default uuid_generate_v4() primary key,
  senior_id uuid references profiles(id) on delete cascade not null,
  title text not null,
  description text not null,
  date_time timestamp with time zone not null,
  duration_minutes integer,
  status text check (status in ('open', 'matched', 'completed', 'cancelled')) default 'open',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabela de Match (Estudantes interessados ou confirmados na atividade)
create table matches (
  id uuid default uuid_generate_v4() primary key,
  activity_id uuid references activities(id) on delete cascade not null,
  student_id uuid references profiles(id) on delete cascade not null,
  status text check (status in ('pending', 'accepted', 'rejected')) default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique (activity_id, student_id)
);

-- Policies (RLS) - Row Level Security
-- Pode ser configurado posteriormente no painel do Supabase
alter table profiles enable row level security;
alter table activities enable row level security;
alter table matches enable row level security;
