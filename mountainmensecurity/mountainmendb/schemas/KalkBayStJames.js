export default{
    name: 'kalkBaystjames',
    title: 'KalkBaystJames',
    type: 'document',
    fields:[
        {
            name: 'imageKJ',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'titleKJ',
            title: 'TitleKJ',
            type: 'string',
        },
        {
           name: 'slug',
           title:'Slug',
           type: 'slug',
           options: {
            source: 'titleKJ',
            maxLength: 90,
           },

        },
        {
            name:'kjdetails',
            title:'KJDetails',
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
            name: 'publishedAtKJ',
            title: 'Published at',
            type: 'date',
          },
    ],
    orderings:[{
        title: 'Published at, New',
        name: 'publishedAtKJDESC',
        by:[
            {
                field: 'publishedAtKJ', direction: 'desc'
            }
        ]
    }
        
    ]
};
