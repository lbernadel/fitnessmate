# [FitnessMate](https://fitnessmate.herokuapp.com/)

![FitnessMate Homepage](./fitnessmate-home_screenshot.jpg)

## Description
The purpose of this assignment was to utilize a Mongoose schema and Mongo database to create an application that tracks a user's daily workouts.

The application allows to the user to do the following in regards to workout plans:
1. Create a new plan of exercise activities
2. View all previously created workout plans
3. Edit existing plans to add/remove activities

**Relevant new class concepts**: NoSQL databases(MongoDB in this case), Mongoose.js, Object-document mapping

## Challenges
NoSQL databases are very confusing to me; initially, I thought it seemed easier, but I prefer the structure of SQL tables because the relationships make more sense when trying to query information. It took me a long time to even wrap my head around how to approach things.

The PUT route was the hardest of everything. I spent a long time trying to figure out how to grab the correct information from both the client side and the database. Huge thanks to my instructor, Jeff, and my TA, Cassidy, for helping me finally solve that issue.

### Sources
* [CRUD w/ Mongoose](https://medium.com/@yugagrawal95/mongoose-mongodb-functions-for-crud-application-1f54d74f1b34)
* [findOneAndUpdate w/ Mongoose](https://silvantroxler.ch/2016/insert-or-update-with-mongodb-and-mongoose/)
* [Checking for a URL query string](https://stackoverflow.com/questions/1314383/how-to-check-if-a-query-string-value-is-present-via-javascript/24179815)
* [Redirecting after a successful AJAX call](https://stackoverflow.com/questions/18118627/redirecting-after-ajax-post/18118675)

### Future Development Ideas
- Add time fields to workout entries to calculate total minutes of activity
- Combine workout plans with the same date into one collection instead of creating another collection with the same date
- Mark plans as in progress vs complete