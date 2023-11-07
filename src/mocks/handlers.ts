import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json(
      [
        {
          name: "Harry Kane",
        },
        {
          name: "Ishaya Bello",
        },
        {
          name: "Ade Pelz",
        },
      ],
      { status: 200 },
    );
  }),
];
