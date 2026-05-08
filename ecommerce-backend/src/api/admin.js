import API from "./api";

/* ================= GET ALL USERS ================= */
export const getAllUsers = async (token) => {
  const { data } = await API.get("/admin/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};