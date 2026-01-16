
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const LightAbout: typeof import("../components/light/About.vue").default
export const LightAboutBlog: typeof import("../components/light/about/Blog.vue").default
export const LightAboutFooter: typeof import("../components/light/about/Footer.vue").default
export const LightAboutHeader: typeof import("../components/light/about/Header.vue").default
export const LightAboutIntro: typeof import("../components/light/about/Intro.vue").default
export const LightAboutIntro2: typeof import("../components/light/about/Intro2.vue").default
export const LightAboutMarquee: typeof import("../components/light/about/Marquee.vue").default
export const LightAboutTeam: typeof import("../components/light/about/Team.vue").default
export const LightAboutTestimonials: typeof import("../components/light/about/Testimonials.vue").default
export const LightBlogListBlogs: typeof import("../components/light/blog-list/Blogs.vue").default
export const LightBlogListFooter: typeof import("../components/light/blog-list/Footer.vue").default
export const LightBlogListHeader: typeof import("../components/light/blog-list/Header.vue").default
export const LightCommonFooter: typeof import("../components/light/common/Footer.vue").default
export const LightCommonLines: typeof import("../components/light/common/Lines.vue").default
export const LightCommonProgressScroll: typeof import("../components/light/common/ProgressScroll.vue").default
export const LightCommonCusor: typeof import("../components/light/common/cusor.vue").default
export const LightCommonLoader: typeof import("../components/light/common/loader.vue").default
export const LightContact: typeof import("../components/light/contact/Contact.vue").default
export const LightContactHeader: typeof import("../components/light/contact/Header.vue").default
export const LightCreativeAgencyBlog: typeof import("../components/light/creative-agency/Blog.vue").default
export const LightCreativeAgencyBrands: typeof import("../components/light/creative-agency/Brands.vue").default
export const LightCreativeAgencyFooter: typeof import("../components/light/creative-agency/Footer.vue").default
export const LightCreativeAgencyHeader: typeof import("../components/light/creative-agency/Header.vue").default
export const LightCreativeAgencyImageScale: typeof import("../components/light/creative-agency/ImageScale.vue").default
export const LightCreativeAgencyMarquee: typeof import("../components/light/creative-agency/Marquee.vue").default
export const LightCreativeAgencyNavbar: typeof import("../components/light/creative-agency/Navbar.vue").default
export const LightCreativeAgencyNumbers: typeof import("../components/light/creative-agency/Numbers.vue").default
export const LightCreativeAgencyPortfolio: typeof import("../components/light/creative-agency/Portfolio.vue").default
export const LightCreativeAgencyServices: typeof import("../components/light/creative-agency/Services.vue").default
export const LightCreativeAgencySkills: typeof import("../components/light/creative-agency/Skills.vue").default
export const LightCreativeAgencyTestimonials: typeof import("../components/light/creative-agency/Testimonials.vue").default
export const LightModernAgencyAbout: typeof import("../components/light/modern-agency/About.vue").default
export const LightModernAgencyBlog: typeof import("../components/light/modern-agency/Blog.vue").default
export const LightModernAgencyBrands: typeof import("../components/light/modern-agency/Brands.vue").default
export const LightModernAgencyFooter: typeof import("../components/light/modern-agency/Footer.vue").default
export const LightModernAgencyHeader: typeof import("../components/light/modern-agency/Header.vue").default
export const LightModernAgencyMarquee: typeof import("../components/light/modern-agency/Marquee.vue").default
export const LightModernAgencyNumber: typeof import("../components/light/modern-agency/Number.vue").default
export const LightModernAgencyPortfolio: typeof import("../components/light/modern-agency/Portfolio.vue").default
export const LightModernAgencyServices: typeof import("../components/light/modern-agency/Services.vue").default
export const LightModernAgencyServicesTab: typeof import("../components/light/modern-agency/ServicesTab.vue").default
export const LightModernAgencyTeam: typeof import("../components/light/modern-agency/Team.vue").default
export const LightModernAgencyTestimonials: typeof import("../components/light/modern-agency/Testimonials.vue").default
export const LightPortfolioGalleryHeader: typeof import("../components/light/portfolio-gallery/Header.vue").default
export const LightPortfolioGalleryPortfolio: typeof import("../components/light/portfolio-gallery/Portfolio.vue").default
export const LightServicesBlog: typeof import("../components/light/services/Blog.vue").default
export const LightServicesHeader: typeof import("../components/light/services/Header.vue").default
export const LightServicesMarquee: typeof import("../components/light/services/Marquee.vue").default
export const LightServicesPrice: typeof import("../components/light/services/Price.vue").default
export const LightServicesProcess: typeof import("../components/light/services/Process.vue").default
export const LightServices: typeof import("../components/light/services/Services.vue").default
export const LightShowcaseHalfSliderHeader: typeof import("../components/light/showcase-half-slider/Header.vue").default
export const LightTeamSingleSkills: typeof import("../components/light/team-single/Skills.vue").default
export const LightTeamSingleTeam: typeof import("../components/light/team-single/Team.vue").default
export const LightTeamHeader: typeof import("../components/light/team/Header.vue").default
export const LightTeam: typeof import("../components/light/team/Team.vue").default
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only").default
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only").default
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page").default
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components").Link
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components").Base
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components").Title
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components").Style
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components").Head
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components").Html
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components").Body
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default
export const LazyLightAbout: LazyComponent<typeof import("../components/light/About.vue").default>
export const LazyLightAboutBlog: LazyComponent<typeof import("../components/light/about/Blog.vue").default>
export const LazyLightAboutFooter: LazyComponent<typeof import("../components/light/about/Footer.vue").default>
export const LazyLightAboutHeader: LazyComponent<typeof import("../components/light/about/Header.vue").default>
export const LazyLightAboutIntro: LazyComponent<typeof import("../components/light/about/Intro.vue").default>
export const LazyLightAboutIntro2: LazyComponent<typeof import("../components/light/about/Intro2.vue").default>
export const LazyLightAboutMarquee: LazyComponent<typeof import("../components/light/about/Marquee.vue").default>
export const LazyLightAboutTeam: LazyComponent<typeof import("../components/light/about/Team.vue").default>
export const LazyLightAboutTestimonials: LazyComponent<typeof import("../components/light/about/Testimonials.vue").default>
export const LazyLightBlogListBlogs: LazyComponent<typeof import("../components/light/blog-list/Blogs.vue").default>
export const LazyLightBlogListFooter: LazyComponent<typeof import("../components/light/blog-list/Footer.vue").default>
export const LazyLightBlogListHeader: LazyComponent<typeof import("../components/light/blog-list/Header.vue").default>
export const LazyLightCommonFooter: LazyComponent<typeof import("../components/light/common/Footer.vue").default>
export const LazyLightCommonLines: LazyComponent<typeof import("../components/light/common/Lines.vue").default>
export const LazyLightCommonProgressScroll: LazyComponent<typeof import("../components/light/common/ProgressScroll.vue").default>
export const LazyLightCommonCusor: LazyComponent<typeof import("../components/light/common/cusor.vue").default>
export const LazyLightCommonLoader: LazyComponent<typeof import("../components/light/common/loader.vue").default>
export const LazyLightContact: LazyComponent<typeof import("../components/light/contact/Contact.vue").default>
export const LazyLightContactHeader: LazyComponent<typeof import("../components/light/contact/Header.vue").default>
export const LazyLightCreativeAgencyBlog: LazyComponent<typeof import("../components/light/creative-agency/Blog.vue").default>
export const LazyLightCreativeAgencyBrands: LazyComponent<typeof import("../components/light/creative-agency/Brands.vue").default>
export const LazyLightCreativeAgencyFooter: LazyComponent<typeof import("../components/light/creative-agency/Footer.vue").default>
export const LazyLightCreativeAgencyHeader: LazyComponent<typeof import("../components/light/creative-agency/Header.vue").default>
export const LazyLightCreativeAgencyImageScale: LazyComponent<typeof import("../components/light/creative-agency/ImageScale.vue").default>
export const LazyLightCreativeAgencyMarquee: LazyComponent<typeof import("../components/light/creative-agency/Marquee.vue").default>
export const LazyLightCreativeAgencyNavbar: LazyComponent<typeof import("../components/light/creative-agency/Navbar.vue").default>
export const LazyLightCreativeAgencyNumbers: LazyComponent<typeof import("../components/light/creative-agency/Numbers.vue").default>
export const LazyLightCreativeAgencyPortfolio: LazyComponent<typeof import("../components/light/creative-agency/Portfolio.vue").default>
export const LazyLightCreativeAgencyServices: LazyComponent<typeof import("../components/light/creative-agency/Services.vue").default>
export const LazyLightCreativeAgencySkills: LazyComponent<typeof import("../components/light/creative-agency/Skills.vue").default>
export const LazyLightCreativeAgencyTestimonials: LazyComponent<typeof import("../components/light/creative-agency/Testimonials.vue").default>
export const LazyLightModernAgencyAbout: LazyComponent<typeof import("../components/light/modern-agency/About.vue").default>
export const LazyLightModernAgencyBlog: LazyComponent<typeof import("../components/light/modern-agency/Blog.vue").default>
export const LazyLightModernAgencyBrands: LazyComponent<typeof import("../components/light/modern-agency/Brands.vue").default>
export const LazyLightModernAgencyFooter: LazyComponent<typeof import("../components/light/modern-agency/Footer.vue").default>
export const LazyLightModernAgencyHeader: LazyComponent<typeof import("../components/light/modern-agency/Header.vue").default>
export const LazyLightModernAgencyMarquee: LazyComponent<typeof import("../components/light/modern-agency/Marquee.vue").default>
export const LazyLightModernAgencyNumber: LazyComponent<typeof import("../components/light/modern-agency/Number.vue").default>
export const LazyLightModernAgencyPortfolio: LazyComponent<typeof import("../components/light/modern-agency/Portfolio.vue").default>
export const LazyLightModernAgencyServices: LazyComponent<typeof import("../components/light/modern-agency/Services.vue").default>
export const LazyLightModernAgencyServicesTab: LazyComponent<typeof import("../components/light/modern-agency/ServicesTab.vue").default>
export const LazyLightModernAgencyTeam: LazyComponent<typeof import("../components/light/modern-agency/Team.vue").default>
export const LazyLightModernAgencyTestimonials: LazyComponent<typeof import("../components/light/modern-agency/Testimonials.vue").default>
export const LazyLightPortfolioGalleryHeader: LazyComponent<typeof import("../components/light/portfolio-gallery/Header.vue").default>
export const LazyLightPortfolioGalleryPortfolio: LazyComponent<typeof import("../components/light/portfolio-gallery/Portfolio.vue").default>
export const LazyLightServicesBlog: LazyComponent<typeof import("../components/light/services/Blog.vue").default>
export const LazyLightServicesHeader: LazyComponent<typeof import("../components/light/services/Header.vue").default>
export const LazyLightServicesMarquee: LazyComponent<typeof import("../components/light/services/Marquee.vue").default>
export const LazyLightServicesPrice: LazyComponent<typeof import("../components/light/services/Price.vue").default>
export const LazyLightServicesProcess: LazyComponent<typeof import("../components/light/services/Process.vue").default>
export const LazyLightServices: LazyComponent<typeof import("../components/light/services/Services.vue").default>
export const LazyLightShowcaseHalfSliderHeader: LazyComponent<typeof import("../components/light/showcase-half-slider/Header.vue").default>
export const LazyLightTeamSingleSkills: LazyComponent<typeof import("../components/light/team-single/Skills.vue").default>
export const LazyLightTeamSingleTeam: LazyComponent<typeof import("../components/light/team-single/Team.vue").default>
export const LazyLightTeamHeader: LazyComponent<typeof import("../components/light/team/Header.vue").default>
export const LazyLightTeam: LazyComponent<typeof import("../components/light/team/Team.vue").default>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only").default>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only").default>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page").default>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Link>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Base>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Title>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Style>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Head>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Html>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Body>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default>

export const componentNames: string[]
