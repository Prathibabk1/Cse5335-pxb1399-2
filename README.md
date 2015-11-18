# Data Source
For this project, I used the data from [link](https://inventory.data.gov/dataset/032e19b4-5a90-41dc-83ff-6e4cd234f565/resource/38625c3d-5388-4c16-a30f-d105432553a4). It is free datasource provide by [DATA .GOV](http://www.data.gov/developers/apis). The data provides information about institutions for higher education. Data includes instituton name, address, city, state and zipcode.I have selected 100 records from this data set and used them to query SQl and NoSql databases.

# Commands to run scripts on heroku

To run script on heroku use the following command
```sh
heroku run bash
```
**Postgres**
 
 --- To run postgres queries:
- To run the query with primary key from command line use:
```sh
node postgres_q1.js
```
> The command prompt prompts for the primary key Id. Since the id's are not in sequential order, some of the id's that can be used for querying are 100663, 100760, 101286. The primary key's labeled as UNITID can also looked up from the input file input1.csv on github.

-   To run the query with a non-primary key from command line
```sh
node postgres_q2.js
```
> The command prompt prompts for non-primary field city. Example of cities in the database are Phoenix, Seward, Birmingham. Make sure the first letter for city is in CAPS to retrieve the fields correctly.

- To drop the postgres database use the command:
```sh
node postgres_drop.js
```
- To create the tables in postgres use the command: 
```sh
node postgres_create.js
```
- To insert the data into postgres database use the command:
```sh
node postgres_insert.js
```
**MongoDB**

--- To run queries on Mongolab database
- To run the query with primary key from command line use:
```sh
node mongo_q1.js
```
> The command prompt prompts for the primary key Id. Since the id's are not in sequential order, some of the id's that can be used for querying are 100663, 100760, 101286. The primary key UNITID can also looked up from the input file input.json on github.

-   To run the query with a non-primary key from command line
```sh
node mongo_q2.js
```
> The command prompt prompts for non-primary field city. Example of cities in the database are Phoenix, Seward,Birmingham. Make sure the first letter for city is in CAPS to query the fields correctly.
- To drop the MongoDB database use the command:
```sh
node mongo_drop.js
```
- To create the tables and insert data into MongoDB use the command: 
```sh
node mongo_ins.js
```
**Redis**

---To run queries on Redis database:
- To run the query with primary key from command line
```sh
node redis_q1.js
```
> The command prompt prompts for the primary key Id. Since the id's are not in sequential order, some of th id's that can be used for querying are 100663, 100760, 101286. The primary key UNITID can also looked up from the input file input.json on github.

-   To run the query with a non-primary key from command line use:
```sh
node redis_q2.js
```
> The command prompt prompts for non-primary field city. Example of cities in the database are Phoenix, Seward, Birmingham. Make sure the first letter for city is in CAPS to query and retrieve the fields correctly.
- To drop the Redis database use the command:
```sh
node redis_drop.js
```
- To create table and insert data into Redis use the command: 
```sh
node redis_insert.js
```

# Implementation easy

I found implementation of postgres was easy as, I have had a good hands on experience with relational database like MySQL. A lot of good documentation, examples and tutorials found online made it easier.

# Implemenation difficult

I found implementaion of redis more hard to follow because, I did not have much experience with NoSQL database and the online support was not much with respect to querying a non-primary key. However, mongo was not much difficult to implement because of good documentation availability.


----
 

 






