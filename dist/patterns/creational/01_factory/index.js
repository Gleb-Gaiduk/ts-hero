"use strict";
// Example https://medium.com/@fawzytatdev/factory-method-design-pattern-with-real-project-example-in-typescript-51ab9a917457
// Step 2 - Create concrete Products which provide different implementations of the Product Interface
class WelcomeMailTemplate {
    generate() {
        return "Welcome aboard! Thanks for signing up!";
    }
}
class NewsLetterMailTemplate {
    generate() {
        return "Please, enjoy our newsletter!";
    }
}
// Step 3 - Create an abstract Creator class
class Mailer {
    // Despite its name, the Creator's primary responsibility is some core Business logic
    // that relies on Product instance returned by factory method.
    // Subclasses can change business logic by overriding factory method and returning different Product implementation
    sendMail() {
        const mailTemplate = this.generateMailTemplate();
        return `Sending the following email: ${mailTemplate.generate()}`;
    }
}
// Step 4 - Create concrete Creator class.
// It overrides the factory method to change the resulting product's type
class WelcomeMailGenerator extends Mailer {
    generateMailTemplate() {
        return new WelcomeMailTemplate();
    }
}
class NewsLetterMailGenerator extends Mailer {
    generateMailTemplate() {
        return new NewsLetterMailTemplate();
    }
}
// Client code: works with an instance of a concrete Creator.
// You can pass any Creator subclass.
function clientCode(mailer) {
    console.log(mailer.sendMail());
}
clientCode(new WelcomeMailGenerator());
clientCode(new NewsLetterMailGenerator());
