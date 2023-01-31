export default{
    name: 'kirstenhof',
    title: 'Kirstenhof',
    type: 'document',
    fields:[
        {
            name: 'imageKirst',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'titleKirst',
            title: 'TitleKirst',
            type: 'string',
        },
        {
           name: 'slug',
           title:'Slug',
           type: 'slug',
           options: {
            source: 'titleKirst',
            maxLength: 90,
           },

        },
        {
            name:'kirstdetails',
            title:'KirstDetails',
            type:'array',
            of: [
                {
                  title: 'Block',
                  type: 'block',
                  styles: [{title: 'Normal', value: 'normal'}],
                  lists: []
                }
              ]
            
        },
        {
            name: 'publishedAtKirst',
            title: 'Published at',
            type: 'date',
          },
    ],
    orderings:[{
        title: 'Published at, New',
        name: 'publishedAtKirstDESC',
        by:[
            {
                field: 'publishedAtKirst', direction: 'desc'
            }
        ]
    }
        
    ]
};
