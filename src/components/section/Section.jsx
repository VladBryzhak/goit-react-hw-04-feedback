import { StatisticSection, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => (
  <StatisticSection>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </StatisticSection>
);