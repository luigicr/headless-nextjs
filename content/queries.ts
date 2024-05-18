import "server-only"
import { CustomerPost, HeaderNavQuery, HeroQuery, LogoWallQuery } from "@/types"
import { contentGraphQLFetcher } from "./fetch"

export const getContentForCustomerPost = async (slug: string) => {
  const query = `#graphql
    query CustomerPostCollection($where: CustomerPostFilter) {
    customerPostCollection(where: $where) {
      items {
        title
        slug
        customer {
          logo {
            url
            title
            width
            height
          }
          name
        }
        body {
          json
        }
      }
    }
  }`

  const data = await contentGraphQLFetcher<CustomerPost>({
    query,
    variables: {
      where: {
        slug: slug,
      },
    },
  })
  if (!data) {
    throw new Error("oops")
  }

  return data
}

export const getContentForLogoWall = async () => {
  const query = `#graphql
    query AssetCollection($where: AssetFilter) {
    assetCollection(where: $where) {
      items {
        width
        url
        title
        height
      }
    }
  }`

  const data = await contentGraphQLFetcher<LogoWallQuery>({
    query,
    variables: {
      where: {
        title_contains: "client",
      },
    },
  })
  if (!data) {
    throw new Error("oops")
  }

  return data
}

export const getContentForHero = async (isDraft = false) => {
  const query = `#graphql
  query HeroCollection {
    heroCollection(preview: ${isDraft ? "true" : "false"}) {
      items {
        title
        subtitle
        preTitle
        callToActionsCollection {
          items {
            link
            label
          }
        }
      }
    }
  }`

  const data = await contentGraphQLFetcher<HeroQuery>({
    query,
    preview: isDraft,
  })
  if (!data) {
    throw new Error("oops")
  }

  return data
}

export const getContentForHeaderNav = async () => {
  const query = `#graphql
    query NavigationCollection($where: NavigationFilter) {
      navigationCollection(where: $where) {
        items {
          name
          linksCollection {
            items {
              link
              label
            }
          }
        }
      }
    }`

  const data = await contentGraphQLFetcher<HeaderNavQuery>({
    query,
    variables: {
      where: {
        name: "Header",
      },
    },
  })
  if (!data) {
    throw new Error("oops")
  }

  return data
}

export const getCustomerSlugs = async () => {
  const query = `#graphql
    {
      customerPostCollection {
        items {
          slug
        }
      }
    }
  `

  const data = await contentGraphQLFetcher<{
    customerPostCollection: { items: { slug: string }[] }
  }>({ query })

  if (!data) {
    throw new Error("oops")
  }

  return data
}

export const getSlugsForPosts = async () => {
  const query = `#graphql
    {
      customerPostCollection {
        items {
          slug
        }
      }
    }
  `

  const data = await contentGraphQLFetcher<{
    customerPostCollection: {
      items: { slug: string }[]
    }
  }>({ query })

  if (!data) {
    throw new Error("oops")
  }

  return data
}
