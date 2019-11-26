select 'city' as name
, count(*) as counts
from city

union all

select 'country'
, count(*)
from country

select 'customerID' as name,
count(*) as Counts
from customer
join address
on customer.address_id = address.address_id
join city
on address.city_id = city.city_id
where city.city = 'London'

union

select 'id'
, count(*)
from customer_list
where city = 'London'