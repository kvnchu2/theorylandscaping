import gql from "graphql-tag";
import apolloClient from "./apollo-client";

export async function getAllPosts() {
  const { data } = await apolloClient.query({
    query: gql`
      query GetAllPosts {
        postCollection {
          items {
            title
            subtitle
            sys {
              publishedAt
            }
            slug
            image {
              url
            }
          }
        }
      }
    `,
  });
  return data.postCollection.items;
}

export async function getAllAbouts() {
  const { data } = await apolloClient.query({
    query: gql`
      query GetAllAbouts {
        aboutCollection {
          items {
            name
            description
            sys {
              publishedAt
            }
            image {
              url
            }
            profession
          }
        }
      }
    `,
  });
  return data.aboutCollection.items;
}

export async function getAllFaqs() {
  const { data } = await apolloClient.query({
    query: gql`
      query GetAllFaqs {
        faqCollection {
          items {
            block
            question
            answer
          }
        }
      }
    `,
  });
  return data.faqCollection.items;
}