function Badge({ text }: { text: string }) {
  return (
    <span className="text-xs font-medium bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-200 px-2 py-1 rounded-full">
      {text}
    </span>
  );
}

export default Badge;
