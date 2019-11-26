select complete.title
,count(complete.inventory_id) as count
from(
select *
from film
join inventory
on film.film_id = inventory.film_id
) as complete
group by complete.title
order by count desc
