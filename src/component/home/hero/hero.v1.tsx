interface HeroProps {
  content: {
    name: string;
    title: string;
  };
}

export default function HeroV1({ content }: HeroProps) {
  return (
    <div data-component="hero">
      <h1>{content.name}</h1>
      <p>{content.title}</p>
    </div>
  );
}
