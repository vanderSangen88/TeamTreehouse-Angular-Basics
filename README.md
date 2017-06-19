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