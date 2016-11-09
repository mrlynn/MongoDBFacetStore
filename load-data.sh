#!/bin/sh
mongo localhost:27017/hackathon --eval "db.products.remove({})"
mongo localhost:27017/hackathon --eval "db.categories.remove({})"
node data/fake-televisions.js
node data/fake-cameras.js
node data/fake-printers.js
node data/fake-refrigerators.js
node data/category-seeder.js
