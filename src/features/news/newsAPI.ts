import { getNews } from "./fakeRest";

export const getInformation = async () => {
  try {
    const data = await getNews().then((res) =>
      res.map((news) => {
        const title = news.title
          .split(" ")
          .map((str: string) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
          })
          .join(" ");
        const now = new Date();
        const minutesElapsed = Math.floor(
          (now.getTime() - news.date.getTime()) / 60000
        );
        const normalizedData = {
          id: news.id,
          title,
          description: news.description,
          date: `Hace ${minutesElapsed} minutos`,
          isPremium: news.isPremium,
          image: news.image,
          shortDescription: news.description.substring(0, 100),
        };
        return normalizedData;
      })
    );
    return data;
  } catch {
    throw new Error("Cheking News Error");
  }
};
