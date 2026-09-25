export type Role = "Admin" | "Employee";

export const organizations = ["University of Education", "Acme Software House"];

export const currentUser = {
  name: "Saira Aazmat",
  role: "Admin" as Role,
  organization: organizations[0],
};