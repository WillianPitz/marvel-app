import React from "react";
import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "../../testUtils/renderWithTheme";
import { ListService } from "../../services";
import List from "./List";

describe("ProfessionalList page", () => {
  const data = {
    data: {
      results: [
        {
          id: 1308,
          title: "Marvel Age Spider-Man Vol. 2: Everyday Hero (Digest)",
          description:
            '"The Marvel Age of Comics continues! This time around, Spidey meets his match against such classic villains as Electro and the Lizard, and faces the return of one of his first foes: the Vulture! Plus: Spider-Man vs. the Living Brain, Peter Parker\'s fight with Flash Thompson, and the wall-crawler tackles the high-flying Human Torch!"',

          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bc665483c3aa",
            extension: "jpg",
          },
        },
      ],
    },
  };

  function getListValues() {
    const image = screen.getByAltText("comics");

    screen.getByText(data.data.results[0].title);
    screen.getByText(data.data.results[0].description);
    expect(image).toHaveAttribute(
      "src",
      `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`
    );
  }

  test("should do get list data correctly.", async () => {
    jest
      .spyOn(ListService, "getComics")
      .mockImplementation((): any => new Promise((r) => r({ data })));

    renderWithTheme(<List />);

    await waitFor(() => {
      getListValues();
    });
  });
});
