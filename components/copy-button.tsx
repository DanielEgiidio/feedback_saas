"use client";
import { Clipboard } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const CopyBtn = ({ text }: { text: string }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copiado para a area de transferência");
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => copyToClipboard(text)}
            className="text-slate-50 absolute p-2 right-0 top-0"
          >
            <Clipboard />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copiar Código</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyBtn;
