interface ConnectContent {
  heading: string;
  questions: string[];
  statement: string;
  cta: {
    label: string;
    href: string;
  };
}

interface ConnectProps {
  content: ConnectContent;
}

export default function ConnectV1({ content }: ConnectProps) {
  return (
    <>
      <div data-component="connect">
        <div>
          <h2>{content.heading}</h2>
          <div data-content>
            <div data-questions>
              {content.questions.map((question, idx) => (
                <p key={idx}>{question}</p>
              ))}
            </div>
            <p data-statement>{content.statement}</p>
            <a href={content.cta.href} data-cta>
              <span>{content.cta.label}</span>
              <span data-arrow>↗</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}