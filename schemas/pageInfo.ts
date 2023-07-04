import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "additionalRole",
      title: "AdditionalRole",
      type: "string",
    }),
    defineField({
      name: "quote1",
      title: "Quote1",
      type: "string",
    }),
    defineField({
      name: "quote2",
      title: "Quote2",
      type: "string",
    }),
    defineField({
      name: "backgroundInfo",
      title: "BackgroundInfo",
      type: "string",
    }),
    defineField({
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    }),
  ],
});
