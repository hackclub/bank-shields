# Hack Club Bank [shields.io](https://shields.io/) Badges

Easily show your Hack Club Bank organization's balance using shields.io badges!

![Hack Club Bank Balance shield badge for HQ](https://img.shields.io/endpoint?url=https%3A%2F%2Fbank-shields.hackclub.com%2Forganizations%2Fhq%2Fbalance)

This repo contains the instructions for how to use Hack Club Bank shields.io
badges as well as the server (Node/TypeScript) that serves the json data for
generating badges.

### About [shields.io](https://shields.io/)

- Website: https://shields.io/
- GitHub: https://github.com/badges/shields

## Badges

### Organization Balance

![Hack Club Bank Balance shield badge for HQ](https://img.shields.io/endpoint?url=https%3A%2F%2Fbank-shields.hackclub.com%2Forganizations%2Fhq%2Fbalance)

Using the following URL: `https://img.shields.io/endpoint?url=https%3A%2F%2Fbank-shields.hackclub.com%2Forganizations%2F{INSERT YOUR ORGANIZATION'S ID OR SLUG HERE}%2Fbalance`

## Contribute

```sh
# clone the repo (replace `my-app` with the name of your application)
git clone https://github.com/hackclub/bank-shields

# enter the directory
cd bank-shields

# install dependencies
yarn

# run the server
yarn dev

# Open https://localhost:3000 in your browser

# the server will refresh on any saved changes
```
