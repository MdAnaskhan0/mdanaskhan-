const SectionHeader = ({ children }) => {
    return (
        <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-green-400">#</span> {children}
        </h2>
    );
};

export default SectionHeader;