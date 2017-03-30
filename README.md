# Project Overview

In this project I took an existing application and wrote tests for it using Test Driven Development. I used [Jasmine](http://jasmine.github.io/) a JavaScript testing framework.  


## Why this Project?

Test driven development is a great way to create applications that are lean, robust, and parsimonious.

## How to use
1. Launch the application by opening index.html in your web browser of choice.
2. To view the tests, scroll to the bottom of the page.
3. To run individual tests, click each green link under the black headings. 


# Test Suites

### allFeeds
1. Used a for loop to iterate through each of the URLs in allFeeds and make sure they are defined.
2. Created a for loop that iterates through the name properties in allFeeds and makes sure there are no undefined entries.

### The menu
1. Wrote a test to make sure that the body element has a class of "menu-hidden" by default.  This ensures that hamburger menu is not open when starting the application.
2. The second test ensures that the menu changes visibility after a click event.

### Initial Entries
1. This is an asynchronous test that first waits for the loadFeed function to execute.  After loadFeed finishes, it checks that there is at least one 'entry' feed element present.

### New Feed Selection
1. This is a second asynchronous test that ensures that when a new feed is loaded, it is pulling unique information in relation to another feed.
