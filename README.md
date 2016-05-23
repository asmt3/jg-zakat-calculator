# Zakat Calculator for JustGiving
This Zakat calculator app is made of two components: a frontend and a scraper.

## [Frontend](frontend/README.md)
- Static HTML app written with Angular and Twitter Bootstrap
- Content will be served via the JG Umbraco CMS

## [Nisab Poller](nisab-poller/README.md)
- Takes nisab values from e-nisab.com, collates the data and saves a single JSON file to an S3 bucket
- Written in Node.js intended to be deployed by AWS Lambda by CloudWatch scheduler
