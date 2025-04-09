import React from 'react';
import styled from 'styled-components';
import RecomPer from "./../../image/img/icons8-музыкально-100 (1).png";
import UdobInt from "./../../image/img/icons8-интерфейс-100.png";
import Podderzh from "./../../image/img/icons8-музыкант-100.png";
import KrossPlat from "./../../image/img/icons8-поделиться-2-100.png"
import SocFun from "./../../image/img/icons8-друзья-100.png";
import NeoPrem from "./../../image/img/Premium.png"

export const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Персональные рекомендации",
      description: "Neofy использует умные алгоритмы, которые анализируют ваши музыкальные предпочтения и предлагают треки, плейлисты и исполнителей, которые точно соответствуют вашему вкусу.",
      image: RecomPer
    },
    {
      title: "Удобный интерфейс",
      description: "Мы создали платформу с минималистичным и понятным дизайном, чтобы вы могли легко находить любимые треки, создавать плейлисты и управлять своей музыкальной библиотекой без лишних усилий.",
      image: UdobInt
    },
    {
      title: "Поддержка независимых артистизов",
      description: "Neofy предоставляет площадку для начинающих и независимых исполнителей, помогая им находить свою аудиторию. Вы сможете открывать для себя уникальные треки, которые не найдете на других платформах.",
      image: Podderzh
    },
    {
      title: "Кроссплатформенность",
      description: "Слушайте музыку где угодно: на сайте, в мобильном приложении или на других устройствах. Neofy синхронизирует ваши плейлисты и настройки, чтобы вы могли наслаждаться музыкой без ограничений.",
      image: KrossPlat
    },
    {
      title: "Социальные функции",
      description: "Делитесь своими плейлистами с друзьями, следите за музыкальными предпочтениями других пользователей и находите единомышленников. Neofy — это не только музыка, но и сообщество любителей звуков.",
      image: SocFun
    },
    {
      title: "Гибкая система подписок",
      description: "Neofy предлагает как бесплатный доступ с ограниченной рекламой, так и премиум-подписку без рекламы и с дополнительными функциями, такими как офлайн-прослушивание и улучшенное качество звука. Выбирайте тариф, который подходит именно вам.",
      image: NeoPrem
    }
  ];

  return (
    <Section>
      <Title>Наши преимущества</Title>
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