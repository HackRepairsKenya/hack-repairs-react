export interface routes{
    path:string
    breadcrumb:string
}
export const routes:routes[] = [
    {
        path:"/",
        breadcrumb:"Home"
    },
    {
        path:"/about",
        breadcrumb:"AboutUs"
    },
    {
        path:"/sell-with-us",
        breadcrumb:"SellWthUs"
    },
    {
        path:"/contact",
        breadcrumb:"ContactUs"
    }
]