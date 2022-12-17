## Video roadmap

- Introduction about tests
  - What are automated tests
  - Why should I write tests (what value it gives to a project)
  - Types of automated tests (tests pyramid and a little explanation about unit, integration and e2e tests)

After that introduction, then we move to technical content on tests.

Firstly, we are gonna test the methods of a class, in order to understand the basics of tests (syntax and assertions) and then we can see the details of how to test a react component.

- Calculator

  - Show the code of the Calculator class
  - Syntax of tests (describe, it, test, test callback, expect, basic assertions)
  - Test the behavior of the sum and multiply method

- Counter component

  - Show the component behavior on browser
  - Show the component code
    Detail: I have implemented the component as a class-based component in order to show that after the tests are written, we can refactor the component to be a functional component and the tests will still pass, ensuring our component works perfectly.
  - Test the component behavior.
    - it.todo's (increment, decrement, double and half)
  - Refactor the component to be a functional component instead of a class-based one.

- Show the exercises for the viewer to practice alone by pausing the video
  - Test the subtract and the divide methods of the Calculator class.
  - Test the class StringUtils (toUpperCase and toLowerCase methods).
  - Show the solution of the exercises
