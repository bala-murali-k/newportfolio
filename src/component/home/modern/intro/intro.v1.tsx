interface IntroProps {
  content: {
    summary: string;
  };
}

export default function IntroV1({ content }: IntroProps) {
  return (
    <div data-component="intro">
      <p>{content.summary}</p>
    </div>
  );
}
