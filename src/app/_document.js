const newrelic = require("newrelic");
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    const browserTimingHeader = newrelic.getBrowserTimingHeader({
        hasToRemoveScriptWrapper: true,
    })
    //configura todo para conectarse a new relic cuando cargue mi app de next

    return(
        <Html lang="en">
            <Head>
                <script type='text/javascript' dangerouslySetInnerHTML={{__html: browserTimingHeader}} />
            </Head>
            <body id='test'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}