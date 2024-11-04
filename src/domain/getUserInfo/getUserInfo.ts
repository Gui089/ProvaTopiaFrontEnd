import { apiClient } from "../../api/api";

export const getUserInfo = async (token: string) => {
    try {
      const response = await apiClient(token).get("/getUsers");
      return response.data;
    } catch (error) {
      console.error("Erro ao obter informações do usuário:", error);
      throw error;
    }
  }
  