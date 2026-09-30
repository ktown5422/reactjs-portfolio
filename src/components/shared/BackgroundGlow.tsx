const BackgroundGlow = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[120px]" />
      <div className="absolute -bottom-48 -right-40 h-[32rem] w-[32rem] rounded-full bg-ember/10 blur-[140px]" />
    </div>
  );
};

export default BackgroundGlow;
