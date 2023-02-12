import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  acessToken = '1234567890';

  constructor() { }

  estaAutenticado(): boolean {
    return !!sessionStorage.getItem('acess-token');

  }

  login(email: string, senha: string): boolean {
    if (email === 'admin@admin.com.br' && senha === 'password') {
      sessionStorage.setItem('acess-token',  this.acessToken)
      return true;
    }
    return false;

}

  logout() {
    sessionStorage.clear();
  }
}

