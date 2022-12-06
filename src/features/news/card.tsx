import * as Styled from "./styled";
import { INormalizedNews } from "./types";
type Props = {
  object: INormalizedNews;
  onClick: () => void;
}
export const NewsCard = ({object, onClick}: Props) => {
    return(
        <Styled.NewsCard key={object.id}>
            <Styled.NewsCardImage src={object.image} />
            <Styled.NewsCardTitle>{object.title}</Styled.NewsCardTitle>
            <Styled.NewsCardDate>{object.date}</Styled.NewsCardDate>
            <Styled.NewsCardDescription>
              {object.shortDescription}
            </Styled.NewsCardDescription>
            <Styled.ReadButton onClick={onClick}>Ver más</Styled.ReadButton>
          </Styled.NewsCard>
    )
}