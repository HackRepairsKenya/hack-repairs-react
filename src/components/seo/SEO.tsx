
import { Helmet } from 'react-helmet-async';
interface SEOprops {
    title:string
    description:string
    name:string
    type:string
    image:string
    metaKeywords:string
    url:string

    
}
export default function SEO({title, description,url, name, type,image,metaKeywords}:SEOprops) {
return (
<Helmet>
{ /* Standard metadata tags */ }
<title>{title}</title>
<meta name='description' content={description} />
<meta name="keywords" content={metaKeywords} />
<meta name="author" content='hack Repairs' />
<link rel='canonical' href={url} />
{ /* End standard metadata tags */ }
{ /* Facebook tags */ }
<meta property="og:type" content={type} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image}/>
{ /* End Facebook tags */ }
{ /* Twitter tags */ }
<meta name="twitter:creator" content={name} />
<meta name="twitter:card" content={type} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
{ /* End Twitter tags */ }
</Helmet>
)
}