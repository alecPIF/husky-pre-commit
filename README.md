# Adding Pre-commit Hooks to a Repository

### 1. Install the following packages in the project root:

```
npm install --save-dev prettier lint-staged husky
```

### 2. Configure Prettier.

Add the `.prettierrc.json` and `.prettierignore` to the project root.

### 3. Configure Lint-staged.

Add the following to the root `package.json` file.

```
"lint-staged": {
    "**/*.{js,jsx,json,ts,tsx}": [
        "prettier --write ."
    ]
},
```

### 4. Configure Husky.

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