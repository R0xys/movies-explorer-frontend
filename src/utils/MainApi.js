class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json()
      .then((mes) => {
        if (mes.message) {
          return Promise.reject(mes.message);
        }
        else {
          console.log(res.status);
        }
      })
  }

  saveMovie(data) {
    return fetch(`${this._baseUrl}movies/`, {
      credentials: "include",
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then(this._checkResponse)
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}movies/${id}`, {
      credentials: "include",
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  getMovies() {
    return fetch(`${this._baseUrl}movies/`, {
      method: 'GET',
      credentials: "include",
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  signup(data) {
    return fetch(`${this._baseUrl}signup/`, {
      method: 'POST',
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then(this._checkResponse)
  }

  signin(data) {
    return fetch(`${this._baseUrl}signin/`, {
      method: 'POST',
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then(this._checkResponse)
  }

  signout() {
    return fetch(`${this._baseUrl}signout/`, {
      method: 'GET',
      credentials: "include",
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  checkToken() {
    return fetch(`${this._baseUrl}users/me/`, {
      method: 'GET',
      credentials: "include",
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  editProfile(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then(this._checkResponse)
  }
}

export const mainApi = new MainApi({
  baseUrl: 'https://api.r0-0ky.nomoreparties.co/',
  headers: {'Content-Type': 'application/json'},
});