# Why did you choose React.js?

To be frank, I had never heard about `React.js` till my friend [Revath S Kumar](https://github.com/user/revathskumar), visited me back in December, 2015. He had given an intro to it, then I tried out few code and liked the way it worked, though I didn't understand it much, I liked the `props` and `state` ;) & it was `v0.14.x` then.

# How did you start the work on real apps?

I wanted to start with the work on the real project and decided to start with a module which was in pipeline to develop.

## React.js Scripting?

Being a traditional developer started writing the script under `assets/js` directory.

## Including React files in website?

I had started with including the `jsx` files directly in the browser by loading the `react & react-dom` CDN files.

## Did it go well?

NOOO! I had failed, when I wanted to add new packages. I started getting pain in \*\*\* :)

## What did you do then?

I told my friend the way I worked, he has asked me to change my approach by using webpack (`vX.X.X`).

Well, I had gone through the docs and started making the config file to bundle it.

## Was it easy to get started with webpack?

Again another NOOO! I had to try & try & try & try (...) to make it working atleast.

## How did you include the bundled files on your website?

As it was the only page which was using `React.js`, I had included the bundled file directly.

## Did you find it easy to go forward?

NOOO! I had faced the caching issues when I update the source code.

## How did you handle the file caching issue?

I had spent some more time on `webpack` and came across hashing the files.

## Doesn't it generate random hash on file names when you run webpack?

Yes it does.

I had to spend time again on finding out the solution for this as well. Came across the plugin [assets-webpack-plugin](https://github/assets-webpack-plugin) `vx.x.x` and did a work around with that.

It contains the latest hashed file names - JS & CSS in a json file which is specified in the `webpack` config.

Then I applied own logics to load the related JS & CSS files on the page, by hard coding the _entry points_ in server coding, reading the _json_ file for required entry point & loading those required CSS & JS into the page. Also set a flag on server side to load other required JS & CSS on other pages.

With this logic, I could upgrade other modules on our website to _React Magic_

# What about upgrading React.js?

In couple of months `React.js` released its `v15.x.x` and I thought I must do an upgrade and started working on it. I also had to upgrade the `webpack` to `v2.x.x`. The configuration changed a lot.

# Now, how can I start with React 16?

You can consider using `webpack` `v4.x.x`?

[webpack.config.js](./webpack.config.js)
