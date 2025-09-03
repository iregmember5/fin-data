

const DocumentFlowAnimation = () => {
  return (
    <div className="relative mt-16">
      <div className="flex justify-center items-center space-x-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="w-16 h-20 bg-white shadow-lg rounded-lg border border-purple-200 flex items-center justify-center animate-float"
            style={{ animationDelay: `${item * 0.3}s` }}
          >
            <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent blur-sm animate-pulse"></div>
      </div>
    </div>
  );
};

export default DocumentFlowAnimation