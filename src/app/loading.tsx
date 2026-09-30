const loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas">
      <div
        aria-label="Loading"
        className="h-12 w-12 animate-spin rounded-full border-4 border-ink/10 border-t-accent"
      />
    </div>
  );
};

export default loading;
