export default function Button({ children, className = '' }) {
    return (
        <button className={`py-2.5 px-5 bg-grey-8 border border-grey-15 rounded-lg ${className}`}>
            {children}
        </button>
    );
};