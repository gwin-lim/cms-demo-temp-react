import { PortableText } from '@portabletext/react'

export default function({ value }) {

  return <PortableText
    value={value}
    components={{
      types: {
        img: ({ value: {
          alt,
          regType,
          url,
          image: { asset: { url: image }},
        }}) => <img src={regType === 'image' ? image : url} alt={alt} />,
        linkBtn: ({ value: { href, target, rel, caption }}) => <div className="link">
          <a href={href} target={target} rel={rel?.join(' ')}>{caption}</a>
        </div>
      },
      marks: {
        link: ({ children, value }) => {
          const href = value.href || ''
          const [rel, target] = !href.startsWith('http') && !href.startsWith('//') ? [undefined, undefined] : ['noreferrer noopener', '_blank']
          return <a href={href} rel={rel} target={target}>{children}</a>
        },
      },
    }}
  />
}
