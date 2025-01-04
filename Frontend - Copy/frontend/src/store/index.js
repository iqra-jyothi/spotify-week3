import {configureStore} from "@reduxjs/toolkit";
import FetchStatus from "./FetchStatus";
import ItemsSlice from "./ItemSlice";
import categoryReducer from "./categorySlice";
import footerReducer from "./Footerslice";
import WishlistSlice from "./WishslistSlice";
// import Createcategory from "./Createcategory";
const spotifystore=configureStore({
    reducer:{
        fetchstates:FetchStatus,
        items:ItemsSlice,
        category: categoryReducer,
        footer: footerReducer,
        // category: Createcategory,
        wish:WishlistSlice.reducer,
    }
})
export default spotifystore

