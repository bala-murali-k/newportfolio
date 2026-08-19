interface IntroProps {
  content: {
    summary: string;
  };
}

export default function IntroV1({ content }: IntroProps) {
  return (
    <div data-component="intro">
      <h3>Myself</h3>
      <p>I like making things that feel simple.</p>
      <p>From interfaces to the systems behind them,</p>
      <p> I’m interested in how thoughtful design and solid engineering can come together to create better experiences.</p>
      <div>
        <span>Developer</span>
        <span>Designer</span>
        <span>Builder</span>
      </div>
    </div>
  );
}
