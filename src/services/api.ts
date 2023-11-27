
import axios from 'axios';


interface User {
    id: string;
    name: string;
    email: string;
    country_name: string;
    device_id: string;
    bitcoin_address: string;
    avatar: string;
    login_ip: string;
    active_device_mac: string;
    notes: string;
    age: number;
    referral_id: number;
    locale: string;
    favorite_music: string;
    phone_number: string;
    twitter_username: string;
    job: string;
    invoice_email_address: string;
    hmac_secret: string;
    favorite_quote: string;
    primary_color: string;
    secondary_color: string;
    material: string;
    shipping_address: string;
    zip_code: string;
    latitude: string;
    longitude: string;
    favorite_animal: string;
    app_version: string;
    timezone: string;
  }
  interface ApiResponse {
    data: User[];
    
  }  
  export const getDataUsers = async (): Promise<User[]> => {
    try {
      const response = await axios.get<ApiResponse>('https://delman-fe-api.fly.dev/users');
      return response.data.data; // Extracting the 'data' field from the API response
    } catch (error) {
      throw new Error('Error fetching data');
    }
  };
