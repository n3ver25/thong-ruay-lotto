import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export const Seo = ({ description, title }) => {
  const queryData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const metaTitle = title
    ? `${title} | ${queryData.site?.siteMetadata?.title}`
    : queryData.site?.siteMetadata?.title
  const metaDescription =
    description || queryData.site?.siteMetadata?.description

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta
        name="google-site-verification"
        content="xZnFb1_lScm3JRh8HFEcCJw_V0JeFxDiHzrjQVXgkhQ"
      />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-S55WV6CWXZ"
      />
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-S55WV6CWXZ');
        `}
      </script>
      <script>
        {`(function (w, d, s, l, i) {
          w[l] = w[l] || []
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : ''
          j.async = true
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
          f.parentNode.insertBefore(j, f)
        })(window, document, 'script', 'dataLayer', 'GTM-MMJCLFX')`}
      </script>
      <body class="dark" data-react-helmet="class">
        {`
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MMJCLFX"
              height="0"
              width="0"
              style={{display:"none",visibility:"hidden"}}
            ></iframe>
          </noscript>
          `}
      </body>
    </Helmet>
  )
}
