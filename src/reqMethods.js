import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk4YzZhZmU5MzQ3OTg1NGQ0MTkxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjg0ODkzNCwiZXhwIjoxNjQzMTA4MTM0fQ.duTGTza16s32rQa1F92X9A4R39U1_5n2wxU2PkS7Dis";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
