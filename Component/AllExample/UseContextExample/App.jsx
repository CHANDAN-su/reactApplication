// example 1
// import React from "react";
// import { ThemeProvider } from "./ThemeContext/ThemeContext";
// import ThemedComponent from "./ThemeContext/ThemedComponent";

// function MainApp() {

//     return (
//             <ThemeProvider>
//                 <ThemedComponent />
//             </ThemeProvider>
//     )
// }

// export default MainApp;


// Example 2

// import React from "react";
// import { AuthProivder } from "./AuthContext/AuthContext";
// import LoginControl from "./AuthContext/LoginControl";
// import Profile from "./AuthContext/Profile";

// function MainApp(){
//     return (
//         <AuthProivder>
//                 <div style={{textAlign: "center", padding: "40px"}}>
//                     <h2>Auth Context Demo</h2>
//                     <Profile/>
//                     <LoginControl/>
//                 </div>
//         </AuthProivder>
//     )
// }


// export default MainApp;


// Example 3
// import React from "react";
// import { CartProider } from "./CartContext/CartContext";
// import Cart from "./CartContext/Cart";
// import ProductList from "./CartContext/ProductList";

// function MainApp(){
//     return(
//         <CartProider>
//             <div style={{padding: "30px"}}>
//                 <h2>Your Stor</h2>
//                 <Cart/>
//                 <ProductList/>
//             </div>
//         </CartProider>
//     )
// }

// export default MainApp;


// Example 4
import React from "react";
import { UIProvider } from "./SidebarUIState/UIContext";
import ToggleButton from "./SidebarUIState/ToggleButton";
import Sidebar from "./SidebarUIState/Sidebar";


function MainApp(){
    return (
        <UIProvider>
            <div style={{display: "flex"}}>
                <Sidebar/>

                <div style={{marginLeft: "30px", padding: "20px"}}>
                    <ToggleButton/>
                    <h1>Main Content Area</h1>
                    <p>lick the button to toggle the sidebar</p>
                </div>

            </div>
        </UIProvider>
    )
}


export default MainApp;