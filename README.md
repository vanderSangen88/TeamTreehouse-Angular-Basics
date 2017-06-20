# TeamTreehouse-Angular-Basics - Teacher's Notes

## 1.1 Why Angular 2?
- [Angular Documentation](https://angular.io/docs/ts/latest/)
- [TypeScript Documentation](http://www.typescriptlang.org/docs/tutorial.html)

On Angular 4 Onwards

Angular 4 will be a drop-in replacement for most users. It should be as simple as updating your package.json with the appropriate version numbers.

--- Why Angular?
- It's modular.
- It's build on a static language: TypeScript (a type superscript of JavaScript).
- It's backed by Google and has a large community of developers.

--- Angular JS vs Angular
- Angular JS = Version 1
- Angular = Version 2

## 1.2 The Parts and Pieces of an Angular Application
- [Development Tools installation guides](http://treehouse.github.io/installation-guides/)
- [Getting Started with Webpack](https://teamtreehouse.com/library/getting-started-with-webpack)

Each Angular Application needs at least 1 Root Module:
- Services (Internal or part of 3th party modules), 
- Components (the heart of the application: templates, styles and basic logic). NgModule is the container for your application,  
- 3th party

WebPack is an open-source Module-Loader. 
SystemJS: QuickStart to dynamicly load node-packages into the browser.

## 1.3 The Importance of Static Typing in Angular
- [TypeScript Documentation](http://www.typescriptlang.org/docs/tutorial.html)

## 1.4 Your First Angular Application
- [Development Tools installation guides](http://treehouse.github.io/installation-guides/)
- [Download Visual Studio Code](http://code.visualstudio.com/)
- [TypeScript Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [Install TypeScript](http://www.typescriptlang.org/index.html#download-links)
- [Angular Webpack Guide](https://angular.io/docs/ts/latest/guide/webpack.html)

```sh
npm install -g typescript
```

"An Angular Application needs a Module. And a Module needs a Component. Each of these need a bit of meta data by using decorators to apply some configuration. Modules and Components are regular JavaScript classes. Adding each component to the declarations is required."

## 2.1 The Anatomy of a Component
--- Component Decorator
Components are the backbone of an Angular application. The Component Decorator is for defining a component and registering it with Angular. Each component must have a selector and a template to be valid. Read the [Component Decorator documentation](https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html) for more details.

Emoji array for use in application:
emoji = ['🎉', '😍', '😜', '👍'];

- [Showing component properties with interpolation](https://angular.io/docs/ts/latest/guide/displaying-data.html#!#interpolation)
- [TypeScript Type Guards](https://basarat.gitbooks.io/typescript/content/docs/types/typeGuard.html)
- [TypeScript String Literal Types](http://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types)
- [Get Emoji](http://getemoji.com/)

## 2.2 Data Binding
- [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
- [Barrel Definition](https://angular.io/docs/ts/latest/guide/glossary.html#!#barrel)

--- Types of Data Binding
- One-Way - Class to Template
```html
<h1>{{expression}}</h1>

<input [target]="expression" />
```

- One-Way - Template to Class
```html
<button (event)="expression"></button>
```

- Two-Way - Between Class and Template
```html
<input [(target)]="expression" />
```

## 2.3 Nesting Components
- :host [selector specification](https://www.w3.org/TR/css-scoping-1/#host-selector)
- [Angular Documentation for using :host selector](https://angular.io/docs/ts/latest/guide/component-styles.html#!#sts=:host)


## 2.4 Component Templates and Styles
:host = Add a margin to the outer app-entry element. It's part of the CSS3, scoping to the shadow-dome.

## 2.5 Structural Directives
- [Structural Directive (NgIf, NgFor) Documentation](https://angular.io/docs/ts/latest/guide/structural-directives.html)
- [Attribute Directive (NgClass, NgStyle) Documentation](https://angular.io/docs/ts/latest/guide/attribute-directives.html)
- [Template Syntax Documentation](https://angular.io/docs/ts/latest/guide/template-syntax.html)

Heart emoji for the like button : ❤

--- Directives
- Control Visibility
- Apply Dynamic Styling
- Loop Over Items
- Extend Application with Custom Scripts

## 3.1 Locating and Installing Angular Modules
- [Angular Resources](https://angular.io/resources)
- [Angular Modules](https://angular.io/docs/ts/latest/api/#!?query=module)

```sh
npm install @angular/http@2.4.2 --save --save-exact
```

## 3.2 Dependency Injection
- [Observables Documentation](https://angular.io/docs/ts/latest/tutorial/toh-pt6.html#!#observables)

## 3.3 Creating a Service
- [Public, Private, and Protected modifiers](http://www.typescriptlang.org/docs/handbook/classes.html#public-private-and-protected-modifiers)
- [TypeScript Generics Documentation](https://www.typescriptlang.org/docs/handbook/generics.html)

## 3.4 Connecting a Service and Component
- [Angular In Memory Web API](https://github.com/angular/in-memory-web-api)
- [Backend Server File](https://gist.githubusercontent.com/kenhowardpdx/b5e6b93b04bc81df1236852268616869/raw/793a2cbc1c3fc8783442378abcbd2d56fcbef462/backend.ts)
- [Angular Lifecycle Hooks](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html)

```sh
npm install angular-in-memory-web-api@0.2.4 --save --save-exact

npm install file-loader --save-dev --save-exact
```

--- Angular Lifecycle Hooks
- ngOnInit
- ngOnDestroy

--- TypeScript Interfaces
- Enforces Rules
- Helps Team Members
- Provides Checks and Balances

## 4.1 Adding NgForm Module (Basic Forms)
- [Forms Documentation](https://angular.io/docs/ts/latest/guide/forms.html)

--- Angular Forms:
- Template Driven > This Course
- Dynamic

--- FormsModule Features
- Two-Way Data Binding
- Change Tracking
- Validation
- Error Handling

```sh
npm install @angular/forms@2.4.2 --save --save-exact
```

## 4.2 Setting Up a Form Group
[Augury Chrome Developer Tools Extension]https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd)

Note: Once you have installed Augury, restart your browser to access Augury functionality.

## 4.4 Submitting Form Data
[TypeScript Generics Documentation](https://www.typescriptlang.org/docs/handbook/generics.html)

## 4.6 Posting Data Using a Service
1. Create a new method in "entry.service.ts" called "addComment".
2. Provide two parameters called "entryId", which is a "number", and "comment", which is an object with the properties "name" as a "string" and "comment" as a "string".
3. Post comment to the server by returning the post-request and then the promise.
4. In "entry-comment-form.component.ts" import the entryService before the new addComment-method can be used.
5. Add a constructor-function to the EntryCommentFormComponent.
6. Provide a private parameter "entryService" as an "EntryService"; to append the variable to the prototype during the transpilation-process, making it available on the instance of the class.
7. In the onSubmit-method call the addComment-method.
8. Put the eventEmitter and the formReset inside the success-callback of the promise.
9. To set the entryId property by the EntryComponent, import the Input-decorator so the EntryComponent can pass the value on to the EntryCommentFormComponent.
10. Add the entryId as a number to the EntryCommentFormComponent.
11. Set the entryId value on the "app-entry-comment-form"-element in "entry.component.html". The data is flowing One-way: From the parent EntryComponent to the child EntryCommentFormComponent.

### 4.6 Quiz Answers:
1. The following represents an event binding with an HTML template:
```html
<button (click)="doThis()">click me</button>
```

2. The **ViewChild** decorator lets the component inspect the template for local variables and assign them to members of a component.

3. Angular's Event Emitter **does NOT** register a global event.

4. Putting a 'debugger' statement in a method will cause Chrome Developer Tools to break on that line when Developer Tools is open.

5. The Event Emitter is a way to **pass data** between two components.

## 5.1 HTML5 Input Rules
[HTML input validation options](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

1. In "entry-comment-form.component.html" add the "required"-attribute to the "name"-input and "comment"-textarea.
2. Add another rule to the required fields to enforce a minimum lenght of 3 characters.

## 5.2 Form and Input State
[NgIf Case Study and Documentation](https://angular.io/docs/ts/latest/guide/structural-directives.html#!#ngIf)

1. In "entry-comment-form-component.html" add the "novalidate"-attribute to the form-element to disable the default validation by the browser.
2. In "entry-comment-form-component.ts" check if the form is valid in the "onSubmit"-method.
3. Hardcode the validation-messages in the template "entry-comment-form-component.html" below the "name"-input in a div-element with the classes "alert" and "alert-danger".
4. Create a local variable on the input-element to check the state as the user makes changes: '#nameField="ngModel"'.
5. Create custom validation messages in the .3 created div-element.
6. Bind the hidden-attribute of the div with the expression that validates to a truthy value to show this field only when the field has left blank: '[hidden]="!nameField.errors.required"'.
7. To avoid exceptions, hide the validation messages from the form: Add the ngIf-directive to the parent div-element: '*ngIf="(nameField.dirty || nameField.touched && nameField.errors)"'.
8. Expend the ngIf expression with another OR case: 'commentForm.submitted ||'.
9. Add other messages.

### 5.2 Quiz Answers:
1. Creating a **local variable** lets you inspect the state of ngModel in a view.

2. The **required, minlength** attributes would ensure the input has a value and the value had a minimum length of 3 characters.

3. The **invalid** property on a NgForm instance returns true if the form is invalid.

4. The **novalidate** attribute disables the browser's built-in form validation rules.

5. The **required** attribute ensures the input has a value prior to submitting the form.

## 5.3 Styling Form Inputs
- [Angular Documentation](https://angular.io/docs/ts/latest/)
- [Angular CLI](https://cli.angular.io/)
The Angular team has put a lot of thought into how best to build an Angular application. Angular's command line interface is a tool to help you quickly build out components and a testing framework with your application. Many of the concepts presented in this course are implemented in the CLI.

- [TypeScript Configuration](https://angular.io/docs/ts/latest/guide/typescript-configuration.html)
There are many ways to configure TypeScript to fit your development style. Angular has put together a nice guide describing what each property means and how it relates to developing an Angular application.

- [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
- [Angular Cheat Sheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
- [Angular GitHub Repository](https://github.com/angular/angular)

It's important to keep your application up to date with the latest version of the framework. Star the application then create an account on [larger.io](https://www.larger.io/) to get notified when there are updates.

1. Add the ngStyle-directive which allows inline-styles to html-elements with an expressions that returns a value: '[ngStyle]="{ 'outline-color': commentField.dirty && commentField.valid? 'green' : undefined }"'.

### 5.3 Quiz Answers:
1. **dirty, touched & errors** are found on form fields using ngModel.

2. The **ngStyle** directive lets you add inline styles to an HTML element.

3. The NgIf directive **adds** and **removes** elements in the DOM based on an expression.

4. When binding to the **hidden** attribute we can hide or show an element.

5. **novalidate** disables the browser's built-in form validation rules.