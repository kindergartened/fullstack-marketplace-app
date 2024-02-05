alter table goods add column type varchar(128) not null;
alter table goods add column sex varchar(128) not null;
alter table goods add column brand varchar(128) not null;
alter table goods add column season varchar(128) not null;
alter table goods add column sizegood int not null;

UPDATE goods SET (type='sneackers', sex='Male', brand='Puma', season='summer', sizegood=42) where id=1;
UPDATE goods SET (type='sneackers', sex='Male', brand='Adidas', season='summer', sizegood=43) where id=2;
UPDATE goods SET (type='sneackers', sex='Female', brand='Nike', season='summer', sizegood=39) where id=3;
UPDATE goods SET (type='boots', sex='Female', brand='Rita', season='winter', sizegood=40) where id=4;
UPDATE goods SET (type='sneackers', sex='Male', brand='Demix', season='summer', sizegood=41) where id=5;
UPDATE goods SET (type='boots', sex='Male', brand='Outventure', season='winter', sizegood=43) where id=6;
UPDATE goods SET (type='sneackers', sex='Male', brand='New Balance', season='autumn', sizegood=44) where id=7;
UPDATE goods SET (type='shoes', sex='Male', brand='MirSever', season='summer', sizegood=46)  where id=8;
UPDATE goods SET (type='bast', sex='Male', brand='Russia', season='summer', sizegood=41)   where id=9;
UPDATE goods SET (type='boots', sex='Female', brand='Leopard', season='winter', sizegood=42)  where id=10;