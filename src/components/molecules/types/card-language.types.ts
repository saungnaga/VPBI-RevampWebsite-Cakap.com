export type Language = {
  id: number;
  title: string;
  textTopic: string;
  topic: string;
  textLink: string;
  date: string;
  live: string;
};

export type CardLanguageProps = {
  languages: Language[];
};
