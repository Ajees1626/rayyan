import { useEffect } from 'react'

const DEFAULT_SITE_URL = typeof import.meta.env.VITE_SITE_URL !== 'undefined'
  ? import.meta.env.VITE_SITE_URL
  : 'https://rayyanwindows.com'
const DEFAULT_OG_IMAGE = 'https://res.cloudinary.com/dcc2v0usg/image/upload/v1770790337/logo_awkalb.webp'

function setMeta(nameOrProp, value, isProperty = false) {
  const attr = isProperty ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, nameOrProp)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"][href]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * SEO & meta tags per page. Updates document title and meta via useEffect (no external dependency).
 */
function Seo({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
}) {
  const siteTitle = 'Rayyan - UPVC Windows & Doors'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const url = canonical ? (canonical.startsWith('http') ? canonical : `${DEFAULT_SITE_URL}${canonical}`) : DEFAULT_SITE_URL
  const image = ogImage ? (ogImage.startsWith('http') ? ogImage : `${DEFAULT_SITE_URL}${ogImage}`) : DEFAULT_OG_IMAGE

  useEffect(() => {
    document.title = fullTitle
    setMeta('description', description)
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('language', 'English')

    if (canonical !== false) {
      setLink('canonical', url)
    }

    setMeta('og:type', ogType, true)
    setMeta('og:site_name', siteTitle, true)
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', description, true)
    setMeta('og:url', url, true)
    setMeta('og:image', image, true)
    setMeta('og:locale', 'en_IN', true)
    setMeta('og:image:alt', fullTitle, true)

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setMeta('twitter:image', image)
  }, [fullTitle, description, url, image, noindex, ogType, siteTitle, canonical])

  return null
}

export default Seo
