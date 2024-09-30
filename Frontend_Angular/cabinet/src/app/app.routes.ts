import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { SigninSignupComponent } from './customer/signin-signup/signin-signup.component';
import { SellerDashboardComponent } from './customer/seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './customer/buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './customer/buyer/checkout/checkout.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, // Load HomeComponent when at root
  { path: 'my-profile', component: UserProfileComponent },
  { path: 'contact-us', component: ContactUsComponent },

  // Admin Routes
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin/user', component: UserCrudComponent },
  { path: 'admin/product', component: ProductComponent },

  // Customer Routes
  { path: 'sign-in', component: SigninSignupComponent },
  { path: 'sign-up', component: SigninSignupComponent },

  // Seller Routes
  { path: 'seller-dashboard', component: SellerDashboardComponent },
  { path: 'seller/product', component: ProductComponent },

  // Buyer Routes
  { path: 'buyer-dashboard', component: BuyerDashboardComponent },
  { path: 'checkout', component: CheckoutComponent },

  // Wildcard Route for 404 - Page Not Found
  { path: '**', component: PageNotFoundComponent }
];
