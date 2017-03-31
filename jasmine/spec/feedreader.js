$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('URLs are not empty', function() {
             for (i = 0; i < allFeeds.length; i++) {
                 expect(allFeeds[i].url).toBeDefined();
                 expect(allFeeds[i].url.length).not.toBe(0);
             }
         });

         it('names are not empty', function() {
             for (i = 0; i < allFeeds.length; i++) {
                 expect(allFeeds[i].name).toBeDefined();
                 expect(allFeeds[i].name.length).not.toBe(0);
             }
         });
    });

    describe('The menu', function() {
         //sets bodyClass variable for referring to DOM element
         var bodyClass = $("body")[0].className;

         it('should be hidden by default', function() {
             expect($("body").hasClass("menu-hidden"));
         });

          //creates menuClass variable for referring to DOM element
          var menuIcon = document.getElementsByClassName("menu-icon-link"),
              clicked = false;

          $('.menu-icon-link').click(function () {
              if (clicked === false) {
                  clicked = true;
                  console.log("false turning true");
                  console.log(clicked);
              } else if (clicked === true){
                  clicked = false;
                  console.log("true turning false");
                  console.log(clicked);
              }
           });


          it('should show/hide when the menu icon is clicked', function() {
              if (clicked === true) {
                  expect(bodyClass).toBe("undefined");
              } else {
                  expect(bodyClass).toBe("menu-hidden");
              }
          });
    });

    describe("Initial Entries", function() {
         beforeEach(function(done) {
             loadFeed(0, done);
         });

         it('should have at least one feed entry', function(done) {
             expect($('.feed .entry').length).not.toBe(0);
             done();
         });
    });

    describe("New Feed Selection", function() {
         var firstFeed,
             secondFeed;

         beforeEach(function(done) {
             loadFeed(0, function() {
                 firstFeed = $('.entry').find('h2')[0].textContent;
                 loadFeed(1, function() {
                     secondFeed = $('.entry').find('h2')[0].textContent;
                     done();
                 });
             });
         });

         it('changes the content on the page', function(done) {
            expect(firstFeed).not.toBe(secondFeed);
            console.log(firstFeed);
            console.log(secondFeed);
            done();
         });
    });


}());
