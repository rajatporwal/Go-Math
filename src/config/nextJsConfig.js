const NEXT_JS_CONFIG = [
    {
      heading: "Next Js Foundation",
      pathname: "/next",
      children: [
        {
            title: "Advantages of using Next JS",
            keywords: "Advantages next js",
            id: "data_fetching",
            list: [
                'Next JS simplified the development process and It also optimize the web apps',
                `Improves SEO's by enabling Easy crawling and Indexing by doing server side rendering`,
                'It uses file based routing system',
                `Serverless API's in NextJS are a way of creating API endpoints without a need of traditional server`,
                'it improves Hot Module Reloading from 1.3 sec to 131ms which is 10x better (react + express app to Next App)',
                '<b>Automatic code splitting</b> - this reduces the initial load time of website (no need to use lazy loading and suspense now)'
            ],
            note: `
            Hot Module Replacement (HMR) allows your web components to be updated as you develop, without needing a full refresh of the browser. The Open Web Components project maintains a number of tools and libraries for working with Web Components, including a plugin for enabling HMR with FAST Web Components.`,
            code: [
              {
                title: '',
                code: `// Server Side Rendering
  const res = await fetch('https://jsonplaceholder.com', {
      cache: 'no-store'
  });
  
  // Static Side Generation
  const res = await fetch('https://jsonplaceholder.com');
  
  // Incremental Static Generation
  const res = await fetch('https://jsonplaceholder.com', {
      next: { revalidate: 10 }
  });
                `,
              }],
          },
        {
          title: "Data Fetching",
          keywords: "data fetching next js ssr ssg isg",
          id: "data_fetching",
          list: [
              'Server Side Rendering (SSR): no-cache',
              'Static Side Generation (SSG): stores cache',
              'Incremental Static Generation (ISG): refetch the data after specific time'
          ],
          code: [
            {
              title: '',
              code: `// Server Side Rendering
const res = await fetch('https://jsonplaceholder.com', {
    cache: 'no-store'
});

// Static Side Generation
const res = await fetch('https://jsonplaceholder.com');

// Incremental Static Generation
const res = await fetch('https://jsonplaceholder.com', {
    next: { revalidate: 10 }
});
              `,
            }],
        },
        {
          title: "Crawler",
          keywords: "crawler",
          id: "crawler",
          description: `A crawler is a program used by search engines to collect data from the internet. When a crawler visits a website, it picks over the entire website's content (i.e. the text) and stores it in a databank. It also stores all the external and internal links to the website. 
          <br/> <br />
          Indexing: Google analyzes the text, images, and video files on the page, and stores the information in the Google index, which is a large database.
          `,
        },
      ]}
  ];
  
  export default NEXT_JS_CONFIG;
  