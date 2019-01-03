/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    isClosed: false,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            umbrella.isClosed = false;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function() {
        if (umbrella.isClosed === true) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isClosed = true;
            umbrella.isOpen = false;
            return "Julia closed the umbrella!";
        }
    }
};
