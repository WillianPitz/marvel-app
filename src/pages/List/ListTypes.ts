export type ComicsProps =
  | {
      id: number;
      digitalId: number;
      title: string;
      issueNumber: number;
      variantDescription: string;
      description: string;
      modified: string;
      isbn: string;
      upc: number;
      diamondCode: string;
      ean: string;
      issn: string;
      format: string;
      pageCount: number;
      textObjects: [];
      resourceURI: string;
      urls: [
        {
          type: string;
          url: string;
        }
      ];
      series: {
        resourceURI: string;
        name: string;
      };
      variants: [
        {
          resourceURI: string;
          name: string;
        }
      ];
      collections: [];
      collectedIssues: [];
      dates: [
        {
          type: string;
          date: string;
        }
      ];
      prices: [
        {
          type: string;
          price: number;
        }
      ];
      thumbnail: {
        path: string;
        extension: string;
      };
      images: [];
      creators: {
        available: number;
        collectionURI: string;
        items: {
          resourceURI: string;
          name: string;
          role: string;
        };
        returned: number;
      };
      characters: {
        available: number;
        collectionURI: string;
        items: [];
        returned: number;
      };
      stories: {
        available: number;
        collectionURI: string;
        items: [
          {
            resourceURI: string;
            name: string;
            type: string;
          }
        ];
        returned: number;
      };
      events: {
        available: number;
        collectionURI: string;
        items: [];
        returned: number;
      };
    }
  | any;

export type ComicDetailProps =
  | {
      characters: {
        available: number;
        collectionURI: string;
        items: [
          {
            name: string;
            resourceURI: string;
          }
        ];
        returned: number;
      };
      collectedIssues: [];
      collections: [];
      creators: {
        available: number;
        collectionURI: string;
        items: [
          {
            name: string;
            resourceURI: string;
            role: string;
          }
        ];
        returned: number;
      };
      dates: [
        {
          date: string;
          type: string;
        }
      ];
      description: string;
      diamondCode: string;
      digitalId: number;
      ean: string;
      events: {
        available: number;
        collectionURI: string;
        items: [{}];
        returned: number;
      };
      format: string;
      id: number;
      images: [
        {
          extension: string;
          path: string;
        }
      ];
      isbn: string;
      issn: string;
      issueNumber: number;
      modified: string;
      pageCount: number;
      prices: [
        {
          price: number;
          type: string;
        }
      ];
      resourceURI: string;
      series: {
        resourceURI: string;
        name: string;
      };
      stories: {
        available: number;
        collectionURI: string;
        items: [
          {
            name: string;
            resourceURI: string;
            type: string;
          }
        ];
        returned: number;
      };
      textObjects: [
        {
          language: string;
          text: string;
          type: string;
        }
      ];
      thumbnail: {
        path: string;
        extension: string;
      };
      title: string;
      upc: string;
      urls: [
        {
          type: string;
          url: string;
        }
      ];
      variantDescription: string;
      variants: [];
    }
  | undefined;

export type ComicsPropsStyled = {};

export type ListPropsStyled = {
  showModal?: boolean;
  showEmailModal?: boolean;
  inputState?: string;
};
