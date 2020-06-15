const { expect } = require( 'chai' );
const supertest = require( 'supertest' );
const app = require( './../server' );

describe('Unit tests', function() {
    it( 'Should get a list of students', function() {

        return supertest( app )
            .get( '/api/students' )
            .expect( 200 )
            .expect( res => {
                expect( res.body ).to.be.a( 'Array' );
                res.body.forEach(student => {
                    expect( student ).to.be.a( 'Object' );
                    expect( student ).to.have.keys( 'name', 'id' );
                    expect( student ).to.not.have.property('program');
                });
            });
    
    });

    it( 'Should add a new student to the lit of students', function() {
        const newStudent = {
            name : 'Hunter',
            id : 555
        }

        return supertest( app )
                .post( '/api/new-student' )
                .send( newStudent )
                .expect( 201 )
                .expect( res => {
                    expect( res.body ).to.be.a('Object');
                    expect( res.body ).to.have.keys( 'id', 'name' );
                });
    });
});