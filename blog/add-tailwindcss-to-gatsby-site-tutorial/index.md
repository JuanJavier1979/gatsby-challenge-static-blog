---
title: How to add TailwindCSS to a new brand Gatsby site
date: "2020-01-12T10:00:00"
description: "Steps to integrate TailwindCSS into a new brand Gatsby site."
---

This tutorial requires that you have Gatsby installed on your computer. If not please read this doc [Set Up Your Development Environment](https://www.gatsbyjs.org/tutorial/part-zero/).

### Step 1: Create your site from a blank starter
Open up your terminal and run:

```bash
gatsby new brand-new-site https://github.com/JuanJavier1979/gatsby-starter-default-nostyles
cd brand-new-site
```

### Step 2: Install TailwindCSS
Then, let's install TailwindCSS and PostCSS

```bash
yarn add tailwindcss gatsby-plugin-postcss
```

### Step 3: Integrate TailwindCSS on your site.
Before integrating into our site we need to create a TailwindCSS config file, like so:

```bash
yarn tailwind init
```

Create a file `postcss.config.js` and add this:

```javascript
const tailwind = require('tailwindcss')

module.exports = () => ({
  plugins: [tailwind('./tailwind.config.js')],
})
```

Edit `gatsby-config.js` and add this line `'gatsby-plugin-postcss',` into the plugins object.
It will look like this:

```javascript
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    [...]
```

Create a directory inside `src` to store your CSS files. I will name it `styles` 

Then simply create a new CSS file `global.css` and add this:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally import the new CSS file into `src/pages/index.js`:

```javascript
import "../styles/global.css"
```

Now let's compile the site running

```bash
gatsby develop
```

### Next steps: Use TailwindCSS utility classes into your own CSS classes
You can now add `src/styles/global.css` 

```css
h1 {
  @apply text-3xl;
}
```

Or add TailwindCSS utility classes into your HTML code. Let's add a container class to the main element in `src/componenets/layout.js` file.

```javascript
<main className="container mx-auto">{children}</main>
```


To learn other install methods, take a read at official documentation on Gatsby site [Tailwind CSS on Gatsby](https://www.gatsbyjs.org/docs/tailwind-css/).

To know more about how to configure Tailwind CSS browse their documentation here: [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration).