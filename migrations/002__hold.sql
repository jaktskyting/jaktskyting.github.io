-- auto-generated definition
create table hold
(
    hold_id             bigint generated by default as identity
        constraint hold_pkey
            primary key,
    stevne_id           bigint                                                            not null,
    user_id             uuid                                                              not null,
    rekkefolge          integer                                                           not null,
    figur               text                                                              not null,
    avstand_meter       integer,
    skytestilling       text                                                              not null,
    totalt_antall_skudd integer,
    inner_tredd         integer,
    ytter_treff         integer,
    kommentar           text,
    inserted_at         timestamp with time zone default (now() AT TIME ZONE 'utc'::text) not null,
    updated_at          timestamp with time zone default (now() AT TIME ZONE 'utc'::text) not null
);

alter table hold
    owner to supabase_admin;

grant select, update, usage on sequence hold_hold_id_seq to postgres;

grant select, update, usage on sequence hold_hold_id_seq to anon;

grant select, update, usage on sequence hold_hold_id_seq to authenticated;

grant select, update, usage on sequence hold_hold_id_seq to service_role;

grant delete, insert, references, select, trigger, truncate, update on hold to postgres;

grant delete, insert, references, select, trigger, truncate, update on hold to anon;

grant delete, insert, references, select, trigger, truncate, update on hold to authenticated;

grant delete, insert, references, select, trigger, truncate, update on hold to service_role;

