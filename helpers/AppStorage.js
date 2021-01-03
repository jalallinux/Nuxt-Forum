class AppStorage {
  storeToken(token) {
    localStorage.setItem('token', token);
  }

  storeUser(user) {
    localStorage.setItem('user', user);
  }

  store(user, token) {
    this.storeToken(token);
    this.storeUser(user);
  }

  clear() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser() {
    return localStorage.getItem('user');
  }

  storeApplication(key, value) {
    const app = this.getApplication();
    app[key] = value
    localStorage.setItem('application', JSON.stringify(app));
  }

  getApplication() {
    return JSON.parse(localStorage.getItem('application') ?? '{}');
  }
}

export default AppStorage = new AppStorage()
