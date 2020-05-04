import NextHead from 'next/head';

const head = ({ title, description }) => (
     <NextHead>
          <meta charSet="UTF-8" />
          <title>{title || ''}</title>
          <meta name="description" content={description || ''} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
               rel="stylesheet"
               href="https://fonts.googleapis.com/css2?family=Inter"
          ></link>
          <link
               href="https://unpkg.com/aos@2.3.1/dist/aos.css"
               rel="stylesheet"
          ></link>
     </NextHead>
);

export default head;
