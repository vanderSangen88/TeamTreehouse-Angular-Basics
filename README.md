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