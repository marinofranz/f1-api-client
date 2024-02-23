import axios from "axios";
import { baseUrl } from "../constants";

export const http = axios.create({ baseURL: baseUrl });
