export default {
    logo: <>
        <img src="/images/logo-dark.png" alt="logo" className="logo-light"/>
        <img src="/images/logo.png" alt="logo" className="logo-dark"/>
    </>,
    useNextSeoProps() {
        return {
            titleTemplate: '%s – ImageDek'
        }
    },
    project: {
        icon: (
            <>
                <img src="/images/wrap-bootstrap.png" alt="logo" width={50} />
            </>
        ),
        link: 'https://wrapbootstrap.com/user/kindigi',
    },
    chat: {
        icon: (
            <>
                <img src="/images/kindigi-light.png" alt="chat" width={50} className={"icon-dark"} />
                <img src="/images/kindigi-dark.png" alt="chat" width={50} className={"icon-light"} />
            </>
        ),
        link: 'https://kindigi.com',
    },
    docsRepositoryBase: 'https://github.com/bishwajitcadhikary/imagedek-docs/tree/main/',
    head: (
        <>
            <link type="image/x-icon" rel="shortcut icon" href="https://www.linkpicture.com/q/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="ImageDek - AI Image Generator Assistant (SAAS)" />
            <meta property="og:description" content="ImageDek is the ultimate AI image generator assistant for designers, marketers, and content creators. With its cutting-edge technology and intuitive interface, ImageDek helps you create stunning visuals that are sure to captivate your audience." />
            <meta property="og:image" content="https://imagedek-docs.vercel.app/images/preview.png" />
            <meta property="og:url" content="https://imagedek.kindigi.com/" />
            <meta property="og:type" content="website" />
            <meta property="fb:app_id" content="234635452287600" />
        </>
    ),
    footer: {
        text: <span>
            Copyright © {new Date().getFullYear()} <a href="https://kindigi.com" target="_blank">KinDigi</a>. All Rights Reserved.
        </span>,
    },
}