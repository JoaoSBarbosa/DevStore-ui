"use client";
import { DefaultButton } from "@/shared/components/Buttons";
import { useState } from "react";

export const NewsletterInput = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setEmail("");
    alert(`E-mail enviado: ${email}`);
  };
  return (
    <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-3/5">
      <input
        className="border border-gray-200 rounded p-6 w-full outline-none focus:outline-none focus:right-0 transition-colors"
        type="email"
        placeholder="Qual seu e-mail?"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <DefaultButton label="Enviar" onClick={handleSubmit} />
    </div>
  );
};
