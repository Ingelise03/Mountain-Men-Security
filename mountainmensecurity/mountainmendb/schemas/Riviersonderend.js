export default{
    name: 'riviersonderend',
    title: 'Riviersonderend',
    type: 'document',
    fields:[
        {
            name: 'imageRiv',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'titleRiv',
            title: 'TitleRiv',
            type: 'string',
        },
        {
           name: 'slug',
           title:'Slug',
           type: 'slug',
           options: {
            source: 'titleRiv',
            maxLength: 90,
           },

        },
        {
            name:'rivdetails',
            title:'RivDetails',
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
            name: 'publishedAtRiv',
            title: 'Published at',
            type: 'date',
          },
    ],
    orderings:[{
        title: 'Published at, New',
        name: 'publishedAtRivDESC',
        by:[
            {
                field: 'publishedAtRiv', direction: 'desc'
            }
        ]
    }
        
    ]
};
