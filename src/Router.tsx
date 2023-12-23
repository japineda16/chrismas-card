import Home from "./pages/Home";

export const router: {
  path: string;
  element: JSX.Element;
  name: string;
  params?: string[];
}[] = [
  {
    name: "Asignar ordenes",
    path: "/",
    element: <Home />,
    params: ["name"],
  },
];
