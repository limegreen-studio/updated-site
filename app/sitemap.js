export default function sitemap() {
  return [
    {
      url: 'https://limegreen.studio',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://limegreen.studio/wip',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]
}
