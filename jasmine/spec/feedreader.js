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
        it('should be hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        it('should show when the menu icon is clicked for the first time', function() {
            $('.menu-icon-link').trigger('click');
            expect($("body").hasClass("menu-hidden")).toBe(false);
        });

        it('should show when the menu icon is clicked for the second time', function() {
            $('.menu-icon-link').trigger('click');
            expect($("body").hasClass("menu-hidden")).toBe(true);
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
