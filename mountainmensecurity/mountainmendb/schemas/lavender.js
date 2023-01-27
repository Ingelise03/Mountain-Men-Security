export default{
    name: 'lavender',
    title: 'Lavender',
    type: 'document',
    fields:[
        {
            name: 'imageL',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'titleLavender',
            title: 'TitleLavender',
            type: 'string',
        },
        {
           name: 'slug',
           title:'Slug',
           type: 'slug',
           options: {
            source: 'titleLavender',
            maxLength: 90,
           },

        },
        {
            name:'lavenderdetails',
            title:'LavenderDetails',
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
            name: 'publishedAtLavender',
            title: 'Published at',
            type: 'date',
          },
    ],
    orderings:[{
        title: 'Published at, New',
        name: 'publishedAtLavenderDESC',
        by:[
            {
                field: 'publishedAtLavender', direction: 'desc'
            }
        ]
    }
        
    ]
};
