import {HomeScreen} from "../screens/home.screen";
import {LoginScreen} from "../screens/login.screen";
import {DetailsScreen} from "../screens/details.screen";
import {ForgotPassword} from "../screens/forgotPassword.screen";
import {SignupScreen} from "../screens/signup.screen";
import {DrawerNavigator} from "../screens/drawerNavigator.screen";
import {OwnerDashboardScreen} from "../screens/ownerDashboard.screen";
import {LogoutScreen} from "../screens/logout.screen";
import {FeedbackScreen} from "../screens/feedback.screen";
import {UpdateMemberScreen} from "../screens/updateMember.screen";
import {AddMemberScreen} from "../screens/addMember.screen";

export const WithoutLoginRoutes = {
  // Home: {name: 'Home', component: HomeScreen, options: {}},
  Home: {name: 'Home', component: LoginScreen, options: {}},
  Details: {name: 'Details', component: DetailsScreen, options: {}},
  ForgotPassword: {name: 'ForgotPassword', component: ForgotPassword, options: {}},
  Signup: {name: 'Signup', component: SignupScreen, options: {}},
  DrawerNavigator: {name: 'DrawerNavigator', component: DrawerNavigator, options: {}},
}

export const OwnersRoutes = {
  OwnerDashboard: {name: 'OwnerDashboard', isDrawerMenu:true, drawerTitle:"Dashboard", component: OwnerDashboardScreen, options: {}},
  Feedback: {name: 'Feedback', isDrawerMenu:true, drawerTitle: "Feedback", component: FeedbackScreen, options: {}},
  EditMember: {name: 'EditMember', isDrawerMenu: false, component: UpdateMemberScreen, options: {}},
  AddMember: {name: 'AddMember', isDrawerMenu: false, component: AddMemberScreen, options: {}},
  Logout: {name: 'Logout', isDrawerMenu:true, drawerTitle: "Logout", component: LogoutScreen, options: {}},
}
