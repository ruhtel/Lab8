# Lab8_Starter

Names: Lucas Bajoua and Jarrett Ratelle

## Check your understanding q's (FILL OUT)

1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

   1. Within a Github action that runs whenever code is pushed

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   No. You would want to unit test the write and send features separately.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   Yes. The unit test is only testing one feature, rather than multiple.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
   We believe that 'headless: true' will just run all of the tests in the background without showing the dev.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   beforeAll(async () => {
   await page.goto("http://127.0.0.1:5500");
   await page.click("img");
   await page.waitForTimeout(500);
   });
   
 (Screenshot of npm test results is in repository)
