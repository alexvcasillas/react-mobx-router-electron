![3RMXi-E Logotype](https://raw.githubusercontent.com/alexvcasillas/react-mobx-router-electron/master/3RMXi-E.jpg)

### React Create App with React Router and MobX and Internationalization and Electron

AKA: **3RMXi-E** (for the sake of brevity!)

📢 **Info:** This documentation is currently at work in progress and inherits from my [3RMXi Project](https://github.com/alexvcasillas/react-mobx-router). Dig a litte into the `package.json` to know how to run development mode and build for production.

❕❕ **New:** Now supports Internationalization!

❕❕ **New:** i18n now supports nested language resource objects for a better structuring!

This project is a personal boilerplate as a quickstart for development with [react-create-app](https://github.com/facebookincubator/create-react-app) + [react-router](https://github.com/ReactTraining/react-router) and [MobX](https://github.com/mobxjs/mobx) to maintain the state of the App and [Electron](https://github.com/electron/electron) to create an awesome desktop application.

This boilerplate it's based on the awesome [jschr's electron-react-redux-boilerplate](https://github.com/jschr/electron-react-redux-boilerplate).

I'm not interested in creating an opinionated boilerplate with strict rules about how to do stuff. The beauty of Javascript is that, you can do it as you want, the way you feel more confortable with so, **you should** modify the project structure as you want while it's easier for you to work with, also changing any other aspect of the execution.

### Getting Started

To get started using this boilerplate you only need to follow a few steps. First of all
you should run `yarn` on your favorite terminal to initialize Yarn and install all the required
dependencies.

If you want to start developing your project you should run `yarn run develop`, this will generate
a development build (without optimizing the code for easy debug and all that stuff) based on a webpack dev-server
with hot-reload and all those cool development features that we, programmers, love.

If you want a production build of your project you should run `yarn run pack[:platform]`, this will create a build folder in the root
directory of the project and bundle your `src` folder and optimize all the code to get the best possible performance. This build will be minified and the filenames will include the hashes.

Pack commands available:
* yarn run pack - This command packs your application to all the available platforms.
* yarn run pack:win - This command will pack your application to the Windows platform.
* yarn run pack:mac - This command will pack your application to the OSX platform.
* yarn run pack:linux - This command will pack your application to the Linux platform.

_Note: the `yarn run pack:mac` command is only available and will only work under an OSX environment. This command will fail if you try to execute it under a Windows environment for example._

Your app will be ready to be deployed!!

PS: This development and build process is exactly the same as you will do with [react-create-app](https://github.com/facebookincubator/create-react-app).

### Internationalization

I've created an `Language` component just for you to handle internationalization (i18n) the easiest way ever possible.

But it's not all sorcery and auto-magic stuff. You need a little configuration, but don't worry, it's painless (I think...).

First of all you should see a `stores` folder in the root of your project. This folder is where all the Stores for MobX "should be"
created. If you take a closer look at the files inside, you should see a `language.js` file, well, this is the file that handles all the
_Language State_ stuff like: current language, change language, and a few more easy configurations.

**Note:** This will be improved in a future (sooner than expected) release to handle automatically all your language resource files
but, meanwhile, you will need to do this little thing manually.

The first thing you will see at this file will be the following lines:

```
import esES from '../language/i18n/es';
import enUS from '../language/i18n/en';
```

Well, technically will be this:

```
import { observable, computed, action, reaction } from 'mobx';

import esES from '../language/i18n/es';
import enUS from '../language/i18n/en';
```

But we will skip the first line for the sake of brevity because it's just MobX imports 😀

Now let's take a look where this things come from. This language files will contain a single javascript object with
a `key/value` structure so we can easily access the _language resource_ that we need.

Let's look at an example:

```
// ENGLISH LANGUAGE RESOURCES
const RESOURCES = {
  CHANGE_SPANISH: 'Change to Spanish',
  CHANGE_ENGLISH: 'Change to English',
  USER_TITLE: 'User',
  XP_TITLE: 'Experience',
  AGE_TITLE: 'Age',
  APP_DESCRIPTION: 'React Create App with React Router and MobX and Internationalization.',
  ACTIONS: {
    INCREASE_XP: 'Increase Experience Points!',
    CHANGE_NAME: 'Change My Name!',
    CHANGE_LASTNAME: 'Change My Last Name!'
  }
};

export default RESOURCES;

```

As you can see, we've defined for example a `CHANGE_SPANISH` key with a value of `'Change to Spanish'`.

At the very last line of the file, we export this object to access it from the `Language Store`.

Note that this **Keys** should be exactly the same in each of the language folders you create. If the key resource is not found
nothing will be shown (I don't want to throw exceptions and all that stuff that breaks and stops the app). If you want it, you can create a function that process the required key resource to see if it exists or it's not empty and the `Language` component.

Now, to change the current App Language you only need to call (previously injected language store at the desired component) `this.props.language.changeLanguageTo('es')` from anywhere inside that component (an onClick={} method for example) and if it's a valid key the one you passed to the method it will automatically change the language, the resources and re-render the `<Language resource="CHANGE_SPANISH" />` with the new `CHANGE_SPANISH` value, in this case, will replace _'Change to Spanish'_  with _'Cambiar a Español'_. It's not that hard, see?

You can also see that you have the possibility to use **nested language resource objects** for a more structured language organization. To have access to this **nested language resource objects** you only need to call the language component with the following structure `<Language resource="ACTIONS.INCREASE_XP" />` for example and will render the given resource string into the component. Piece of cake!

**Note:** You should look at the `<Language />` react component located at `src/components/language` to see that it's not a big deal, it just injects the `LanguageStore` and being an `@observer` so it will re-render when an `@observable` property (in this case, `language.resource[resource]`) has changed.

**Pending Internationalization Tasks:**

✅ Expose the current language value to check it at any point/state of the App.

⬜ Automatize the language resources fetch.

---

Hope you find this useful.

Enjoy!
