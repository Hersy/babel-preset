# @hersy/babel-preset v0.1.1

A babel preset to transform JavaScript to comply with my style guide.

## Installation

### Set your GITHUB_TOKEN environment variable

To install this (and any other GitHub) packages, you'll first need to set the **GITHUB_TOKEN** environment variable.
To do this you'll first need to create a GitHub Token (classic), you can do so on the "Developer options" section of your GitHub settings page.
For more instructions, read [GitHub's documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

Once set, add your access token to your preferred terminal's user profile file.

On Windows, WindowsPowerShell is recommended, locate or create your user profile file, usually saved on **%USERPROFILE%/Documents/WindowsPowerShell/Microsoft.Powershell_profile.ps1**, and add this line:

```powershell
$Env:GITHUB_TOKEN="<Your Token>"
```

On MacOS, locate or create your default terminal's user profile file.

For **bash** terminals it can be found at **~/.bashrc**
For **zsh** terminals it can be found at **~/.zshrc**

Then add this line:

```bash
export GITHUB_TOKEN="<Your Token>"
```

### Resolve to GitHub Package Registry

Locate or create your NPM configuration file, usually saved on **./.npmrc** , it should contain the following:

```npmrc
registry=https://registry.npmjs.org/ # or https://registry.yarnpkg.com/
@hersy:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### Install the package

Now you can run either:

```bash
npm install --save @hersy/babel-preset
```

or

```bash
yarn add -D @hersy/babel-preset
```

### Update your Babel configuration file

Add `"extends": "@hersy/babel-preset"` to `.babelrc`

Or `extends: '@hersy/babel-preset'` to `babel.config.js`

And you're all set!
