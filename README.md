# Express Typescript Simple Boilerplate

The simple boilerplate for creating up a quick [Express](https://expressjs.com/) server with [TypeScript](https://www.typescriptlang.org/).

## Using the boilerplate

```sh
# clone the repo (replace `my-app` with the name of your application)
git clone https://github.com/garyhtou/express-typescript-simple-boilerplate my-app

# enter the directory
cd my-app

# install dependencies
yarn

# run the server
yarn dev

# Open https://localhost:3000 in your browser

# the server will refresh on any saved changes
```

You will probably also want to customize the `package.json` to reflect
information about your application.

To start setting up your routes, edit [`src/router.ts`](src/router.ts).

## Design Choices

- [Express.js](https://expressjs.com/) server
- [Typescript](https://www.typescriptlang.org/) language
- CORS (Cross-Origin Resource Sharing) and CROP (Cross-Origin Resource Policy) enabled by default
- Uses **Helpers** to simplify and DRY code
- Hot reloading development server using `ts-node-dev`
- Tabs over spaces... don't fight me! ([@garyhtou/prettier-config](https://github.com/garyhtou/prettier-config))
- Loads environment variables from `.env` files
- Handles and logs unexpected server errors by returning a 500 JSON response

---

[**Express Typescript Simple Boilerplate**](https://github.com/garyhtou/express-typescript-simple-boilerplate) was created by [Gary Tou](https://garytou.com).
