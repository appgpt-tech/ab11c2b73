
// in src/App.tsx
import { Admin, Resource, CustomRoutes } from "react-admin";
import { customDataProvider } from "./dataProvider";
import fakeDataProvider from "ra-data-fakerest";
import { Dashboard } from "./dashboard";
import { authProvider, apInitialize } from "./authProvider";
import { i18nProvider } from "./i18nProvider";
import LoginPage, { Login } from "./Login";
import data from "./data";
import { usersList, usersCreate, usersEdit} from "./resources/users";
import { vendorsList, vendorsCreate, vendorsEdit} from "./resources/vendors";
import { customersList, customersCreate, customersEdit} from "./resources/customers";
import { inventoryList, inventoryCreate, inventoryEdit} from "./resources/inventory";
import { productsList, productsCreate, productsEdit} from "./resources/products";
import { productCategoriesList, productCategoriesCreate, productCategoriesEdit} from "./resources/productCategories";
import { discountsList, discountsCreate, discountsEdit} from "./resources/discounts";
import { shoppingCartsList, shoppingCartsCreate, shoppingCartsEdit} from "./resources/shoppingCarts";
import { ordersList, ordersCreate, ordersEdit} from "./resources/orders";
import { orderDetailsList, orderDetailsCreate, orderDetailsEdit} from "./resources/orderDetails";
import { paymentsList, paymentsCreate, paymentsEdit} from "./resources/payments";
import { reviewsList, reviewsCreate, reviewsEdit} from "./resources/reviews";
import { supportTicketsList, supportTicketsCreate, supportTicketsEdit} from "./resources/supportTickets";
import usersIcon from "@mui/icons-material/Person";
import vendorsIcon from "@mui/icons-material/Store";
import customersIcon from "@mui/icons-material/People";
import inventoryIcon from "@mui/icons-material/Inventory";
import productsIcon from "@mui/icons-material/ShoppingCart";
import productCategoriesIcon from "@mui/icons-material/Category";
import discountsIcon from "@mui/icons-material/LocalOffer";
import shoppingCartsIcon from "@mui/icons-material/ShoppingCart";
import ordersIcon from "@mui/icons-material/Receipt";
import orderDetailsIcon from "@mui/icons-material/Receipt";
import paymentsIcon from "@mui/icons-material/Payment";
import reviewsIcon from "@mui/icons-material/RateReview";
import supportTicketsIcon from "@mui/icons-material/SupportAgent"; 
// SUPERTOKENS
import React from "react";
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import ThirdPartyPasswordless from "supertokens-auth-react/recipe/thirdpartypasswordless";
import Session from "supertokens-auth-react/recipe/session";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + "/auth",
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: "EMAIL",
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === "true") {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      "/proxy"
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/ab11c2b73">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != "DEV" ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
        
      >
    <Resource name="users" options={{label:"Users"}} 
list={usersList}
create={usersCreate}
edit={usersEdit}
recordRepresentation="id"
icon={usersIcon}/>
<Resource name="vendors" options={{label:"Vendors"}} 
list={vendorsList}
create={vendorsCreate}
edit={vendorsEdit}
recordRepresentation="id"
icon={vendorsIcon}/>
<Resource name="customers" options={{label:"Customers"}} 
list={customersList}
create={customersCreate}
edit={customersEdit}
recordRepresentation="id"
icon={customersIcon}/>
<Resource name="inventory" options={{label:"Inventory"}} 
list={inventoryList}
create={inventoryCreate}
edit={inventoryEdit}
recordRepresentation="id"
icon={inventoryIcon}/>
<Resource name="products" options={{label:"Products"}} 
list={productsList}
create={productsCreate}
edit={productsEdit}
recordRepresentation="id"
icon={productsIcon}/>
<Resource name="productCategories" options={{label:"Product Categories"}} 
list={productCategoriesList}
create={productCategoriesCreate}
edit={productCategoriesEdit}
recordRepresentation="id"
icon={productCategoriesIcon}/>
<Resource name="discounts" options={{label:"Discounts"}} 
list={discountsList}
create={discountsCreate}
edit={discountsEdit}
recordRepresentation="id"
icon={discountsIcon}/>
<Resource name="shoppingCarts" options={{label:"Shopping Carts"}} 
list={shoppingCartsList}
create={shoppingCartsCreate}
edit={shoppingCartsEdit}
recordRepresentation="id"
icon={shoppingCartsIcon}/>
<Resource name="orders" options={{label:"Orders"}} 
list={ordersList}
create={ordersCreate}
edit={ordersEdit}
recordRepresentation="id"
icon={ordersIcon}/>
<Resource name="orderDetails" options={{label:"Order Details"}} 
list={orderDetailsList}
create={orderDetailsCreate}
edit={orderDetailsEdit}
recordRepresentation="id"
icon={orderDetailsIcon}/>
<Resource name="payments" options={{label:"Payments"}} 
list={paymentsList}
create={paymentsCreate}
edit={paymentsEdit}
recordRepresentation="id"
icon={paymentsIcon}/>
<Resource name="reviews" options={{label:"Reviews"}} 
list={reviewsList}
create={reviewsCreate}
edit={reviewsEdit}
recordRepresentation="id"
icon={reviewsIcon}/>
<Resource name="supportTickets" options={{label:"Support Tickets"}} 
list={supportTicketsList}
create={supportTicketsCreate}
edit={supportTicketsEdit}
recordRepresentation="id"
icon={supportTicketsIcon}/>
    <CustomRoutes noLayout>
      {/*This renders the login UI on the /auth route*/}
      {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
      {/*Your app routes*/}
    </CustomRoutes>
  </Admin>
  </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
