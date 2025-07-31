export default function RecipeDetail({ recipe, onBack, onEdit, onDelete }) {

    function renderStars(rating) {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} style={{ color: i <= rating ? 'gold' : '#ccc', fontSize: '1.2rem' }}>
                ★
                </span>
            );
        }
        return stars;
    }

    return (
        <div>
            <button onClick={onBack}>← Zurück zur Liste</button>
            <button onClick={onEdit} style={{marginLeft: '1rem' }}>📝 Bearbeiten</button>
            <button
                onClick={() => {
                    if (confirm('Bist du sicher, dass du dieses Rezept löschen willst?')) {
                        onDelete(recipe.id);
                    }
                }}
                style={{marginLeft: '1rem' }}
            >
                🗑️ Löschen
            </button>
            <h2>{recipe.title}</h2>
            <p><strong>Kategorie:</strong> {recipe.category}</p>
            <p><strong>Beschreibung:</strong> {recipe.description}</p>
            <hr />
            <h3>Zutaten</h3>
            <ul>
                {recipe.ingredients.map((ing, index) => (
                    <li key={index}>
                        {ing.amount} {ing.name}
                    </li>
                ))}
            </ul>
            <hr />
            <h3>Zubereitung</h3>
            <ol>
                {recipe.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>

            <p>
                <strong>Bewertung:</strong> {renderStars(recipe.rating)} ({recipe.rating}/5)
            </p>

            <hr />

        </div>
    );
}
