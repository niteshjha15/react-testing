import { rest } from "msw";
export const handlers = [
  // Match a GET request to a third-party server.
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Alex",
        },
        {
          name: "Ross",
        },
        {
          name: "Joey",
        },
      ])
    );
  }),
];
