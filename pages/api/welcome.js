// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      link: 'https://nextjs.org/docs',
      header: 'Documentation &rarr;',
      content: 'Find in-depth information about Next.js features and API.',
    },
    {
      link: 'https://nextjs.org/learn',
      header: 'Learn &rarr;',
      content: 'Learn about Next.js in an interactive course with quizzes!',
    },
    {
      link: 'https://github.com/vercel/next.js/tree/master/examples',
      header: 'Examples &rarr;',
      content: 'Discover and deploy boilerplate example Next.js projects.',
    },
    {
      link:
        'https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
      header: 'Deploy &rarr;',
      content: 'Instantly deploy your Next.js site to a public URL with Vercel.',
    },
  ]);
};
