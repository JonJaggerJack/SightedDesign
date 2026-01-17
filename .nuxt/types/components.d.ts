
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

interface _GlobalComponents {
  'LightAbout': typeof import("../../components/light/About.vue").default
  'LightOthers PagesTeam': typeof import("../../components/light/Others Pages/Team.vue").default
  'LightOthers PagesTeamSingleSkills': typeof import("../../components/light/Others Pages/team-single/Skills.vue").default
  'LightOthers PagesTeamSingleTeam': typeof import("../../components/light/Others Pages/team-single/Team.vue").default
  'LightOthers PagesTeamHeader': typeof import("../../components/light/Others Pages/team/Header.vue").default
  'LightAboutBlog': typeof import("../../components/light/about/Blog.vue").default
  'LightAboutFooter': typeof import("../../components/light/about/Footer.vue").default
  'LightAboutHeader': typeof import("../../components/light/about/Header.vue").default
  'LightAboutIntro': typeof import("../../components/light/about/Intro.vue").default
  'LightAboutIntro2': typeof import("../../components/light/about/Intro2.vue").default
  'LightAboutMarquee': typeof import("../../components/light/about/Marquee.vue").default
  'LightAboutTeam': typeof import("../../components/light/about/Team.vue").default
  'LightAboutTestimonials': typeof import("../../components/light/about/Testimonials.vue").default
  'LightBlogDetailsBlog': typeof import("../../components/light/blog-details/Blog.vue").default
  'LightBlogDetailsFooter': typeof import("../../components/light/blog-details/Footer.vue").default
  'LightBlogDetailsRecent': typeof import("../../components/light/blog-details/Recent.vue").default
  'LightBlogDetailsSlider': typeof import("../../components/light/blog-details/Slider.vue").default
  'LightBlogListBlogs': typeof import("../../components/light/blog-list/Blogs.vue").default
  'LightBlogListFooter': typeof import("../../components/light/blog-list/Footer.vue").default
  'LightBlogListHeader': typeof import("../../components/light/blog-list/Header.vue").default
  'LightCommonFooter': typeof import("../../components/light/common/Footer.vue").default
  'LightCommonLines': typeof import("../../components/light/common/Lines.vue").default
  'LightCommonProgressScroll': typeof import("../../components/light/common/ProgressScroll.vue").default
  'LightCommonCusor': typeof import("../../components/light/common/cusor.vue").default
  'LightCommonLoader': typeof import("../../components/light/common/loader.vue").default
  'LightContact': typeof import("../../components/light/contact/Contact.vue").default
  'LightContactHeader': typeof import("../../components/light/contact/Header.vue").default
  'LightCreativeAgencyBlog': typeof import("../../components/light/creative-agency/Blog.vue").default
  'LightCreativeAgencyBrands': typeof import("../../components/light/creative-agency/Brands.vue").default
  'LightCreativeAgencyFooter': typeof import("../../components/light/creative-agency/Footer.vue").default
  'LightCreativeAgencyHeader': typeof import("../../components/light/creative-agency/Header.vue").default
  'LightCreativeAgencyImageScale': typeof import("../../components/light/creative-agency/ImageScale.vue").default
  'LightCreativeAgencyMarquee': typeof import("../../components/light/creative-agency/Marquee.vue").default
  'LightCreativeAgencyNavbar': typeof import("../../components/light/creative-agency/Navbar.vue").default
  'LightCreativeAgencyNumbers': typeof import("../../components/light/creative-agency/Numbers.vue").default
  'LightCreativeAgencyPortfolio': typeof import("../../components/light/creative-agency/Portfolio.vue").default
  'LightCreativeAgencyServices': typeof import("../../components/light/creative-agency/Services.vue").default
  'LightCreativeAgencySkills': typeof import("../../components/light/creative-agency/Skills.vue").default
  'LightCreativeAgencyTestimonials': typeof import("../../components/light/creative-agency/Testimonials.vue").default
  'LightModernAgencyAbout': typeof import("../../components/light/modern-agency/About.vue").default
  'LightModernAgencyBlog': typeof import("../../components/light/modern-agency/Blog.vue").default
  'LightModernAgencyBrands': typeof import("../../components/light/modern-agency/Brands.vue").default
  'LightModernAgencyFooter': typeof import("../../components/light/modern-agency/Footer.vue").default
  'LightModernAgencyHeader': typeof import("../../components/light/modern-agency/Header.vue").default
  'LightModernAgencyMarquee': typeof import("../../components/light/modern-agency/Marquee.vue").default
  'LightModernAgencyNumber': typeof import("../../components/light/modern-agency/Number.vue").default
  'LightModernAgencyPortfolio': typeof import("../../components/light/modern-agency/Portfolio.vue").default
  'LightModernAgencyServices': typeof import("../../components/light/modern-agency/Services.vue").default
  'LightModernAgencyServicesTab': typeof import("../../components/light/modern-agency/ServicesTab.vue").default
  'LightModernAgencyTeam': typeof import("../../components/light/modern-agency/Team.vue").default
  'LightModernAgencyTestimonials': typeof import("../../components/light/modern-agency/Testimonials.vue").default
  'LightPortfolioGalleryHeader': typeof import("../../components/light/portfolio-gallery/Header.vue").default
  'LightPortfolioGalleryPortfolio': typeof import("../../components/light/portfolio-gallery/Portfolio.vue").default
  'LightServicesBlog': typeof import("../../components/light/services/Blog.vue").default
  'LightServicesHeader': typeof import("../../components/light/services/Header.vue").default
  'LightServicesMarquee': typeof import("../../components/light/services/Marquee.vue").default
  'LightServicesPrice': typeof import("../../components/light/services/Price.vue").default
  'LightServicesProcess': typeof import("../../components/light/services/Process.vue").default
  'LightServices': typeof import("../../components/light/services/Services.vue").default
  'LightShowcaseHalfSliderHeader': typeof import("../../components/light/showcase-half-slider/Header.vue").default
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only").default
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
  'NuxtImg': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
  'NuxtPicture': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default
  'LazyLightAbout': LazyComponent<typeof import("../../components/light/About.vue").default>
  'LazyLightOthers PagesTeam': LazyComponent<typeof import("../../components/light/Others Pages/Team.vue").default>
  'LazyLightOthers PagesTeamSingleSkills': LazyComponent<typeof import("../../components/light/Others Pages/team-single/Skills.vue").default>
  'LazyLightOthers PagesTeamSingleTeam': LazyComponent<typeof import("../../components/light/Others Pages/team-single/Team.vue").default>
  'LazyLightOthers PagesTeamHeader': LazyComponent<typeof import("../../components/light/Others Pages/team/Header.vue").default>
  'LazyLightAboutBlog': LazyComponent<typeof import("../../components/light/about/Blog.vue").default>
  'LazyLightAboutFooter': LazyComponent<typeof import("../../components/light/about/Footer.vue").default>
  'LazyLightAboutHeader': LazyComponent<typeof import("../../components/light/about/Header.vue").default>
  'LazyLightAboutIntro': LazyComponent<typeof import("../../components/light/about/Intro.vue").default>
  'LazyLightAboutIntro2': LazyComponent<typeof import("../../components/light/about/Intro2.vue").default>
  'LazyLightAboutMarquee': LazyComponent<typeof import("../../components/light/about/Marquee.vue").default>
  'LazyLightAboutTeam': LazyComponent<typeof import("../../components/light/about/Team.vue").default>
  'LazyLightAboutTestimonials': LazyComponent<typeof import("../../components/light/about/Testimonials.vue").default>
  'LazyLightBlogDetailsBlog': LazyComponent<typeof import("../../components/light/blog-details/Blog.vue").default>
  'LazyLightBlogDetailsFooter': LazyComponent<typeof import("../../components/light/blog-details/Footer.vue").default>
  'LazyLightBlogDetailsRecent': LazyComponent<typeof import("../../components/light/blog-details/Recent.vue").default>
  'LazyLightBlogDetailsSlider': LazyComponent<typeof import("../../components/light/blog-details/Slider.vue").default>
  'LazyLightBlogListBlogs': LazyComponent<typeof import("../../components/light/blog-list/Blogs.vue").default>
  'LazyLightBlogListFooter': LazyComponent<typeof import("../../components/light/blog-list/Footer.vue").default>
  'LazyLightBlogListHeader': LazyComponent<typeof import("../../components/light/blog-list/Header.vue").default>
  'LazyLightCommonFooter': LazyComponent<typeof import("../../components/light/common/Footer.vue").default>
  'LazyLightCommonLines': LazyComponent<typeof import("../../components/light/common/Lines.vue").default>
  'LazyLightCommonProgressScroll': LazyComponent<typeof import("../../components/light/common/ProgressScroll.vue").default>
  'LazyLightCommonCusor': LazyComponent<typeof import("../../components/light/common/cusor.vue").default>
  'LazyLightCommonLoader': LazyComponent<typeof import("../../components/light/common/loader.vue").default>
  'LazyLightContact': LazyComponent<typeof import("../../components/light/contact/Contact.vue").default>
  'LazyLightContactHeader': LazyComponent<typeof import("../../components/light/contact/Header.vue").default>
  'LazyLightCreativeAgencyBlog': LazyComponent<typeof import("../../components/light/creative-agency/Blog.vue").default>
  'LazyLightCreativeAgencyBrands': LazyComponent<typeof import("../../components/light/creative-agency/Brands.vue").default>
  'LazyLightCreativeAgencyFooter': LazyComponent<typeof import("../../components/light/creative-agency/Footer.vue").default>
  'LazyLightCreativeAgencyHeader': LazyComponent<typeof import("../../components/light/creative-agency/Header.vue").default>
  'LazyLightCreativeAgencyImageScale': LazyComponent<typeof import("../../components/light/creative-agency/ImageScale.vue").default>
  'LazyLightCreativeAgencyMarquee': LazyComponent<typeof import("../../components/light/creative-agency/Marquee.vue").default>
  'LazyLightCreativeAgencyNavbar': LazyComponent<typeof import("../../components/light/creative-agency/Navbar.vue").default>
  'LazyLightCreativeAgencyNumbers': LazyComponent<typeof import("../../components/light/creative-agency/Numbers.vue").default>
  'LazyLightCreativeAgencyPortfolio': LazyComponent<typeof import("../../components/light/creative-agency/Portfolio.vue").default>
  'LazyLightCreativeAgencyServices': LazyComponent<typeof import("../../components/light/creative-agency/Services.vue").default>
  'LazyLightCreativeAgencySkills': LazyComponent<typeof import("../../components/light/creative-agency/Skills.vue").default>
  'LazyLightCreativeAgencyTestimonials': LazyComponent<typeof import("../../components/light/creative-agency/Testimonials.vue").default>
  'LazyLightModernAgencyAbout': LazyComponent<typeof import("../../components/light/modern-agency/About.vue").default>
  'LazyLightModernAgencyBlog': LazyComponent<typeof import("../../components/light/modern-agency/Blog.vue").default>
  'LazyLightModernAgencyBrands': LazyComponent<typeof import("../../components/light/modern-agency/Brands.vue").default>
  'LazyLightModernAgencyFooter': LazyComponent<typeof import("../../components/light/modern-agency/Footer.vue").default>
  'LazyLightModernAgencyHeader': LazyComponent<typeof import("../../components/light/modern-agency/Header.vue").default>
  'LazyLightModernAgencyMarquee': LazyComponent<typeof import("../../components/light/modern-agency/Marquee.vue").default>
  'LazyLightModernAgencyNumber': LazyComponent<typeof import("../../components/light/modern-agency/Number.vue").default>
  'LazyLightModernAgencyPortfolio': LazyComponent<typeof import("../../components/light/modern-agency/Portfolio.vue").default>
  'LazyLightModernAgencyServices': LazyComponent<typeof import("../../components/light/modern-agency/Services.vue").default>
  'LazyLightModernAgencyServicesTab': LazyComponent<typeof import("../../components/light/modern-agency/ServicesTab.vue").default>
  'LazyLightModernAgencyTeam': LazyComponent<typeof import("../../components/light/modern-agency/Team.vue").default>
  'LazyLightModernAgencyTestimonials': LazyComponent<typeof import("../../components/light/modern-agency/Testimonials.vue").default>
  'LazyLightPortfolioGalleryHeader': LazyComponent<typeof import("../../components/light/portfolio-gallery/Header.vue").default>
  'LazyLightPortfolioGalleryPortfolio': LazyComponent<typeof import("../../components/light/portfolio-gallery/Portfolio.vue").default>
  'LazyLightServicesBlog': LazyComponent<typeof import("../../components/light/services/Blog.vue").default>
  'LazyLightServicesHeader': LazyComponent<typeof import("../../components/light/services/Header.vue").default>
  'LazyLightServicesMarquee': LazyComponent<typeof import("../../components/light/services/Marquee.vue").default>
  'LazyLightServicesPrice': LazyComponent<typeof import("../../components/light/services/Price.vue").default>
  'LazyLightServicesProcess': LazyComponent<typeof import("../../components/light/services/Process.vue").default>
  'LazyLightServices': LazyComponent<typeof import("../../components/light/services/Services.vue").default>
  'LazyLightShowcaseHalfSliderHeader': LazyComponent<typeof import("../../components/light/showcase-half-slider/Header.vue").default>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only").default>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
