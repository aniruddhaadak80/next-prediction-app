"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputval, setVal] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputval}`);
  };
  return (
    <>
      <h1>Prediction of Age, Gender, Country using Name </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name ..."
          onChange={(e) => setVal(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
        {/* button must be inside the form tag . */}
      </form>
    </>
  );
}
