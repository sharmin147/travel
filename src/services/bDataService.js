import http from "../http-common";

class bDataService {
  getAll(uid) {
    return http.get(`/booking/${uid}`);
  }

  get(id) {
    return http.get(`/booking_single/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new bDataService();