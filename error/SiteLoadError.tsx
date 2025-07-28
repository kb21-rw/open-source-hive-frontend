const SiteLoadError = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center text-primary items-center ">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4">
        Error Loading Site
      </h1>
      <p className="text-lg font-extralight">
        An error occurred while fetching data. Please try again later.
      </p>
    </div>
  );
};

export default SiteLoadError;
