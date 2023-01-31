export default{
    name: 'muis',
    title: 'Muis',
    type: 'document',
    fields:[
        {
            name: 'imagem',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'titleMuis',
            title: 'TitleMuis',
            type: 'string',
        },
        {
           name: 'slug',
           title:'Slug',
           type: 'slug',
           options: {
            source: 'titleMuis',
            maxLength: 90,
           },

        },
        {
            name:'muisdetails',
            title:'MuisDetails',
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
            name: 'publishedAtMuis',
            title: 'Published at',
            type: 'date',
          },
    ],
    orderings:[{
        title: 'Published at, New',
        name: 'publishedAtMuisDESC',
        by:[
            {
                field: 'publishedAtMuis', direction: 'desc'
            }
        ]
    }
        
    ]
};
