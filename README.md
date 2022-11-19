# Adding Pre-commit Hooks to a Repository

This text outlines how to implement [githooks](https://git-scm.com/docs/githooks), specifically pre-commit hooks to a project.

## Javascript Project

### 1. Install the following packages in the project root:

```
npm install --save-dev prettier lint-staged husky eslint
```

If working with typescript, install the following packages.

```
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### 2. Configure ESLint

Add the `.eslintrc.json` and `.eslintignore` to the project root. Optionally, add the following if using typescript.

```
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint"
    ],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ]
```

### 3. Configure Prettier.

Add the `.prettierrc.json` and `.prettierignore` to the project root.

### 4. Configure Lint-staged.

Add the following to the root `package.json` file.

```
"lint-staged": {
    "**/*.{js,jsx,json,ts,tsx}": [
        "prettier --write",
        // uncomment if using typescript
        // "eslint --fix"
    ]
},
```

### 5. Configure Husky.

Manually add the following to the root `package.json` file.

```
"scripts": {
    /* other scripts */
    "configure-husky": "npx husky install && npx husky add .husky/pre-commit \"npx --no-install lint-staged\""
},
```

or to run the following to automatically add to the `package.json`.

```
npm pkg set "scripts.prepare"="npx husky install && npx husky add .husky/pre-commit \"npx --no-install lint-staged\""
```

### 5. Finally, run

```
npm install
```