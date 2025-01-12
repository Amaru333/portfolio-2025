import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProjectHeader({ title, timeline }: { title: string; timeline: string }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center gap-x-2 mb-2">
        <ChevronLeft
          className="w-6 h-6 cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        />
        <p className="text-3xl font-bold">{title}</p>
      </div>
      <p className="text-slate-500 mb-4 text-sm font-medium ml-8">{timeline}</p>
    </>
  );
}

export default ProjectHeader;
