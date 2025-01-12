import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function ProjectHeader({ title, timeline }: { title: string; timeline: string }) {
  const navigate = useRouter();
  return (
    <>
      <div className="flex items-center gap-x-2 mb-2">
        <ChevronLeft
          className="w-6 h-6 cursor-pointer"
          onClick={() => {
            navigate.back();
          }}
        />
        <p className="text-3xl font-bold">{title}</p>
      </div>
      <p className="text-slate-500 mb-4 text-sm font-medium ml-8">{timeline}</p>
    </>
  );
}

export default ProjectHeader;
