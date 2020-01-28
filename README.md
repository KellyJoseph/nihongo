# nihongo
Serverless backend for a kanji learning app
This repo consistes of three seperate services (microservices), one for user CRUD, one for kanji CRUD and one for scores CRUD. 
Within each of these services are a number of functions, each of which is running on AWS Lambda.
These services are uploaded to lamba by navigating to that serice's directory and executing the sls deploy commnad. This results in each of the functions in that service being deployed to AWS Lambda, along with associated API gateway endpoints, permissions and Dynamo database tables.
The serverless.yml document generates a cloudformation document that creates all of the infrastructure, and then uploads the functions to run on it. The path to each of the handlers for each function is described within the serverless.yml file.
