-- let's discuss about he acid properties of the database
-- Atomicity
-- Consistency
-- Isolation
-- Durability
Start transaction;
update  transaction set amount = amount + 100 where customer_id = 1;
-- Consistency
update  transaction set amount = amount + 100 where customer_id = 1;
where amount >= 100;
-- Isolation
Start transaction;
Select * from transaction where customer_id = 1 for update;
update transaction set amount = amount - 100 where customer_id = 1;
update transaction set amount = amount - 100 where customer_id = 2;
commit;
-- Durability
commit;
-- once completed data can't be change or lost

