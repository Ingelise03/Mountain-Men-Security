export default{
    name: 'napier',
    title: 'Napier',
    type: 'document',
    fields:[
        {
            name: 'imageNap',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'titleNap',
            title: 'TitleNap',
            type: 'string',
        },
        {
           name: 'slug',
           title:'Slug',
           type: 'slug',
           options: {
            source: 'titleNap',
            maxLength: 90,
           },

        },
        {
            name:'napdetails',
            title:'NapDetails',
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
            name: 'publishedAtNap',
            title: 'Published at',
            type: 'date',
          },
    ],
    orderings:[{
        title: 'Published at, New',
        name: 'publishedAtNapDESC',
        by:[
            {
                field: 'publishedAtNap', direction: 'desc'
            }
        ]
    }
        
    ]
};
