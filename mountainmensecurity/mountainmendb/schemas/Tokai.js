export default{
    name: 'tokai',
    title: 'Tokai',
    type: 'document',
    fields:[
        {
            name: 'imageTok',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'titleTok',
            title: 'TitleTok',
            type: 'string',
        },
        {
           name: 'slug',
           title:'Slug',
           type: 'slug',
           options: {
            source: 'titleTok',
            maxLength: 90,
           },

        },
        {
            name:'tokdetails',
            title:'TokDetails',
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
            name: 'publishedAtTok',
            title: 'Published at',
            type: 'date',
          },
    ],
    orderings:[{
        title: 'Published at, New',
        name: 'publishedAtTokDESC',
        by:[
            {
                field: 'publishedAtTok', direction: 'desc'
            }
        ]
    }
        
    ]
};
