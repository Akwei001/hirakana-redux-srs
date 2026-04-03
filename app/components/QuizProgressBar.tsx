import { Progress } from "@/components/ui/progress";
type Props = { current: number; total: number };

const QuizProgressBar = ({ current, total }: Props) => {
  const percentage = Math.round((current / total) * 100);
  return (
    <div className="w-full space-y-1">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{current} / {total}</span>
        <span>{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};
export default QuizProgressBar;