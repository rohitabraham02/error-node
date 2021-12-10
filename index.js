Page up
// Imports the Google Cloud client library
const {ErrorReporting} = require('@google-cloud/error-reporting');
// Instantiates a client
const errors = new ErrorReporting();
try {
  const m = 1;
  const n = m + z;
} catch (err) {
  // Handle the error here.
        console.log("error");
        // Report an Error object
errors.report(new Error(err), () => {
  console.log('Done reporting Error object!');
});
}
//console.log("test")
