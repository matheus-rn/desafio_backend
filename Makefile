run:
	docker-compose up

migration:
	docker-compose exec api adonis migration:run

fix:
	yarn eslint --fix app config database start --ext .js
