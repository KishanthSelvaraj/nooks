export default {
    name : "office",
    title : "Office",
    type : "document",
    fields: [
        {
           name: "name",
           title: "Product Name",
           type: "string"
        },
        
         {
            name: "images",
            title: "Product Images",
            type: "array",
            of: [{type: "image"}],
            options : {
               hotspot : "true"
            }
         },
         {
           name : "slug",
           title : "Slug",
           type: "slug",
           options: {
            source : "name",
            maxLength : 90,
           }
         },
    ]
}