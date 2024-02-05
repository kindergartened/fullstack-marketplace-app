create table orders{
    id bigintprimary key,
    prodcount int not null,
    totalprice int not null,
    orderadress varchar(128) not null
}

create sequence orders_id_seq;