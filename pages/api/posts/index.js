import client from '@services/cmsClient'

export default async function handler(req, res) {
  res.status(200)
  const result = await client.req(`*[_type == 'post' && isActivated] {
    title,
    slug,
    releasedAt,
    _id,
  }`).then(data => data.map((data) => data)).catch(() => {
    res.status(404)
    return []
  })

  res.json(result)
}