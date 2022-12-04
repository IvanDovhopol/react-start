import PaintingList from './components/PaintingList';
import painting from './paintings.json';
import Section from './components/Section';

export default function App() {
  return (
    <div>
      <Section title="TOP">
        <PaintingList items={painting} />
      </Section>
    </div>
  );
}
