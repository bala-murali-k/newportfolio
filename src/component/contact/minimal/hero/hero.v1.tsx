import { ArrowRight } from "lucide-react";
import { requestMinimalScroll } from "@/utils/hooks/minimal/use.minimal.scroll";

export default function HeroV1() {

  return (
    <div data-component="contact-hero">
      <div>
        <h1>Contact</h1>
        <p>Start a conversation.</p>
        <a onClick={(event) => { event.preventDefault(), requestMinimalScroll(100) }}>Write an email <ArrowRight /></a>
      </div>
    </div>
  );
}