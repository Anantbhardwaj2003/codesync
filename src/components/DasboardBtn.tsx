"use client";

import { SparkleIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useUserRole } from "@/hooks/useUserRole";

function DasboardBtn() {
  const {isCandidate,isLoading}= useUserRole();
  if (isCandidate || isLoading) 
    return null;

  return <Link href="/dashboard">
  <Button className="gap-2 font-medium" size={"sm"}>
    <SparkleIcon className="size-4"/>
    Dashboard
    </Button></Link>
}

export default DasboardBtn