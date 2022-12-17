# Theorical introduction

## What are automated tests

Testing is a way to VALIDATE software.

Let's say you have created an application, and you just finished the development process of the first feature in the app. You tested it manually and it's working, great.

Now, time has passed and your app has 10 features, and you are developing a new one. After finishing the development of that feature of number 11, how will you ensure that the other 10 features are still working correctly? In software development, you very often see a new feature breaking old ones.

So, to ensure that the other 10 features are working correctly, are you going to test them manually? I don't think so, right? Each feature in almost every software has a lot of edge cases, testing all of the 10 features of your app manually would take hours (probably more than just some hours).

I have spoken of this scenario, to show you the reason why automated tests are great for ANY software. With automated tests, you write a feature, you write its tests, those tests ensure that the feature is working as expected, and if anyone adds some code that breaks that feature, the tests will automatically break and you will know.

After you add the tests, everytime you want, you can run them to ensure the feature is still working, and there are many situations where you want to run them to ensure everything is working, for example:

- Before a commit: Running the tests before committing your code can help ensure that the code you are committing does not break any existing functionality.

- Before merging a pull request: The tests can be run on pull requests to verify that the code being submitted does not break any existing functionality and meets the required quality standards.

- Before releasing a new version of the software: Automated tests can be run as part of a continuous integration process to validate that the software is ready for release.

- After making any kind of changes to the codebase: Automated tests can be run after making changes to the code to ensure that the changes do not introduce any new defects or problems. For example, if you add a new library and you need to refactor the entire application to use that library, the tests will ensure that your features are still working after the refactor process.

Tests make your software have more quality, and in Software development, the quality really matters.

## Types of automated tests

When speaking about tests, there are some different types that you might already have heard of.

I'll speak a bit about them and show some key points.

Unit tests:

- Unit tests focus on testing small, individual units of code in isolation from the rest of the application.
- Unit tests are usually (at least they should be) fast to run and easy to write.
- Unit tests are useful for verifying that a unit of code is working as expected and for identifying any problems or defects that may exist in that unit.

---

Integration tests:

- Integration tests focus on testing how different units of code work TOGETHER as a WHOLE.
- Integration tests are usually slower to run and more complex to write than unit tests.
- Integration tests are useful for verifying that different units of code are working together correctly and for identifying any issues that may arise when the units are combined.

In short: Both unit tests and integration tests are important for ensuring the quality and reliability of a software application. Unit tests can help identify problems at a smaller, more granular level, while integration tests can help identify problems that arise when different units of code are combined and work together as a system.
