"use client";

import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export default function SubmitProject() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Criando...
        </>
      ) : (
        "Criar Projeto"
      )}
    </Button>
  );
}
