import {
  CardsSection,
  ContactSection,
  Hero,
  LayoutComponent,
  TodoListSection,
} from '@/presentation/components';

export default function Home() {
  return (
    <LayoutComponent>
      <Hero />
      <TodoListSection />
      <CardsSection />
      <ContactSection />
    </LayoutComponent>
  );
}
