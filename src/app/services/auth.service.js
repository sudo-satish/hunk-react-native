import Service from './service';

export class AuthService  extends Service{
  async login(credentials) {
    console.log('credentials', credentials);
  }
  
  async signup(credentials) {
    console.log('credentials', credentials);
  }

  forgotPassword(mobileNumber) {
    console.log('mobileNumber', mobileNumber);
  }

  async logout() {

  }
}
