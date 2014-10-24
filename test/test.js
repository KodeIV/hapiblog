var Lab = require("lab");
var lab = exports.lab = Lab.script();


//var thefile = require("../testfile.js");
var server = require("../index.js");

var describe = lab.experiment;
var it = lab.test;
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
	        Lab.expect(response.statusCode).to.equal(200);
 		console.log(result);
			Lab.expect(result).to.equal("Have a look through the KodeIV blog posts");       
	        done();
		});

	});

//test the individual blog view
	it("get /articles/{i} should return blogpost from the database with requested id", function(done){
	
		var options = {
	        method: "GET",
	        url: "/articles/{i}"
	    };
 
	    server.inject(options, function(response) {
	        var result = response.result;
			Lab.expect(result).to.be.a("object");
	        done();
		});

	});

	it("get /articles/new/ should return new post submission format", function(done){
	
		var options = {
	        method: "GET",
	        url: "/articles/new/"
	    };
 
	    server.inject(options, function(response) {
	        var result = response.result;
	        Lab.expect(result).to.an.instanceof(Object);
			Lab.expect(result).to.have.property("Title"); 
	        done();
		});

	});
		it("post /articles/{id}/delete should delete the object", function(done){
	
		var options = {
	        method: "POST",
	        url: "/articles/new/"
	    };
 
	    server.inject(options, function(response) {
	        var result = response.result;
	        Lab.expect(result).to.an.instanceof(Object);
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
	        Lab.expect(result).to.an.instanceof(Object);
	        done();
		});

	});
});