import {baseUrl} from '../config';

class ApiService {
  baseUrl = baseUrl;
  
  getFullUrl(url) {
    return this.baseUrl+url;
  }
  
}