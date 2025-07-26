import Script from "next/script";


export function GoogleAnalyticsScript() {
    return process.env.NEXT_PUBLIC_APP_NAME === "Sky"
        ? <>

        </>
        : <>

        </>

}
