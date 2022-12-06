import { SuscribeImage, CloseButton as Close } from "../../assets";
import { INormalizedNews } from "./types";
import * as Styled from "./styled";

type Props = {
  modal: INormalizedNews | null;
  onClick: () => void;
  onClickSuscription: () => void;
};

export const CardModal = ({ modal, onClick, onClickSuscription }: Props) => {
  return modal !== null ? (
    <Styled.ModalContainer>
      <Styled.ModalCard>
        <Styled.CloseButton onClick={onClick}>
          <img src={Close} alt="close-button" />
        </Styled.CloseButton>
        <Styled.ModalImage
          src={modal.isPremium ? modal.image : SuscribeImage}
          alt={modal.isPremium ? "news-image" : "mr-burns-excelent"}
        />
        <Styled.TextContainer>
          <Styled.ModalTitle>
            {modal.isPremium ? modal.title : "Suscríbete a nuestro Newsletter"}
          </Styled.ModalTitle>
          <Styled.ModalDescription>
            {modal.isPremium
              ? modal.description
              : "Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos."}
          </Styled.ModalDescription>
          {!modal.isPremium ? (
            <Styled.SuscribeButton onClick={onClickSuscription}>
              Suscríbete
            </Styled.SuscribeButton>
          ) : null}
        </Styled.TextContainer>
      </Styled.ModalCard>
    </Styled.ModalContainer>
  ) : null;
};
