export default function StarRating({ value, onChange }) {
    const handleClick = (index) => {
        onChange(index);
    };
    return (
        <div>
            {[1, 2, 3, 4, 5].map((i) => (
                <span
                    key={i}
                    onClick={() => handleClick(i)}
                    style={{
                        cursor: 'pointer',
                        color: i <= value ? 'gold' : '#ccc',
                        fontSize: '1.5rem',
                        marginRight: '4px'
                    }}
                >
                ★
                </span>
            ))}
        </div>
    );
}

