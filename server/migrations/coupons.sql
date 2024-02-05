create table Coupons{
    id bigint primary key,
    sale int not null,
    promo varchar(128) not null,
    conditions varchar(128) null,
    usingcount int not null
        with(usingcount >=0)
}

INSERT INTO Coupons(id,sale, promo, conditions,usingcount) values(1,10,'First10','первый заказ',1);
INSERT INTO Coupons(id,sale, promo, conditions,usingcount) values(2,10,'Promo10',,4);
INSERT INTO Coupons(id,sale, promo, conditions,usingcount) values(3,5,'Big5','На первый заказ от 5000 рублей',1);
INSERT INTO Coupons(id,sale, promo, conditions,usingcount) values(4,15,'First10','На заказ от 50000 рублей',3);
INSERT INTO Coupons(id,sale, promo, conditions,usingcount) values(5,5,'First10','На товары фирмы Puma',2);

create sequence Coupons_id_seq;