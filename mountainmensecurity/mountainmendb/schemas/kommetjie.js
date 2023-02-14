export default{
    name: 'kommetjie',
    title: 'Kommetjie',
    type: 'document',
    fields:[
        {
            name: 'imageKom',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'titleKom',
            title: 'TitleKom',
            type: 'string',
        },
        {
           name: 'slug',
           title:'Slug',
           type: 'slug',
           options: {
            source: 'titleKom',
            maxLength: 90,
           },

        },
        {
            name:'komdetails',
            title:'KomDetails',
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
            name: 'publishedAtKom',
            title: 'Published at',
            type: 'date',
          },
    ],
    orderings:[{
        title: 'Published at, New',
        name: 'publishedAtKOMDESC',
        by:[
            {
                field: 'publishedAtKOM', direction: 'desc'
            }
        ]
    }
        
    ]
};