"use client";

import { TAIL } from "@/constants";
import { cls } from "@/utils";
import { RedirectType, redirect } from "next/navigation";
import { useEffect } from "react";

interface DeleteProps {
  id: number;
}

const Delete = ({ id }: DeleteProps) => {
  const onClick = async () => {
    await fetch(`/tweet/${id}/api`, {
      method: "DELETE",
      body: JSON.stringify({ tweet: { id } }),
    });
  };
  return (
    <button className={cls(TAIL.button)} onClick={onClick}>
      Delete
    </button>
  );
};

export default Delete;
