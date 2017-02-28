To start the db: "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe".  
On this machine: `mongod` from anywhere.  

To connect to mongodb with the shell: "C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe

####Indexes 
- Every collection is created with a separate list of _ids called an index. This enables fast lookups on this criteria.  
- We can also create an index on another field, but mongo only supports one index per collection (in addition to the default id index).   
- in the shell, use the correct db and run, e.g: `db.artists.createIndex({ name: "text"})`. This creates a text index on the name field in the artists collection.  

####Mongo Shell 
- Open from inside project folder (not sure if this is neceesary)
- `show dbs` - give list of databases  
- `use *` - switch to a particular database. In the shell, we can only work on a specific database.  