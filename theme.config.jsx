export default {
    logo: <>
        <img src="https://www.linkpicture.com/q/logo_774.png" alt="logo" />
    </>,
    useNextSeoProps() {
        return {
            titleTemplate: '%s – ImageDek'
        }
    },
    project: {
        icon: (
            <>
                <img src="https://www.linkpicture.com/q/logo-small_6.png" alt="logo" />
            </>
        ),
        link: 'https://codecanyon.net/user/designing-world'
    },
    docsRepositoryBase: 'https://github.com/bishwajitcadhikary/imagedek-docs',
    head: (
        <>
            <link type="image/x-icon" rel="shortcut icon" href="https://www.linkpicture.com/q/favicon_81.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="ImageDek - Image Generator Assistant (SAAS)" />
            <meta property="og:description" content="ImageDek is the ultimate AI image generator assistant for designers, marketers, and content creators. With its cutting-edge technology and intuitive interface, ImageDek helps you create stunning visuals that are sure to captivate your audience." />
        </>
    ),
    footer: {
        text: <span>
            Copyright © {new Date().getFullYear()} <a href="https://codecanyon.net/user/designing-world" target="_blank">designing-world</a>. All Rights Reserved.
        </span>,
    },

}