export type HeroQuery = {
  heroCollection: {
    items: {
      title: string
      subtitle: string
      preTitle: string
      callToActionsCollection: {
        items: {
          link: string
          label: string
        }[]
      }
    }[]
  }
}

export type LogoWallQuery = {
  assetCollection: {
    items: {
      width: number
      url: string
      title: string
      height: number
    }[]
  }
}

export type HeaderNavQuery = {
  navigationCollection: {
    items: {
      name: string
      linksCollection: {
        items: {
          link: string
          label: string
        }[]
      }
    }[]
  }
}

export type CustomerPost = {
  customerPostCollection: {
    items: {
      title: string
      slug: string
      customer: {
        logo: {
          url: string
          title: string
          width: number
          height: number
        }
        name: string
      }
      body: {
        json: JSON
      }
    }[]
  }
}
