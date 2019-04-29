/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();

            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         // its testing the urls defined and also urls are not empty. 
        it('all URLs are defined and not empty',function(){
            for (let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

          // its testing the name defined and also name are not empty. 
        it('All names are defined and not empty',function(){
            for (let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         //checking default hidden status of the menu button. 
        it('The menu element is hidden by default',function(){
            let isHidden = document.body.classList.contains("menu-hidden")
            
            expect(isHidden).toBe(true);
        });


        
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          //test the behavior if the menu button clicked and also when it is clicked again. 
          // it should hide menu again. 
         it('The menu changes visibility when it is clicked.',function(){
            let iconList = document.querySelector(".icon-list");
            iconList.click();
            let isHidden = document.body.classList.contains("menu-hidden")
            expect(isHidden).toBe(false);
            iconList.click();
            isHidden = document.body.classList.contains("menu-hidden")
            expect(isHidden).toBe(true);
        });


    });
    /* TODO: Write a new test suite named "Initial Entries" */

    //check for initial feed loading properly. 
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         // this is to make sure the call back is async. 
        beforeEach(function(done){
            loadFeed(0,function(){
                done();
            });
        });

        it('Has at least a single .entry element within the .feed',function(){
            let feedDiv = document.querySelector(".feed");
            let hasEntry = feedDiv.querySelectorAll("a.entry-link");
            //console.log("six"+hasEntry.length);
            expect(hasEntry.length).not.toBe(0);
        });

        
    });
    /* TODO: Write a new test suite named "New Feed Selection" */


    // test the response of having the new feed selection or feed change. 
    describe("New Feed Selection", function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let firstElefFeed0 = "";
        let  firstElefFeed1 = "";
        //it starts with the default feed. 
        beforeEach(function(done){

            // code to get first element
            loadFeed(0,function(){
                done();
            });
            


        });
        
        it('ensures when a new feed is loaded',function(done){
            //get the first url to compare with another feed . 
            let feedDiv = document.querySelector(".feed");
            firstElefFeed0 = feedDiv.querySelector("a").href;
            //selecting the second feed and check the url value with the first one. 
            loadFeed(1,function(){
            done();
            feedDiv = document.querySelector(".feed");
            firstElefFeed1 = feedDiv.querySelector("a").href;
            });

            
            expect(firstElefFeed0).not.toBe(firstElefFeed1);
        });

        
    });
}());
