// Write a JavaScript program that uses a try-catch block to catch and handle a 'URIError' when decoding an invalid URI.



function decodeInvalidURI() {
    try {
        // Attempt to decode an invalid URI
        decodeURIComponent('%');
    } catch (error) {
        if (error instanceof URIError) {
            console.error('URIError occurred:', error.message);
        } else {
            console.error('An unexpected error occurred:', error.message);
        }
    }
}

// Call the function
decodeInvalidURI();
