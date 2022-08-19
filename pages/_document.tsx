import Document, { Html, Main, Head, NextScript } from 'next/document';
import { Children } from 'react';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: [...Children.toArray(initialProps.styles)],
        }
    }

    render() {
        return (
            <Html>
                <Head> 
                    <link rel="shortcut icon" href='/images/favicon.png' type="image/png" />
                    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
                </Head>
                <body className="bg-gradient-to-b from-slate-900 to-[#02577a]">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;