import { waitFor } from "@testing-library/react";

import { renderWithTheme } from "../../testUtils/renderWithTheme";

import { EmailTemplate } from "..";

const teste: any = [
  {
    title: "title",
    thumbnail: { path: "path", extension: "extension" },
    dates: [
      {
        date: "date",
      },
    ],
    creators: {
      items: [
        {
          name: "string",
          role: "string",
        },
      ],
    },

    description: "string",
  },
];

describe("EmailTemplate component", () => {
  test("should render a email template", async () => {
    renderWithTheme(<EmailTemplate selecteds={teste} />);

    await waitFor(() => {
      expect([
        {
          title: "title",
          thumbnail: { path: "path", extension: "extension" },
          dates: [
            {
              date: "date",
            },
          ],
          creators: {
            items: [
              {
                name: "string",
                role: "string",
              },
            ],
          },
          description: "string",
        },
      ]).toEqual(expect.arrayContaining(teste));
    });
  });
});
