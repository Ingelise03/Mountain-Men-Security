export default{
    name: 'bishopscourt',
    title: 'Bishopscourt',
    type: 'document',
    fields:[
        {
            name: 'imageBis',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'titleBis',
            title: 'TitleBis',
            type: 'string',
        },
        {
           name: 'slug',
           title:'Slug',
           type: 'slug',
           options: {
            source: 'titleBis',
            maxLength: 90,
           },

        },
        {
            name:'bisdetails',
            title:'BisDetails',
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
            name: 'publishedAtBis',
            title: 'Published at',
            type: 'date',
          },
    ],
    orderings:[{
        title: 'Published at, New',
        name: 'publishedAtBisDESC',
        by:[
            {
                field: 'publishedAtBis', direction: 'desc'
            }
        ]
    }
        
    ]
};
