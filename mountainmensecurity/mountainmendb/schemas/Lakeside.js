export default{
    name: 'lakeside',
    title: 'Lakeside',
    type: 'document',
    fields:[
        {
            name: 'imageLake',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'titleLake',
            title: 'TitleLake',
            type: 'string',
        },
        {
           name: 'slug',
           title:'Slug',
           type: 'slug',
           options: {
            source: 'titleLake',
            maxLength: 90,
           },

        },
        {
            name:'lakedetails',
            title:'LakeDetails',
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
            name: 'publishedAtLake',
            title: 'Published at',
            type: 'date',
          },
    ],
    orderings:[{
        title: 'Published at, New',
        name: 'publishedAtLakeDESC',
        by:[
            {
                field: 'publishedAtLake', direction: 'desc'
            }
        ]
    }
        
    ]
};
