import React from "react";
import { ModalProps } from "./DetailModalTypes";
import { AiOutlineCloseCircle } from "react-icons/ai";

import * as S from "./styles";

const DetailModal = ({
  id = "detailModal",
  closeModal,
  comicDetail,
}: ModalProps) => {
  const writer = comicDetail?.creators.items.find(
    (item: any) => item.role === "writer"
  );

  const penciller = comicDetail?.creators.items.find(
    (item: any) => item.role === "penciller"
  );

  const pencillerCover = comicDetail?.creators.items.find(
    (item: any) => item.role === "penciller (cover)"
  );

  const handleOutsideClick = (e: any) => {
    if (e.target.id === id) {
      closeModal(false);
    }
  };
  return (
    <S.Background id={id} onClick={handleOutsideClick}>
      <S.Container>
        <S.CloseButton>
          <AiOutlineCloseCircle
            onClick={() => {
              closeModal(false);
            }}
            size={35}
          />
        </S.CloseButton>

        <S.Title>
          <h1>{comicDetail?.title}</h1>
        </S.Title>
        <S.Divider />

        <S.ModalContent>
          <S.ImageDiv>
            <S.Image
              src={`${comicDetail?.thumbnail.path}.${comicDetail?.thumbnail.extension}`}
              alt=""
            />
          </S.ImageDiv>

          <S.InfoDiv>
            <S.TextInfoWrapper>
              <S.TitleInfo>Published:</S.TitleInfo>
              <S.TextInfo>
                {comicDetail?.dates[0].date.split("T")[0]}
              </S.TextInfo>
            </S.TextInfoWrapper>

            <S.FirstRow>
              <S.TextInfoWrapper>
                <S.TitleInfo>Writer:</S.TitleInfo>
                <S.TextInfo>
                  {writer ? writer.name : "No information available"}
                </S.TextInfo>
              </S.TextInfoWrapper>

              <S.TextInfoWrapper>
                <S.TitleInfo>Penciler:</S.TitleInfo>
                <S.TextInfo>
                  {penciller ? penciller.name : "No information available"}
                </S.TextInfo>
              </S.TextInfoWrapper>
            </S.FirstRow>

            <S.SecondRow>
              <S.TextInfoWrapper>
                <S.TitleInfo>Cover Artist:</S.TitleInfo>
                <S.TextInfo>
                  {pencillerCover
                    ? pencillerCover.name
                    : "No information available"}
                </S.TextInfo>
              </S.TextInfoWrapper>
            </S.SecondRow>

            <S.Description>
              <p>
                {comicDetail?.description ? comicDetail.description : "..."}
              </p>
            </S.Description>
          </S.InfoDiv>
        </S.ModalContent>
      </S.Container>
    </S.Background>
  );
};

export default DetailModal;
