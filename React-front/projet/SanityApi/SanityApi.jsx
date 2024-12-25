import sanityClient from "../../../sanity-CMS/.sanity/runtime/Client.js";
  export const getAlldata = async () => {
    const res = await sanityClient.fetch(`*[_type == "post"]{
      _id,
      title,
      slug,
      body,
      link, 
    "imageUrl": mainImage.asset->url ,
     "categories" : categories[]->title ,
      "author" : author->name} | order(_updatedAt desc)`);
      return res;
  };

    export const getdatabyslug = async (slug) => {
      const res = await sanityClient.fetch(`*[_type == "post" && slug.current == '${slug}'][0]{
        _id,
        title,
        slug,
        body,
        link, 
      "imageUrl": mainImage.asset->url ,
       "categories" : categories[]->title ,
        "author" : author->name}`);
        return res;
    };

      export const getcategories = async () => {
        const res = await sanityClient.fetch(`*[_type == "category"]{_id,title,}`);
          return res;
      };

