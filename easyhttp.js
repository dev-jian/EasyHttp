function EasyHttp() {
  this.http = new XMLHttpRequest();
}

// Make an Http GET Request
EasyHttp.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  // onload에 할당된 함수가 callback으로 이용되어 지기 때문에 실제 동작시 this는 XMLHttpRequest 객체로 바인딩 되는 것에 주의해야 한다.
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status)
    }
  };

  this.http.send();
};

// Make an Http POST Request
EasyHttp.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);

  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
};

// Make an Http PUT Request
EasyHttp.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);

  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
};

// Make an Http DELETE Request
EasyHttp.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, "Post Deleted");
    } else {
      callback("Error: " + self.http.status)
    }
  };

  this.http.send();
};