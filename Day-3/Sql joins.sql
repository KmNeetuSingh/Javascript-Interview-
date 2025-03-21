-- ## SQL JOINS -- ### 


-- **1. INNER JOIN**  
-- 🔹 **Definition:** Returns only matching records from both tables.  

-- ```sql
-- SELECT customers.name, orders.order_id  
-- FROM customers  
-- INNER JOIN orders ON customers.id = orders.customer_id;
-- ```
-- ✅ *Returns customers who have placed orders.*  

-- ---

-- ### **2. LEFT JOIN (LEFT OUTER JOIN)**  
-- 🔹 **Definition:** Returns all records from the left table and matching records from the right table. If no match, NULL is returned.  

-- ```sql
-- SELECT employees.name, departments.dept_name  
-- FROM employees  
-- LEFT JOIN departments ON employees.dept_id = departments.id;
-- ```
-- ✅ *Returns all employees, even those without a department (NULL in dept_name).*  

-- ---

-- ### **3. RIGHT JOIN (RIGHT OUTER JOIN)**  
-- 🔹 **Definition:** Returns all records from the right table and matching records from the left table. If no match, NULL is returned.  

-- ```sql
-- SELECT employees.name, departments.dept_name  
-- FROM employees  
-- RIGHT JOIN departments ON employees.dept_id = departments.id;
-- ```
-- ✅ *Returns all departments, even if they have no employees (NULL in employee name).*  

-- ---

-- ### **4. FULL JOIN (FULL OUTER JOIN)**  
-- 🔹 **Definition:** Returns all records from both tables. If no match, NULL is returned on the missing side.  

-- ```sql
-- SELECT customers.name, orders.order_id  
-- FROM customers  
-- FULL JOIN orders ON customers.id = orders.customer_id;
-- ```
-- ✅ *Returns all customers and all orders, even if they don’t match.*  

-- ---

-- ### **5. CROSS JOIN**  
-- 🔹 **Definition:** Returns the Cartesian product of both tables (each row in Table A pairs with every row in Table B).  

-- ```sql
-- SELECT products.name, categories.category_name  
-- FROM products  
-- CROSS JOIN categories;
-- ```
-- ✅ *Returns all possible product-category combinations.*  

-- Customer who visits but didn't buy anything

Select customer_id , count (customer_id) as count_no_trans
from Visit as a
left  join 
transaction  as  balance
on A.Visit_id = balance.Visit_id
where balance.Visit_id is null
Group by customer_id

