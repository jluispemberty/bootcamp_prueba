import { SPFetchClient } from "@pnp/nodejs";
import { sp } from "@pnp/sp/presets/all";

export const configSP = () => {
    sp.setup({
        sp: {
            fetchClientFactory: () => {
                return new SPFetchClient(
                    'https://devfvg.sharepoint.com/sites/joseluis2',
                    '513d7881-d2db-4125-b799-51fd4d9ba254',
                    '/msynP4NAg4YdbmY8D99g1FQ/XgBekCOVUP9Iz/SQ/Q='
                )
            },
        },
    });
}