import '~/src/styles/reset.scss';
import '~/src/styles/colors.scss';
import '~/src/styles/typography.scss';
import '~/src/styles/global.scss';
import '~/src/styles/utils.scss';

import { json, LoaderFunctionArgs } from '@remix-run/node';
import {
    Links,
    Meta,
    type MetaFunction,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from '@remix-run/react';
import { RouteBreadcrumbs } from '~/src/components/breadcrumbs/use-breadcrumbs';
import { Cart } from '~/src/components/cart/cart';
import { Footer } from '~/src/components/footer/footer';
import { Header } from '~/src/components/header/header';
import { NavigationProgressBar } from '~/src/components/navigation-progress-bar/navigation-progress-bar';
import { Toaster } from '~/src/components/toaster/toaster';
import { CartOpenContextProvider } from '~/src/wix/cart';
import { EcomApiContextProvider, getWixClientId, setWixClientId } from '~/src/wix/ecom';
import { commitSession, initializeEcomSession } from '~/src/wix/ecom/session';

import styles from './root.module.scss';

export async function loader({ request }: LoaderFunctionArgs) {
    const { wixSessionTokens, session, shouldUpdateSessionCookie } =
        await initializeEcomSession(request);

    const data = {
        wixClientId: getWixClientId(),
        wixSessionTokens,
    };

    const headers: HeadersInit = shouldUpdateSessionCookie
        ? { 'Set-Cookie': await commitSession(session) }
        : {};

    return json(data, { headers });
}

const breadcrumbs: RouteBreadcrumbs = () => [{ title: 'Home', to: '/' }];

export const handle = {
    breadcrumbs,
};

export function Layout({ children }: React.PropsWithChildren) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    const { wixClientId, wixSessionTokens } = useLoaderData<typeof loader>();

    setWixClientId(wixClientId);

    return (
        <EcomApiContextProvider tokens={wixSessionTokens}>
            <CartOpenContextProvider>
                <div className={styles.root}>
                    <Header />
                    <main className={styles.main}>
                        <Outlet />
                    </main>
                    <div className={styles.clients}>
                        <header className={styles.clientsHeader}></header>
                        <div className={styles.clientsLogos}>
                            <img
                                src="https://static.wixstatic.com/shapes/27eba2_5c720747d7354dba80018d7d997449dc.svg"
                                alt=""
                                className={styles.clientsLogoImage}
                            />
                            <img
                                src="https://static.wixstatic.com/shapes/27eba2_2166ae7dd24f43b5b5d81b82723fb514.svg"
                                alt=""
                                className={styles.clientsLogoImage}
                            />
                            <img
                                src="https://static.wixstatic.com/shapes/27eba2_8578952f0104450ab6439b62e80a4e94.svg"
                                alt=""
                                className={styles.clientsLogoImage}
                            />
                            <img
                                src="https://static.wixstatic.com/shapes/27eba2_b38de69a8fef47a4a7b4352eb614e56c.svg"
                                alt=""
                                className={styles.clientsLogoImage}
                            />
                            <img
                                src="https://static.wixstatic.com/shapes/27eba2_6f586dc3ae5c401f94331b8f43d80207.svg"
                                alt=""
                                className={styles.clientsLogoImage}
                            />
                            <img
                                src="https://static.wixstatic.com/shapes/27eba2_933967ebc7324eb1937d9d86b71dc875.svg"
                                alt=""
                                className={styles.clientsLogoImage}
                            />
                        </div>
                    </div>
                    <Footer />
                </div>
                <Cart />
                <NavigationProgressBar className={styles.navigationProgressBar} />
                <Toaster />
            </CartOpenContextProvider>
        </EcomApiContextProvider>
    );
}

export const meta: MetaFunction = () => {
    const title = 'ReClaim: Home Goods Store';
    const description = 'Essential home products for sustainable living';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: '/social-media-image.jpg',
        },
    ];
};

export { ErrorBoundary } from '~/src/components/error-page/error-page';
