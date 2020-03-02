import {HomeScreen} from "../screens/home.screen";
import {LoginScreen} from "../screens/login.screen";
import {DetailsScreen} from "../screens/details.screen";
import {ForgotPassword} from "../screens/forgotPassword.screen";
import {SignupScreen} from "../screens/signup.screen";
import {DrawerNavigator} from "../screens/drawerNavigator.screen";
import {OwnerDashboardScreen} from "../screens/ownerDashboard.screen";
import {LogoutScreen} from "../screens/logout.screen";
import {FeedbackScreen} from "../screens/feedback.screen";

export const WithoutLoginRoutes = {
  // Home: {name: 'Home', component: HomeScreen, options: {}},
  Home: {name: 'Home', component: LoginScreen, options: {}},
  Details: {name: 'Details', component: DetailsScreen, options: {}},
  ForgotPassword: {name: 'ForgotPassword', component: ForgotPassword, options: {}},
  Signup: {name: 'Signup', component: SignupScreen, options: {}},
  DrawerNavigator: {name: 'DrawerNavigator', component: DrawerNavigator, options: {}},
}

export const OwnersRoutes = {
  OwnerDashboard: {name: 'OwnerDashboard', drawerTitle:"Dashboard", component: OwnerDashboardScreen, options: {}},
  Feedback: {name: 'Feedback', drawerTitle: "Feedback", component: FeedbackScreen, options: {}},
  Logout: {name: 'Logout', drawerTitle: "Logout", component: LogoutScreen, options: {}},
}
