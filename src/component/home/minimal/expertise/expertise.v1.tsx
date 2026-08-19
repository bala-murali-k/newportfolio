interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  level: number;
}

interface ExpertiseProps {
  content: ExpertiseItem[];
}

export default function ExpertiseV1({ content }: ExpertiseProps) {
  return (
    <div data-component="expertise">
      <div>
        <h2>Expertise</h2>
        <ul>
          {content.map((item) => (
            <li key={item.number}>
              <div data-heading>
                <span data-index>{item.number}</span>
                <h3>{item.title}</h3>
                <div data-bar>
                  <span data-bar-value>{item.level}%</span>
                  <div data-bar-track>
                    <div data-bar-fill style={{ width: `${item.level}%` }} />
                  </div>
                </div>
              </div>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
