import client from '@services/cmsClient'

export default async function handler({ query: { slug }}, res) {
  res.status(200)
  const result = await client.req(`*[_type == 'post' && isActivated && slug.current == '${slug}'][0] {
    ...@,
    seo {
      ...@,
      ogImg {
        ...@,
        image { asset-> { url }}
      },
    },
    mainImg {
      ...@,
      image { asset-> { url }}
    },
    text[] {
      _type != 'img' => @,
      _type == 'img' => {
        ...@,
        image { asset-> { url }},
      },
    },
  }`).then(({
    slug,
    mainImg,
    seo,
    ...rest
  }) => ({
    ...rest,
    slug: slug?.current,
    mainImg: {
      alt: mainImg?.alt || '',
      src: (mainImg?.regType === 'image' ? mainImg?.image?.asset?.url : mainImg?.url) || '',
    },
    seo: {
      ...seo,
      ogImg: (seo?.ogImg?.regType === 'image' ? seo?.ogImg?.image?.asset?.url : seo?.ogImg?.url) || '',
    }
  })).catch(() => {
    res.status(404)
    return {}
  })
  
  res.json(result)
}