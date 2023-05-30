import AddCard from "../pages/AddCard";
import DetailPage from "../pages/DetailPage";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import WishList from "../pages/WishList";




export const ROUTES = [
    {
        path: "/",
        element: <MainRoot/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "add-card",
                element: <AddCard/>
            },
            {
                path:"/detail-page/:id",
                element: <DetailPage/>
            },
            {
                path: "/wishlist",
                element: <WishList/>
            }
        ]
    }
]