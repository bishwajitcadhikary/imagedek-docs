export default {
    logo: <>
        <img src="https://www.linkpicture.com/q/logo-docs.png" alt="logo" width={200}/>
    </>,
    useNextSeoProps() {
        return {
            titleTemplate: '%s – ImageDek'
        }
    },
    project: {
        icon: (
            <>
                <img src="https://www.linkpicture.com/q/codecanyon-logo.png" alt="logo" width={50} />
            </>
        ),
        link: 'https://codecanyon.net/item/imagedek-ai-image-generator-assistant-saas/44438866'
    },
    docsRepositoryBase: 'https://github.com/bishwajitcadhikary/imagedek-docs/tree/main/',
    head: (
        <>
            <link type="image/x-icon" rel="shortcut icon" href="https://www.linkpicture.com/q/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="ImageDek - AI Image Generator Assistant (SAAS)" />
            <meta property="og:description" content="ImageDek is the ultimate AI image generator assistant for designers, marketers, and content creators. With its cutting-edge technology and intuitive interface, ImageDek helps you create stunning visuals that are sure to captivate your audience." />
            <meta property="og:image" content="https://www.linkpicture.com/q/imagedek.png" />
            <meta property="og:url" content="https://docs.imagedek.com/" />
            <meta property="og:type" content="website" />
            <meta property="fb:app_id" content="234635452287600" />

            <meta name="twitter:card" content="ImageDek is the ultimate AI image generator assistant for designers, marketers, and content creators. With its cutting-edge technology and intuitive interface, ImageDek helps you create stunning visuals that are sure to captivate your audience." />
            <meta name="twitter:site" content="@nazrul0132" />
            <meta name="twitter:creator" content="@nazrul0132" />
            <meta name="twitter:title" content="ImageDek - AI Image Generator Assistant (SAAS)" />
            <meta name="twitter:description" content="ImageDek is the ultimate AI image generator assistant for designers, marketers, and content creators. With its cutting-edge technology and intuitive interface, ImageDek helps you create stunning visuals that are sure to captivate your audience." />
            <meta name="twitter:image" content="https://www.linkpicture.com/q/imagedek.png" />
        </>
    ),
    footer: {
        text: <span>
            Copyright © {new Date().getFullYear()} <a href="https://codecanyon.net/user/designing-world" target="_blank">designing-world</a>. All Rights Reserved.
        </span>,
    },

}