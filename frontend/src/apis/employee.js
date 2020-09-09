import apiClient from "./client";

const addEmployee = (data) => {
  const req = {
    url: "/users",
    method: "POST",
    data,
  };
  return apiClient(req)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const listEmployees = (data) => {
  const req = {
    url: "/users",
    method: "GET",
  };
  return apiClient(req)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const deleteEmployee = (data) => {
  const req = {
    url: "/users",
    method: "DELETE",
    data,
  };
  return apiClient(req)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const updateEmployee = (data) => {
  const req = {
    url: "/users",
    method: "PUT",
    data,
  };
  return apiClient(req)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export { addEmployee, listEmployees, deleteEmployee, updateEmployee };
