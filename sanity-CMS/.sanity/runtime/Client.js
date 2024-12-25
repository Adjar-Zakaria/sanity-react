import {createClient} from "@sanity/client";

export default createClient({
  projectId: "ru5lf6ow", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
});