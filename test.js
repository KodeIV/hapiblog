var Lab = require("lab");
var lab = exports.lab = Lab.script();


//var thefile = require("../testfile.js");
var server = require("./server.js");

var describe = lab.experiment;
var it = lab.test;
//var beforeEach = lab.beforeEach;
//var expect = Lab.expect;


describe("Test the server is working at port 8000", function() {

//test the homepage path 
	it("get /articles should return string 'Our blog'", function(done){
	
		var options = {
	        method: "GET",
	        url: "/articles/"
	    };
 
	    server.inject(options, function(response) {
	        var result = response.result;
//	 		console.log(response);
			Lab.expect(result).to.equal("This is the landing page.");       
	 
	        done();
		});

	});

//test the individual blog view
	it("get /articles/{i} should return string 'Blog Post'", function(done){
	
		var options = {
	        method: "GET",
	        url: "/articles/{i}"
	    };
 
	    server.inject(options, function(response) {
	        var result = response.result;
			Lab.expect(result).to.equal("page"); 
			Lab.expect(result).to.be.a("string");
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
			Lab.expect(result).to.have.property(""); 
	        done();
		});

	});
		it("get /articles/new/ should return object with image property", function(done){
	
		var options = {
	        method: "POST",
	        url: "/articles/new/"
	    };
 
	    server.inject(options, function(response) {
	        var result = response.result;
	        Lab.expect(result).to.an.instanceof(Object);
			Lab.expect(result).to.have.property("image"); 
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
			Lab.expect(result).to.have.property("image"); 
	        done();
		});

	});
});