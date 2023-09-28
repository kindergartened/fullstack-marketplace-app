create table users (
    id bigint primary key,
    name varchar(64) not null,
    created_at timestamptz not null,
    updated_at timestamptz
);