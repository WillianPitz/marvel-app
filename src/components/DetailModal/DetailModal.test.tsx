import { waitFor } from "@testing-library/react";

import { renderWithTheme } from "../../testUtils/renderWithTheme";

import { DetailModal } from "..";

const comicDetail: any = {
  creators: {
    items: [
      {
        name: "string",
        role: "string",
      },
    ],
  },
  thumbnail: {
    path: "string",
    extension: "string",
  },
  dates: [
    {
      date: "string",
    },
  ],
  description: "string",
  title: "string",
};

describe("DetailModal component", () => {
  test("should render a detailModal", async () => {
    renderWithTheme(
      <DetailModal closeModal={() => {}} comicDetail={comicDetail} />
    );

    await waitFor(() => {
      expect({
        title: "string",
        thumbnail: { path: "string", extension: "string" },
        dates: [
          {
            date: "string",
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
      }).toEqual(expect.objectContaining(comicDetail));
    });
  });
});
