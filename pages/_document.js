import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useAmp } from 'next/amp'

import { GA_TRACKING_ID } from '../lib/gtag'
import AmpAnalytics from '../components/amp/AmpAnalytics'

export function AmpWrap({ ampOnly, nonAmp }) {
  const isAmp = useAmp()
  if (ampOnly) return isAmp && ampOnly
  return !isAmp && nonAmp
}

export default class extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    // let { title, cats } = attributes;
    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

          <AmpWrap
            nonAmp={
              <>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
                <meta name='application-name' content='Andrii Vakhula' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content='Andrii Vakhula' />
                <meta name='description' content='A' />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-config' content='/icons/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#2B5797' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content='#000000' />
                <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
                <link rel='manifest' href='/manifest.json' />
                <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
                <link rel='shortcut icon' href='/favicon.ico' />
                <link rel="manifest" href="/icons/site.webmanifest" />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:url' content='https://boron.vakhula.dev' />
                <meta name='twitter:title' content='Andrii Vakhula' />
                <meta name='twitter:description' content='Andrii Vakhula Personal Site' />
                <meta name='twitter:image' content='https://boron.vakhula.dev/icons/android-chrome-192x192.png' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content='Andrii Vakhula' />
                <meta property='og:description' content='Andrii Vakhula Personal Site' />
                <meta property='og:site_name' content='Andrii Vakhula' />
                <meta property='og:url' content='https://boron.vakhula.dev' />
                <meta property='og:image' content='https://boron.vakhula.dev/icons/apple-touch-icon.png' />
                <style>{
                  `
                  span.hidden{display:block;width:0;height:0;opacity:0;}
                  body{font-family:Corbel,Lucida Grande,Lucida Sans Unicode,Lucida Sans,DejaVu Sans,Bitstream Vera Sans,Liberation Sans,Verdana,Verdana Ref,sans-serif;margin:0;position:fixed;width:100%;height:100%}body,html{overflow:hidden}body,html{background-color:#000}canvas{width:100%;height:100%}.logo{position:absolute;top:0;left:0}.logo svg{height:4rem;margin:1rem}@media only screen and (max-width:600px){.logo svg{height:2rem}}@media only screen and (max-width:600px){body{font-size:12px}}@media only screen and (min-width:600px){body{font-size:14px}}
                  `
                }</style>
              </>
            }
          />

        </Head>
        <body>
          <AmpWrap
            nonAmp={
              <>
                <canvas></canvas>
              </>
            }
          />

          <Main />
          <NextScript />

          {/* AMP - Google Analytics */}
          {/* <AmpWrap
            ampOnly={
              <AmpAnalytics
                type="googleanalytics"
                script={{
                  vars: {
                    account: GA_TRACKING_ID,
                    gtag_id: GA_TRACKING_ID,
                    config: {
                      [GA_TRACKING_ID]: { groups: 'default' },
                    },
                  },
                  triggers: {
                    trackPageview: {
                      on: 'visible',
                      request: 'pageview',
                    },
                  },
                }}
              />
            }
          /> */}

          {/* Non-AMP - Google Analytics */}
          <AmpWrap
            nonAmp={
              <>
                <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_TRACKING_ID}');
                    `,
                  }}
                />
              </>
            }
          />

          <AmpWrap
            nonAmp={
              <>
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      function appendScript(url){
                        let script = document.createElement("script");
                        script.src = url;
                        script.async = false //IMPORTANT
                        document.head.appendChild(script);
                      }
                      setTimeout(()=>{appendScript("script.js")}, 3000)
                    `,
                  }}
                />
              </>
            }
          />
        </body>
      </Html>
    )
  }
}
