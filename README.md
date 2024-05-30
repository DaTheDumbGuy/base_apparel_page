# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot-dekstop.png)
![](./screenshot-mobile.png)

### Links

- Solution URL: [Base Apparel Github Page](https://github.com/DaTheDumbGuy/base_apparel_page)
- Live Site URL: [Base Apparel Github](https://dathedumbguy.github.io/base_apparel_page/)

## My process

### Built with

- Semantic HTML5 markup
- Sass Variables
- Flexbox
- Mobile-first workflow
- React
- Vite
- Sass
- Media Queries
- Mixins(Sass)

### What I learned

I tried using Mixins for the linear gradient

```html
<h1>Some HTML code I'm proud of</h1>
```

```scss
$gradient-direction_a: 135deg;
$start-color_a: hsl(0, 0%, 100%);
$end-color_a: hsl(0, 100%, 98%);

$gradient-direction_b: 135deg;
$start-color_b: hsl(0, 80%, 86%);
$end-color_b: hsl(0, 74%, 74%);

@mixin gradient_A {
  background-image: linear-gradient(
    $gradient-direction_a,
    $start-color_a,
    $end-color_a
  );
}

@mixin gradient_B {
  background-image: linear-gradient(
    $gradient-direction_b,
    $start-color_b,
    $end-color_b
  );
}
```

### Continued development

I'm planning to learn React Hooks

## Author

- Frontend Mentor - [@DaTheDumbGuy](https://www.frontendmentor.io/profile/DaTheDumbGuy)
