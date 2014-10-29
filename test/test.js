var Lab = require("lab");
var lab = exports.lab = Lab.script();
var code = require ("code");



//var thefile = require("../testfile.js");
var server = require("../index.js");

var describe = lab.experiment;
var it = lab.test;
var expect = code.expect;
//var beforeEach = lab.beforeEach;
//var expect = Lab.expect;


describe("Test the server is working at port 8080", function() {

//test the homepage path 
	it("get /home should return string 'Have a look through the KodeIV blog posts '", function(done){
	
		var options = {
	        method: "GET",
	        url: "/home"
	    };		
 
	    server.inject(options, function(response) {
	        var result = response.result;
	        expect(response.statusCode).to.equal(200);
 		console.log(result);
			//Lab.expect(result).to.equal("Have a look through the KodeIV blog posts");       
	        done();
		});

	});

//test the individual blog view
	it("get /articles/{id} should return blogpost from the database with requested id", function(done){
	
		var options = {
	        method: "GET",
	        url: "/articles/{id}"
	    };
 
	    server.inject(options, function(response) {
	        var result = response.result;
			expect(result).to.be.a("object");
	        done();
		});

	});

	it("get /articles/new/ should return new post submission format", function(done){
	
		var options = {
	        method: "GET",
	        url: "/articles/new"
	    };
 
	    server.inject(options, function(response) {
	        var result = response.result;
	       	expect(result).to.an.instanceof(Object);
			expect(result).to.have.property("Title");
			expect(result).to.have.property("Author"); 
			expect(result).to.have.property("Content");
			expect(result).to.have.property("Submit");

	        done();
		});

	});

	it("should respond by sending a post request to the database", function(done){

		var options = {
			method: "POST",
			url: "/articles/new",
			payload: {
	            author: "Test User",
	            title: "hfwhf",
	            content: "klw/el"

	        }
		};

		server.inject(options, function(response){
			var results = response.results;
			payload = options.payload;

			expect(response.statusCode).to.equal(200);
			expect(result.author).to.equal(payload.author);
			expect(result.title).to.equal(payload.title);
			expect(result.content).to.equal(payload.content);

			done();
		})
	})
		it("post /articles/{id}/delete should delete the object", function(done){
	
		var options = {
	        method: "POST",
	        url: "/articles/new/"
	    };
 
	    server.inject(options, function(response) {
	        var result = response.result;
	        expect(result).to.an.instanceof(Object);
	        done();
		});

	});
			it("get /articles/edit should return editable version of selected blog post ", function(done){
	
		var options = {
	        method: "GET",
	        url: "/articles/edit/"
	    };
 
	    server.inject(options, function(response) {
	        var result = response.result;
	        expect(result).to.an.instanceof(Object);
	        done();
		});

	});
});