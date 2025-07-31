import { useState } from 'react';


export default function RecipeForm({ onSave }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState(['']);
    const [rating, setRating] = useState(1);

    const addIngredient = () => {
        setIngredients([...ingredients, { name: '', amount: '' }]);
    };

    const updateIngredient = (index, field, value) => {
        const updated = [...ingredients];
        updated[index][field] = value;
        setIngredients(updated);
    };

    const updateStep = (index, value) => {
        const updated = [...steps];
        updated[index] = value;
        setSteps(updated);
    };

    const addStep = () => {
        setSteps([...steps, '']);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecipe = {
            id: Date.now(),
            title,
            description,
            category,
            ingredients,
            steps,
            rating
        };

        onSave(newRecipe);

        // Felder zurücksetzen
        setTitle('');
        setDescription('');
        setCategory('');
        setIngredients([]);
        setSteps(['']);
        setRating(1);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                placeholder="Titel"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <textarea
                placeholder="Beschreibung"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            >
                <option value="">Kategorie wählen</option>
                <option value="Frühstück">Frühstück</option>
                <option value="Hauptgericht">Hauptgericht</option>
                <option value="Dessert">Dessert</option>
            </select>

            <div>
                <h3>Zutaten</h3>
                {ingredients.map((ingredient, index) => (
                    <div key={index}>
                        <input
                            placeholder="Name"
                            value={ingredient.name}
                            onChange={(e) =>
                                updateIngredient(index, 'name', e.target.value)
                            }
                            required
                        />
                        <input
                            placeholder="Menge"
                            value={ingredient.amount}
                            onChange={(e) =>
                                updateIngredient(index, 'amount', e.target.value)
                            }
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={addIngredient}>
                    + Zutat
                </button>
            </div>

            <div>
                <h3>Zubereitung</h3>
                {steps.map((step, index) => (
                    <textarea
                        key={index}
                        placeholder={`Schritt ${index + 1}`}
                        value={step}
                        onChange={(e) => updateStep(index, e.target.value)}
                        required
                    />
                ))}
                <button type="button" onClick={addStep}>
                    + Schritt
                </button>
            </div>

            <div>
                <label>Bewertung: {rating}</label>
                <input
                    type="range"
                    min={1}
                    max={5}
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                />
            </div>

            <button type="submit">Rezept speichern</button>
        </form>
    );
}