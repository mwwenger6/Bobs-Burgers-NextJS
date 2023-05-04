import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>


                <link rel="stylesheet"
                      href="https://cdn.jsdelivr.net/npm/@materializecss/materialize@2.0.0-alpha/dist/css/materialize.min.css"/>
                <script
                    src="https://cdn.jsdelivr.net/npm/@materializecss/materialize@2.0.0-alpha/dist/js/materialize.min.js"></script>
            </Head>
            <body>
            <title>Bob's Burgers Characters</title>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
