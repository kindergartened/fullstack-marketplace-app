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



INSERT INTO goods (id, title, description, price, img_url, created_at) values (1, 'Puma', 'good puma', 100, 'https://static.street-beat.ru/upload/iblock/a47/z15gk831h2yxkz612cm7znod7vie72bv.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (2, 'Adidas', 'good abibas', 150, 'https://static.wixstatic.com/media/8f3362_d1cb37f3c1384573af6b18a9f2359ed8~mv2.jpg/v1/fill/w_600,h_527,fp_0.50_0.50,lg_1,q_80,enc_auto/8f3362_d1cb37f3c1384573af6b18a9f2359ed8~mv2.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (3, 'Nike', 'good nike', 200, 'https://outmaxshop.ru/components/com_jshopping/files/img_products/37953/nike-air-force-1-low-x-tiffany-37953-1.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (4, 'Rita', 'good rita', 177, 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/199/280/973/525/029/100053095372b0.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (5, 'Demix', 'good dimask', 200, 'https://irecommend.ru/sites/default/files/product-images/932071/7QmflzG3hOfAEnEX32tBA.png', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (6, 'Outventure', 'good wintreout', 101, 'https://m.onlinetrade.ru/img/items/m/2309189_1.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (7, 'New Balance', 'good balancenew', 200, 'https://static.insales-cdn.com/images/products/1/5675/628913707/23.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (8, 'MirSever', 'good mirsever', 299, 'https://novosibirsk.novasport.ru/upload/iblock/c8d/pyyzx08u4j9posimeuj64e6ksiv2gpl2/47734.jpg', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (9, 'Russia', 'good russia', 300, 'https://i.pinimg.com/originals/48/ac/30/48ac30df014bc89c13b5677c36f41386.png', '2023-01-01');
INSERT INTO goods (id, title, description, price, img_url, created_at) values (10, 'Leopard', 'just a boot', 1, 'https://diva-charms.com/6499-superlarge_default/leopard-boots.jpg', '2023-01-01');


create table favourites (
    id bigint primary key,
    user_id bigint references users(id),
    good_id bigint references goods(id),
    created_at timestamptz not null,
    updated_at timestamptz
);

create sequence favourites_id_seq;
