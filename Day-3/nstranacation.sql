-- here is property that sql follow Acid that stands for atomcity ,consistency, isolation, durability...
/*  
A - Atomicity - No partial updates "All or nothing"
C - Consistency - Data is always follow users
I - Isolation - Prevents multiple user from interferring
D - Durability - Once save , data is never lost
*/
start transaction
update account set balance = balance - 1000 where account_no = 1;
update account set balance = balance - 1000 where account_no = 999;
rollback
-- Consistency
Start transaction;
update accounts set balance = balance - 1000 where account_no = 1;
where balance >= 500;
commit;
-- isolation
start transaction;
Select * from account where account_no = 1 for update;
update account Set balance = balance - 500 where account_no = 1;
update account Set balance = balance - 500 where account_no = 2;
commit
-- durability
commit
-- once completed data can't be change or lost




