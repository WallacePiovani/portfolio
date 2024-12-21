
const ScrollIndicator = () => {
    return (
        <div className="relative flex flex-col items-center justify-center">
            <div className="relative mb-8 w-[5vmin] h-[8vmin] rounded-full border-2 border-gray-600">
                <div className="absolute left-3.5 -translate-x-2/3 top-[10%] w-[20%] h-[10%] bg-gray-600 rounded-full animate-scroll"></div>
            </div>
        </div>
    );
};

export default ScrollIndicator;
