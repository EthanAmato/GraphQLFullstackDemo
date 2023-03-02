const graphql = require('graphql');
//For each datatype in your data, you need to import the corresponding graphql equivalent
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql

const userData = require("../mock-data.json");
const UserType = require('./TypeDefs/UserType')



//Defines the types of operations we can run in regards to retrieving data (GET)
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    //kinda similar to different endpoints in REST servers
    //can put things like getAllUsers / getUserById
    fields: {
        getAllUsers: {
            //This function will return a list of users and this line below is how we define that
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return userData;
            }
        },
        getUserById: {
            //This function will return a list of users and this line below is how we define that
            type: UserType,
            args: { id: { type: GraphQLInt } },
            //args is how we access the user-inputted 'id' in this field's case
            resolve(parent, args) {
                console.log(args)
                return userData[args.id - 1];
            }
        }
    }
});


//Defines the types of operations we can run in regards to manipulating data (DELETE, PUT/PATCH, POST)
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(parent, args) {
                userData.push({
                    id: userData.length + 1,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    password: args.password,
                })
                return args;
            }
        }
    }
});

//Combination between mutations (Mutating data) and queries (getting data)
const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation })


module.exports = schema;