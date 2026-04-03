import { Button } from "@/components/ui/button";
type Props = { onFlip: () => void; isFlipped: boolean };

const FlipAnswerButton = ({ onFlip, isFlipped }: Props) => {
  if (isFlipped) return null;
  return (
    <Button onClick={onFlip} className="w-full" size="lg">
      Reveal Answer
    </Button>
  );
};
export default FlipAnswerButton;