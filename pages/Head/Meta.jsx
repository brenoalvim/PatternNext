import Head from 'next/head'

export default function Meta() {
    return (
        <>
            <Head>
                <meta charset='UTF-8' />
                <meta http-equiv='content-language' content='pt-br' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta name='keywords' content='...' />

                <meta name='authors' content='Breno Alvim' />

                <meta name='creator' content='Breno Alvim' />

                <meta name='description' content='Next React Pattern' />

                <meta property='og:type' content='website' />
            </Head>
        </>
    )
}