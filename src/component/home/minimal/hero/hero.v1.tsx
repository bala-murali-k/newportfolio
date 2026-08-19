interface HeroProps {
  content: {
    name: string;
    title: string;
  };
}

export default function HeroV1({ content }: HeroProps) {
  return (
    <div data-component="hero">
      <div>
        <h1>BALA</h1>
        <h1>MURALI</h1>
        <div>
          <h1>K,</h1>
          <p>Software Engineer.</p>
        </div>
        <span>Less noise, more signal.</span>
      </div>
    </div>
  );
}
