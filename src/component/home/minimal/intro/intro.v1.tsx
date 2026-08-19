import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react'

interface IntroProps {
  content: {
    summary: string;
  };
}

export default function IntroV1({ content }: IntroProps) {
  return (
    <div data-component="intro">
      <div>
        <h2>Myself</h2>
        <p>I like making things that feel simple.</p>
        <p>From interfaces to the systems behind them,</p>
        <p> I’m interested in how thoughtful design and solid engineering can come together to create better experiences.</p>
        <div>
          <span>Developer</span>
          <span>✦</span>
          <span>Designer</span>
          <span>✦</span>
          <span>Builder</span>
        </div>
        <Link to={'/about'}>Get to know me <MoveRight /></Link>
      </div>
    </div>
  );
}
