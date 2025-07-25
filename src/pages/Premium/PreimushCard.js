import styled from 'styled-components';
import NoReklama from "./../../image/img/NoReklama.png";
import HD from "./../../image/img/HD.png";
import DiogramsOffline from "./../../image/img/DiogramsOffline.png";
import Exluziv from "./../../image/img/Exluziv.png";
import NoOgranich from "./../../image/img/NoOgranich.png";

export const PreimushCard = () => {
  const advantages = [
    {
      title: "Отсутствие рекламы",
      description: "Наслаждайтесь музыкой без перерывов на рекламу. С Neofy Premium вы можете слушать любимые треки и плейлисты без каких-либо помех.",
      image: NoReklama
    },
    {
      title: "Высокое качество звука",
      description: "Получите доступ к музыке в HD-качестве. Neofy Premium обеспечивает кристально чистый звук, который раскрывает все нюансы ваших любимых композиций.",
      image: HD
    },
    {
      title: "Офлайн-прослушивание",
      description: "Скачивайте треки, альбомы и плейлисты для прослушивания без подключения к интернету. Идеально для путешествий, прогулок или мест с плохим сигналом.",
      image: DiogramsOffline
    },
    {
      title: "Эксклюзивные плейлисты и ранний доступ",
      description: "Получайте доступ к эксклюзивным плейлистам, подобранным специально для вас, а также ранний доступ к новым релизам и альбомам.",
      image: Exluziv
    },
    {
      title: "Неограниченное количество пропусков треков",
      description: "Переключайтесь между треками без ограничений. С Neofy Premium вы можете пропускать песни столько раз, сколько захотите.",
      image: NoOgranich
    }
  ];

  return (
    <Section>
      <Title>Преимущества Премиума</Title>
      <AdvantagesList>
        {advantages.map((advantage, index) => (
          <AdvantageItem key={index}>
            <AdvantageImage src={advantage.image} alt={advantage.title} />
            <AdvantageTitle>{advantage.title}</AdvantageTitle>
            <AdvantageDescription>{advantage.description}</AdvantageDescription>
          </AdvantageItem>
        ))}
      </AdvantagesList>
    </Section>
  );
};

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #fff;
`;

const AdvantagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const AdvantageItem = styled.div`
  width: 25%;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AdvantageTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
  font-size: 17px;
`;

const AdvantageDescription = styled.p`
  color: #fff;
  line-height: 1.6;
  font-size: 13px;
`;

const AdvantageImage = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto 1rem;
  object-fit: contain;
`;