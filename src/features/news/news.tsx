import { useEffect, useState } from "react";
import { INormalizedNews } from "./types";
import * as Styled from "./styled";
import { CardModal } from "./modal";
import { NewsCard } from "./card";
import { getInformation } from "./newsAPI";


const News = () => {
  const [news, setNews] = useState<INormalizedNews[]>([]);
  const [modal, setModal] = useState<INormalizedNews | null>(null);

  useEffect(() => {
    getInformation().then(res => setNews(res))
  }, []);
  const onClickCard= (n:INormalizedNews) =>{
    setModal(n)
  };
  const onClickCloseButton = () => {
    setModal(null)
  }
  const onClickModalSuscribe = () =>{
    setTimeout(() => {
      alert("Suscripto!");
      setModal(null);
    }, 1000)
  }
  return (
    <Styled.NewsContainer>
      <Styled.NewsTitle>Noticias de los Simpsons</Styled.NewsTitle>
      <Styled.NewsList>
      {news !== null && news.map((n) => <NewsCard key={n.id} object={n} onClick ={() => onClickCard(n)}/>)}
      <CardModal modal={modal} onClick={onClickCloseButton} onClickSuscription={onClickModalSuscribe}/>
      </Styled.NewsList>
    </Styled.NewsContainer>
  );
};

export default News;
