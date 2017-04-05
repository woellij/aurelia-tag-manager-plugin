# aurelia-tag-manager-plugin

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This plugin was forked from aurelia/skeleton-plugin and is part of [Aurelia](http://www.aurelia.io/) platform. It sets up a standard aurelia plugin using gulp to build your ES6 code with the Babel compiler. Karma/Jasmine testing is also configured.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.aurelia.io/) and [our email list](http://eepurl.com/ces50j). We also invite you to [follow us on twitter](https://twitter.com/aureliaeffect). If you have questions, please [join our community on Gitter](https://gitter.im/aurelia/discuss) or use [stack overflow](http://stackoverflow.com/search?q=aurelia). Documentation can be found [in our developer hub](http://aurelia.io/hub.html). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome or Firefox Extension and visit any of our repository's boards.




## Installing using jspm
jspm install github:geea-develop/aurelia-tag-manager-plugin

## Using the plugin 

in your main js file add
-aurelia.use.plugin('geea-develop/aurelia-tag-manager-plugin');

Use in application

1.  Basic implementation in class using jspm import

    ```
    import and inject the class
    import {inject} from 'aurelia-framework';
    import {TagManager} from 'geea-develop/aurelia-tag-manager-plugin';

    @inject(TagManager)

    constructor(tagManager) {
      this.tagManager = tagManager;
    }
    ```
  
2.  Adding transaction example

    ```
    let products = [];

    products.push({
        'sku': reservation_no,
        'name': cruise_name,
        'category': cruise_type,
        'price': cruise_price,
        'quantity': 1
    });
      
    let transaction = this.tagManager.create(
      {
        event: 'transaction-event',
        attributes: {
          'transactionId': trans_no,
          'transactionAffiliation': 'Cruise Reservation',
          'transactionTotal': total,
          'transactionTax': 0,
          'transactionShipping': 0,
          'transactionProducts': products
        }
      }
    );

    this.tagManager.add(transaction);
    ```


## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```
