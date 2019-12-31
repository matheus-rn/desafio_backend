run:
	docker-compose up

migration:
	docker-compose run api adonis migration:run
