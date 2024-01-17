import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337", // Ganti dengan URL endpoint API Anda
});

export const apisKost = {
  getAllKost: () => api.get("/api/kosts"),
  getKostByKd: (kdKost) => 
    api.get(`/api/kosts/${kdKost}`),
  createKost: (kostBaru) => 
    api.post("/api/kosts", { data: kostBaru }),
  updateKost: (id, dtBaru) =>
    api.put(`/api/kosts/${id}`, { data: dtBaru }),
  deleteKost: (id) => api.delete(`/api/kosts/${id}`),
};
