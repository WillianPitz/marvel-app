import React, { useEffect, useState } from "react";
import { ListService } from "../../services";
import { ComicDetailProps, ComicsProps } from "./ListTypes";
import { MdPageview } from "react-icons/md";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import MarvelLogo from "../../assets/MarvelLogo.png";

import * as S from "./styles";
import DetailModal from "../../components/DetailModal/DetailModal";
import EmailModal from "../../components/EmailModal/EmailModal";
import Loader from "../../components/Loader/Loader";
import { showToast } from "../../components/Toast/Toast";

const List: React.FC = () => {
  const [comics, setComics] = useState<ComicsProps[]>([]);
  const [comicDetail, setComicDetail] = useState<ComicDetailProps>();
  const [searchComics, setSearchComics] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [scrollX, setScrollX] = useState(0);

  const [loading, setLoading] = useState(true);

  const [selecteds, setSelecteds] = useState<ComicsProps[]>([]);

  useEffect(() => {
    ListService.getComics()
      .then((res) => {
        setComics(res.data.data.results);
      })
      .finally(() => setLoading(false))
      .catch(() =>
        showToast({ type: "error", message: "Failed to load comics!" })
      );
  }, []);

  const handleOpenDetails = (comic: any) => {
    setComicDetail(comic);
    setShowModal(!showModal);
  };

  const handleOpenEmailModal = () => {
    setShowEmailModal(!showEmailModal);
  };

  const handleLeftArrow = () => {
    let windowX = scrollX + Math.round(window.innerWidth / 2);
    if (windowX > 0) {
      windowX = 0;
    }
    setScrollX(windowX);
  };

  const handleRightArrow = () => {
    let windowX = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = comics.length * 200;
    if (window.innerWidth - listWidth > windowX) {
      windowX = window.innerWidth - listWidth;
    }
    setScrollX(windowX);
  };

  const handleSetSelected = (e: any, comics: ComicsProps) => {
    if (
      !selecteds.find((selecteds) => selecteds.id === comics.id) &&
      e.target.nodeName !== "path" &&
      "svg"
    ) {
      setSelecteds((selecteds: any) => [...selecteds, comics]);
    } else {
      setSelecteds(selecteds.filter((selected) => selected.id !== comics.id));
    }
  };

  const toggleActiveStyles = (index: number) => {
    return selecteds.find((selecteds) => selecteds.id === index) && "selected";
  };

  return (
    <S.Container>
      <S.Header>
        <S.Logo src={MarvelLogo} alt="marvel logo" />
        <S.Input
          type="text"
          placeholder="Search comics"
          onChange={(e) => {
            setSearchComics(e.target.value);
          }}
        />
      </S.Header>
      {loading ? (
        <Loader />
      ) : (
        <S.CharacterRow
          showModal={showModal}
          showEmailModal={showEmailModal}
          style={{ marginLeft: scrollX, width: comics.length * 200 }}
          inputState={searchComics}
        >
          <S.ArrowIcon className="arrow-left" onClick={handleLeftArrow}>
            <MdNavigateBefore />
          </S.ArrowIcon>

          <S.ArrowIcon className="arrow-right" onClick={handleRightArrow}>
            <MdNavigateNext />
          </S.ArrowIcon>
          {comics
            .filter((comic) => {
              if (
                comic.title.toLowerCase().includes(searchComics.toLowerCase())
              ) {
                return comic;
              }
              return null;
            })
            .map((comic) => {
              return (
                <S.Comics
                  key={comic.id}
                  className={toggleActiveStyles(comic.id)}
                  onClick={(e) => {
                    handleSetSelected(e, comic);
                  }}
                >
                  <S.ComicsImage>
                    <img
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt="comics"
                    />
                  </S.ComicsImage>

                  <S.ComicsDescription>
                    <strong>{comic.title}</strong>
                    <p>{comic.description ? comic.description : "..."}</p>
                    <S.ComicsDetails>
                      <MdPageview
                        size={32}
                        onClick={() => {
                          handleOpenDetails(comic);
                        }}
                      />
                    </S.ComicsDetails>
                  </S.ComicsDescription>
                </S.Comics>
              );
            })}
        </S.CharacterRow>
      )}
      {showModal && (
        <DetailModal closeModal={setShowModal} comicDetail={comicDetail} />
      )}

      {showEmailModal && (
        <EmailModal closeModal={setShowEmailModal} selecteds={selecteds} />
      )}
      <S.FooterButton>
        <S.Button
          onClick={() => {
            handleOpenEmailModal();
          }}
        >
          Send by email
        </S.Button>
      </S.FooterButton>
    </S.Container>
  );
};

export default List;
