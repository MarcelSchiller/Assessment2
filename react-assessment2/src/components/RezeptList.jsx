import { useState } from 'react';

export default function RecipeList({ recipes, onSelect, onDelete }) {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Alle');

    const categories = ['Alle', 'Frühstück', 'Hauptgericht', 'Dessert'];

    const filteredRecipes = recipes.filter((recipe) => {
        const text = search.toLowerCase();

        const matchesSearch = recipe.title.toLowerCase().includes(text) ||
            recipe.ingredients.some((ing) =>
                ing.name.toLowerCase().includes(text)
            );
        const matchesCategory =
            selectedCategory === 'Alle' || recipe.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Suche nach Titel und Zutaten"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{width: '250px', height:'40px', fontSize: '1.1rem', borderRadius: '4px', border: 'none'
                }}
            />

            <div style={{ margin: '1rem 0' }}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        style={{
                            marginRight: '0.5rem',
                            fontWeight: selectedCategory === cat ? 'bold' : 'normal'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <ul>
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe) => (
                        <li
                            key={recipe.id}
                            onClick={() => onSelect(recipe)}
                            style={{
                                cursor: 'pointer',
                                padding: '0.5rem',
                                borderRadius: '15px',
                                backgroundColor: '#2e2e2e',
                                transition: 'all 0.2s ease',
                                border: '1px solid #242424',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'}}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.border = '1px solid #ccc';
                                e.currentTarget.style.backgroundColor = '#242424';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.border = '1px solid #242424';
                                e.currentTarget.style.backgroundColor = '#2e2e2e';
                            }}
                        >
                            <p><strong>{recipe.title}</strong> – {recipe.category}</p>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (confirm('Bist du sicher, dass du dieses Rezept löschen willst?')) {
                                        onDelete(recipe.id);
                                    }
                                }}
                                style={{marginLeft: '1rem' }}
                            >
                                🗑️
                            </button>
                        </li>
                    ))
                ) : (
                    <li>Keine passenden Rezepte gefunden.</li>
                )}
            </ul>
        </div>
    );
}
