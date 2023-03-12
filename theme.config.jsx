export default {
    logo: <span>ImageAI - AI Image Generator Assistant (SAAS)</span>,
    useNextSeoProps() {
        return {
            titleTemplate: '%s – ImageAI'
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="ImageAI - AI Image Generator Assistant (SAAS)" />
            <meta property="og:description" content="ImageAI is the ultimate AI image generator assistant for designers, marketers, and content creators. With its cutting-edge technology and intuitive interface, ImageAI helps you create stunning visuals that are sure to captivate your audience." />
        </>
    ),
    footer: {
        text: <span>
            Copyright © {new Date().getFullYear()} <a href="https://codecanyon.net/user/abndevs" target="_blank">abnDevs</a>. All Rights Reserved.
        </span>,
    },

}