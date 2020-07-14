//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
// SINGLE EXPORT/IMPORT, saved as variable
https: module.exports = app;
const app = require('./app');

// MULTIPLE EXPORTS/IMPORTS, IMPORTED AS OBJECT w METHODS
exports.aliasTopTours = (req, res, next) => {
    // limit=5&sort=-ratingsAverage,price
    req.query.limit = '5';
    req.query.sort = '-ratingsAverage,price';
    req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
    next();
};
const tourController = require('../controllers/tourController');

////////////////////////////////////////////////////////////////
// ARROW FUNCTIONS
const controlLike = () => {
    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;
};

// arrow function, used as callback function
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString(); // toISOString converts datetime to nice readable string
    next(); // we need to call next method, or else express will be stuck here forevergit push origin master
});

////////////////////////////////////////////////////////////////
// OBJECTS AND CLASSES
// EXPORT/IMPORT OBJECT
export const elementStrings = {
    loader: 'loader'
};
const elementStrings = require('elementStrings');

// CLASSES
// classes are a template object, with methods and the this keyword
// they get constructor
// They are then used elsewhere by invoking a "new" one and saving it to a var
// CLASSES CREATED
// example 1
class APIFeatures {
    // constructor is what gets called every time we create a new object out of this class
    constructor(query, queryString) {
        this.query = query; // going to need a very clear description of what this is
        this.queryString = queryString; // going to need a very clear description of what this is
    }

    filter() {
        // 1A) Filtering
        // here, we want a hard copy of all query key values pairs, and JS, all variables point to the original, so we destructure it off query with ...
        const queryObj = {
            ...this.queryString
        };
        const excludedFields = ['page', 'sort', 'limit', 'fields']; // this sets the list of queries we want to ignore
        excludedFields.forEach(el => delete queryObj[el]); // here we loop through excludedFields, each element we want removed from queryObj, delete it from our queryObj

        // 1B) Advanced Filtering
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(
            /\b(gte|gt|lte|lt)\b/g,
            match => `$${match}`
        ); // regex replacing exact match of any of these strings. g allows multiple replacements. also allows callback fn using the match it found

        // get all docs uses exact same method as using mongo shell or compass > find() method also converts JSON of doc to a obj
        this.query = this.query.find(JSON.parse(queryStr)); // Json.parse converts to obj, json.stringify converts to string

        return this; // returning every method allows us to chain methods together using the previously returned obj each time. return this returns entire obj
    }

    sort() {
        if (this.queryString.sort) {
            // sort('price ratingsAverage')
            const sortBy = this.queryString.sort.split(',').join(' '); // splits sort query string by commas, then rejoins them with whitespace
            // console.log(sortBy);

            this.query = this.query.sort(sortBy); // saves version sorted by sort field value, in this case, 'price'
        } else {
            this.query = this.query.sort('-createdAt'); // specifies default sort if user doesnt sort them
        }
        return this; // returning every method allows us to chain methods together using the previously returned obj each time. return this returns entire obj
    }

    limitFields() {
        if (this.queryString.fields) {
            console.log(this.queryString.fields);

            const fields = this.queryString.fields.split(',').join(' '); // replaces commas w spaces in query fields string
            this.query = this.query.select(fields); // specify list of fields names we will select. Also this.query.select is called projecting (limiting fields)
            // console.log(fields);
        } else {
            this.query = this.query.select('-__v'); // default removes field from response if user specifies no fields: doesn't send the mongoose '__v' internally used field back to client
        }

        return this; // returning every method allows us to chain methods together using the previously returned obj each time. return this returns entire obj
    }

    paginate() {
        // page=2&limit=50 === results 1-10 are on page 1, results 11-20 are on page 2, and so on
        // skip() is the amount of document skips we do before querying data === skip(10) means skip first 10 docs
        // limit is exact same as in query string, limits results to 10 or whatever the limit is
        const page = this.queryString.page * 1 || 1; // multiply string by 1 to conerce to Number, and sets default value to 1
        const limit = this.queryString.limit * 1 || 100; // multiply string by 1 to conerce to Number, and sets default value to 1
        const skip = (page - 1) * limit; // formula: page 3 limit 10 = skip 20 results = subtract 1 from desired page > page 2, multiply by limit (10) > skip 20 results
        // console.log(page, limit, `skip: ${skip}`);
        this.query = this.query.skip(skip).limit(limit); // updates query to only send selected number of tours

        return this; // returning every method allows us to chain methods together using the previously returned obj each time. return this returns entire obj
    }
}

// example 2
export default class List {
    constructor() {
        this.items = [];
    }

    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        };
        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        // [2,4,8] splice(1, 2) -> returns [4, 8], original array is [2]
        // [2,4,8] slice(1, 2) -> returns 4, original array is [2,4,8]
        this.items.splice(index, 1);
    }

    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
    }
}

// example 3
export default class Search {
    constructor(query) {
        this.query = query;
        this.id = id;
    }

    async getResults() {
        try {
            const res = await axios(
                `${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`
            );
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}

// CLASSES EXPORTED/IMPORTED
module.exports = APIFeatures;
const APIFeatures = require('../utils/apiFeatures');
// CLASSES USED
const features = new APIFeatures(Tour.find(), req.query).filter();