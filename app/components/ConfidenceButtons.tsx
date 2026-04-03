import { Button } from "@/components/ui/button";
type Rating = "knew" | "unsure" | "forgot";
type Props = { onAnswer: (rating: Rating) => void; isVisible: boolean };

const ConfidenceButtons = ({ onAnswer, isVisible }: Props) => {
  if (!isVisible) return null;
  return (
    <div className="flex gap-3 w-full">
      <Button onClick={() => onAnswer("forgot")} variant="outline"
        className="flex-1 border-red-400 text-red-500 hover:bg-red-50">
        Forgot
      </Button>
      <Button onClick={() => onAnswer("unsure")} variant="outline" className="flex-1">
        Unsure
      </Button>
      <Button onClick={() => onAnswer("knew")}
        className="flex-1 bg-green-600 hover:bg-green-700 text-white">
        Knew it
      </Button>
    </div>
  );
};
export default ConfidenceButtons;