create table users (
    id bigint primary key,
    email varchar(128) not null,
    name varchar(64) not null,
    hash_password varchar(256) not null,
    created_at timestamptz not null,
    updated_at timestamptz
);

create sequence users_id_seq;

create table goods (
    id bigint primary key,
    title varchar(128) not null,
    description varchar(512) not null,
    price int not null default 0,
    img_url varchar(256),
    created_at timestamptz not null,
    updated_at timestamptz
);

create sequence goods_id_seq;
create table carts (
    id bigint primary key,
    user_id bigint references users(id),
    good_id bigint references goods(id),
    count int default 0,
    created_at timestamptz not null,
    updated_at timestamptz
);

create sequence carts_id_seq;



INSERT INTO goods (id, title, description, price, img_url, created_at) values (1, 'Puma', 'good puma', 100, 'https://a.lmcdn.ru/product/R/T/RTLADJ435101_22781336_3_v1.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (2, 'Adidas', 'good abibas', 150, 'https://a.lmcdn.ru/product/R/T/RTLADG307601_23254253_3_v1.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (3, 'Nike', 'good nike', 200, 'https://a.lmcdn.ru/product/R/T/RTLADK770101_23274514_3_v1.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (4, 'Rita', 'good rita', 177, 'https://a.lmcdn.ru/product/R/T/RTLADK005401_22866505_3_v1.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (5, 'Demix', 'good dimask', 200, 'https://a.lmcdn.ru/product/M/P/MP002XM0VR9D_22469550_2_v1.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (6, 'Outventure', 'good wintreout', 101, 'https://a.lmcdn.ru/product/R/T/RTLADC993001_21867910_3_v1.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (7, 'New Balance', 'good balancenew', 200, 'https://a.lmcdn.ru/product/R/T/RTLADE153501_22224506_3_v1.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (8, 'MirSever', 'good mirsever', 299, 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0V5UZ_19374347_2_v1.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (9, 'Russia', 'good russia', 300, 'https://i.pinimg.com/originals/48/ac/30/48ac30df014bc89c13b5677c36f41386.png', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (10, 'Leopard', 'just a boot', 1, 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65d1ec09f2867c0e5f40eb77_65d1ef81c8e97712d24e5dd4/scale_1200', '2023-01-01');


create table favourites (
    id bigint primary key,
    user_id bigint references users(id),
    good_id bigint references goods(id),
    created_at timestamptz not null,
    updated_at timestamptz
);

create sequence favourites_id_seq;
