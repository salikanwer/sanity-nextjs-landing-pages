export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '634565e1cc721f00b227a870',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4utbt7e6',
                  apiId: 'c17b782f-66b9-4935-b56c-85c7a42997b2'
                },
                {
                  buildHookId: '634565e1dc120700643bc11d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-djnpz7xm',
                  apiId: '7aba2e90-0188-49b8-956f-447b8197086f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/salikanwer/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-djnpz7xm.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
