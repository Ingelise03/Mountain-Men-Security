export default{
    name: 'bredasdorp',
    title: 'Bredasdorp',
    type: 'document',
    fields:[
        {
            name: 'imageBre',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'titleBre',
            title: 'TitleBre',
            type: 'string',
        },
        {
           name: 'slug',
           title:'Slug',
           type: 'slug',
           options: {
            source: 'titleBre',
            maxLength: 90,
           },

        },
        {
            name:'bredetails',
            title:'BreDetails',
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
            name: 'publishedAtBre',
            title: 'Published at',
            type: 'date',
          },
    ],
    orderings:[{
        title: 'Published at, New',
        name: 'publishedAtBreDESC',
        by:[
            {
                field: 'publishedAtBre', direction: 'desc'
            }
        ]
    }
        
    ]
};
