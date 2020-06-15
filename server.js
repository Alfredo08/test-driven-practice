
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

const listStudents = [{
    name : "Alex",
    id : 123
},
{
    name : "Mario",
    id : 456
},
{
    name : "Martha",
    id : 789
}];

app.get( '/api/students', ( req, res ) => {
    return res.status( 200 ).json( listStudents );
});

app.post( '/api/new-student', bodyParser.json(), ( req, res ) => {
    const newStudent = {
        name : req.body.name,
        id : req.body.id
    };

    listStudents.push( newStudent );

    return res.status( 201 ).json( newStudent );
});

app.listen( 8080, () => {
    console.log( 'Server running in port 8080.' );
});

module.exports = app;