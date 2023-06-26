const NEXT_JS_CONFIG = [
    {
      heading: "Next Js Foundation",
      pathname: "/next",
      children: [
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
          note: 'On both requests and responses, Http headers are added to transport metadata from A to B.',
        },
      ]}
  ];
  
  export default NEXT_JS_CONFIG;
  