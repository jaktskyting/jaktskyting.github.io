-- auto-generated definition
create table profiles
(
    id         uuid not null
        constraint profiles_pkey
            primary key
        constraint profiles_id_fkey
            references auth.users,
    updated_at timestamp with time zone,
    username   text
        constraint profiles_username_key
            unique
        constraint username_length
            check (char_length(username) >= 3),
    avatar_url text,
    website    text
);

-- alter table profiles
--     owner to supabase_admin;

grant delete, insert, references, select, trigger, truncate, update on profiles to postgres;

grant delete, insert, references, select, trigger, truncate, update on profiles to anon;

grant delete, insert, references, select, trigger, truncate, update on profiles to authenticated;

grant delete, insert, references, select, trigger, truncate, update on profiles to service_role;

