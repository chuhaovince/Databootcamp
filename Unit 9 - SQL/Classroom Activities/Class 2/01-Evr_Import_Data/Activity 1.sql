select first_name
, count(first_name) as Count
from actor
group by first_name
order by first_name DESC;

select count(*)
from film_actor;

select rating as Rating
,round(avg(rental_duration),2) as Rental_Duration
from film
group by Rating
order by Rating ASC;

select length
,avg(replacement_cost) as avg_cost
from film
group by length
order by avg_cost DESC
limit 10;

select sakila
