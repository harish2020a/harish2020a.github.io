import { client } from "../lib/sanity.client";

export const fetchData = async () => {
  const data = await client.fetch(`
  {
    "experiences":*[_type == 'experience']{
      ...,
      technologies[]->
    },
    "pageInfo":*[_type == 'pageInfo'][0],
    "projects":*[_type == 'project']{
      ...,
      technologies[]->
    },
        "skills": *[_type == 'skill'],
        "socials": *[_type == 'social'],
      }`);
  return data;
};
