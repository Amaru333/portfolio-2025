import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";
import React from "react";

function DownloadFile({
  name,
  link,
  file_name,
}: {
  name: string;
  link: string;
  file_name: string;
}) {
  return (
    <Button className="py-6">
      <a href={link} download={file_name} className="w-fit flex flex-row items-center">
        <div className="flex flex-col items-start">
          <p className="max-w-60 line-clamp-1">{name}</p>
          <p className="text-xs text-slate-400 max-w-60 line-clamp-1">{file_name}</p>
        </div>
        <div>
          <DownloadCloud className="ml-4 -mb-1" size={20} />
        </div>
      </a>
    </Button>
  );
}

export default DownloadFile;
