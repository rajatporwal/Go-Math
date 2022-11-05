const SYSTEM_DESIGN_CONFIG = [
  //   {
  //     heading: "System Design",
  //     pathname: "/system_design",
  //     children: [
  //       {
  //         title: "Execution Context",
  //         keywords: "Execution Context",
  //         id: "execution_context",
  //         description: `When the <b>JavaScript</b> engine first encounters your script, it
  //   creates a global <b>execution context</b> and pushes it to the current
  //   <b>execution stack</b>. Whenever the engine finds a function invocation,
  //   it creates a new <b>execution context</b> for that function and pushes
  //   it to the top of the <b>stack</b>.`,
  //         list: [
  //           "Global Execution Context has Global Object and this in the scope.",
  //           "Global object in browser is window and in node is global.",
  //           "An empty javascript file also has the GEC.",
  //         ],
  //         code: [
  //           {
  //             title: null,
  //             code: `  // An empty JS file
  //   console.log(this);   			// prints Window object
  //   console.log(window); 			// prints Window object
  //   console.log(this === window)	// true (at least for now, as we not added anything)`,
  //           },
  //         ],
  //         note: null,
  //       },
  //     ],
  //   },
  {
    heading: "Web Optimization Techniques",
    pathname: "/system_design",
    children: [
      {
        title: "Network Optimization",
        keywords: "Network Optimization",
        id: "network_optimization",
        description: ``,
        list: [
          "Lazy loading",
          "Loading javascript in async",
          "Content visibility",
          "Serving critical css",
          "Resource hints",
          "Caching using service worker",
          "Caching using CDN",
          "CSR, SSR",
          "Compresssion techinques",
          "Layout shifts & repaints",
        ],
        code: [
          {
            title: null,
            code: ``,
          },
        ],
        note: null,
      },
    ],
  },
  {
    heading: "Lazy Loading",
    pathname: "/system_design",
    children: [
      {
        title: "Async & Defer",
        keywords: "Async & Defer",
        id: "async_defer",
        description: ``,
        list: [],
        img: "/images/lazy_loading_scripts.png",
        code: [
          {
            title: null,
            code: ``,
          },
        ],
        note: `<b>Instead of putting script tags at the bottom use defer</b>, because if we put script at the bottom it will only the scripts once documentis ready (it rendered the HTML) but if we use defer it will parallely load the scripts`,
      },
      {
        title: "Lazy Attribute for Images",
        keywords: "Lazy Attribute for Images",
        id: "lazy_attribute_for_images",
        description: ``,
        list: [
          `<b>loading="lazy"</b> will load images only when they comes in view port`,
          `<b>fetchpriority="high":</b> Fetch the image at a high priority relative to other images.`,
          `<b>fetchpriority low: </b>Fetch the image at a low priority relative to other images. (let's say there are two images and we want to load second image after the first loads)`,
          `<b>fetchpriority auto:</b> Default mode, which indicates no preference for the fetch priority. The browser decides what is best for the user.`,
        ],
        code: [
          {
            title: null,
            code: `// Lazy loading for images, iframes, scripts.
// Probable for images outside of the viewport (imp only images)

<img loading="lazy" ... />
<iframe loading="lazy" ... />

// If Prompt an early download of an asset.
// For critical images, e.g. hero images.

<img loading="eager" />
<iframe Loading-"eager" />

// When the browser assigns "High" priority to an image,
// but we don't actually want that.

<img src="less-important-image.svg" fetchpriority="low" ... />

// We want to initiate an early fetch for a resource,
// but also deprioritize it.

<Link rel="preload" fetchpriority="low" href="/script.js" as="script" />`,
          },
        ],
      },
      {
        title: "Intersection Observer",
        keywords: "Intersection Observer",
        id: "intersection_observer",
        description: `The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.`,
        list: [
          `Lazy-loading of images or other content as a page is scrolled.`,
          `Implementing "infinite scrolling" web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.`,
          `Reporting of visibility of advertisements in order to calculate ad revenues.`,
          `Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.`,
        ],
        code: [
          {
            title: null,
            code: `// The Intersection Observer API allows you to configure a callback that is called when either of these circumstances occur:
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}

function callBackFunction(enteries) {
    enteries.forEach(element => {
        // The logic to apply for each entry
    });
}

let observer = new IntersectionObserver(callBackFunction, options);
observer.observe(TARGET_ELEMENT)`,
          },
        ],
      },
      {
        title: "Content Visibility",
        keywords: "Content Visibility",
        id: "content_visibility",
        description: `The content-visibility property in CSS <b>indicates to the browser whether or not an element’s contents should be rendered at initial load time</b>. So, as the browser starts loading content and is playing it on the screen, this property allows us to step in and tell the browser not to load the contents of an element until it’s needed. Think of it sort of like lazy loading in the sense that an off-screen element’s children are not rendered until they enter the viewport.`,
        list: [
          `The main point of using content-visibility is performance. It can <b>help to speed up page load because the browser is able to defer rendering elements that are not in the user’s viewport</b> until the user scrolls to them. `,
          `<b>hidden:</b> The element bypasses its contents (kind of similar to applying display: none; to the contents).`,
          `<b>visible:</b> There is no effect and the element is rendered as normal.`,
          `<b>auto:</b> The element has layout, style, and paint containment. <b>The browser gets to determine if this content is relevant to the user and, if it isn’t, then the browser will skip it.</b> At the same time, the element is still focusable, selectable and accessible to things like tabbing and in-page search.`,
        ],
        code: [
          {
            title: null,
            code: `.element {
    content-visibility: auto;
}`,
          },
        ],
        note: `<a href='https://css-tricks.com/almanac/properties/c/content-visibility/' target='_blank'>Click here for more</a>`
      },
      {
        title: "Serving Critical CSS",
        keywords: "Serving Critical CSS",
        id: "serving_critical_css",
        description: `Critical CSS (or critical path CSS) is the CSS applied to above-the-fold elements. Put simply, it’s the CSS responsible for content that’s immediately visible when a user opens your website.
        
        <br /><br /><b>Configuring Critical CSS Manually</b>`,
        list: [
          `The goal here is dividing your CSS into two parts – critical and non-critical.`,
          `First, you’ll need to inspect your page's Document Object Model (DOM), go through every element on the page and consider the style that's applied to it.`,
          `You'll need to do this for every page on your website, You also have to take into account different device viewports.`,
        ],
        code: [
          {
            title: null,
            code: `// Load Critical CSS synchronously
<link rel="stylesheet" href="critical.css" />

// Load CSS synchronously, with low priority
<link
    rel="stylesheet"
    href="full.css"
    media="print"
    onload="this.media=all"
/>`,
          },
        ],
        note: `<b>media=print</b> - to change the appearance of your web page when it's printed on a paper. i.e. it will only apply css when whole page/html is loaded.`
      },
    ],
  },
];

export default SYSTEM_DESIGN_CONFIG;


