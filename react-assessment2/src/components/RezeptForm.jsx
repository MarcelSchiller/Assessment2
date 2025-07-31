import {useEffect, useState} from 'react';
import StarRating from './StarRating';


export default function RecipeForm({onSave, existingRecipe, onCancel}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState([{ name: '', amount: '' }]);
    const [steps, setSteps] = useState(['']);
    const [rating, setRating] = useState(1);


    useEffect(() => {
        if (existingRecipe) {
            setTitle(existingRecipe.title);
            setDescription(existingRecipe.description);
            setCategory(existingRecipe.category);
            setIngredients(existingRecipe.ingredients);
            setSteps(existingRecipe.steps);
            setRating(existingRecipe.rating);
        }
    }, [existingRecipe]);


    const addIngredient = () => {
        setIngredients([...ingredients, {name: '', amount: ''}]);
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

        const updateRecipe = {
            id: existingRecipe?.id || Date.now(),
            title,
            description,
            category,
            ingredients,
            steps,
            rating
        };

        onSave(updateRecipe);

        // Felder zurücksetzen
        if (!existingRecipe) {
            setTitle('');
            setDescription('');
            setCategory('');
            setIngredients([]);
            setSteps(['']);
            setRating(1);
        }

    };

    const removeIngredient = (indexToRemove) => {
        setIngredients(ingredients.filter((_, i) => i !== indexToRemove));
    };

    const removeStep = (indexToRemove) => {
        setSteps(steps.filter((_, i) => i !== indexToRemove));
    };


    return (
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>

            <input
                placeholder="Titel"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{padding: '0.5rem', fontSize: '1rem'}}
            />

            <textarea
                placeholder="Beschreibung"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{padding: '0.5rem', fontSize: '1rem', resize: 'vertical'}}
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                style={{padding: '0.5rem', fontSize: '1rem'}}
            >
                <option value="">Kategorie wählen</option>
                <option value="Frühstück">Frühstück</option>
                <option value="Hauptgericht">Hauptgericht</option>
                <option value="Dessert">Dessert</option>
            </select>

            <div>
                <h3>Zutaten</h3>
                {ingredients.map((ingredient, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            gap: '0.5rem',
                            marginBottom: '0.5rem',
                            alignItems: 'center'
                        }}
                    >
                        <input
                            placeholder="Name"
                            value={ingredient.name}
                            onChange={(e) => updateIngredient(index, 'name', e.target.value)}
                            required
                            style={{flex: 1, padding: '0.5rem'}}
                        />
                        <input
                            placeholder="Menge"
                            value={ingredient.amount}
                            onChange={(e) => updateIngredient(index, 'amount', e.target.value)}
                            required
                            style={{width: '150px', padding: '0.5rem'}}
                        />
                        <button
                            type="button"
                            onClick={() => removeIngredient(index)}
                            style={{background: 'none', border: 'none', cursor: 'pointer', color: 'red'}}
                            title="Zutat entfernen"
                        >
                            🗑️
                        </button>
                    </div>
                ))}
                <button type="button" onClick={addIngredient} style={{marginTop: '0.5rem'}}>
                    + Zutat
                </button>
            </div>

            <div>
                <h3>Zubereitung</h3>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            gap: '0.5rem',
                            marginBottom: '0.5rem',
                            alignItems: 'flex-start'
                        }}
                    >
                    <textarea
                        placeholder={`Schritt ${index + 1}`}
                        value={step}
                        onChange={(e) => updateStep(index, e.target.value)}
                        required
                        style={{flex: 1, padding: '0.5rem', fontSize: '1rem'}}
                        />
                        <button
                            type="button"
                            onClick={() => removeStep(index)}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'red',
                                height: 'fit-content'
                            }}
                            title="Schritt entfernen"
                        >
                            🗑️
                        </button>
                    </div>
                ))}
                <button type="button" onClick={addStep}>
                    + Schritt
                </button>
            </div>

            <div>
                <label>Bewertung:</label>
                <StarRating value={rating} onChange={setRating}/>
            </div>

            <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                <button type="submit">
                    {existingRecipe ? 'Änderungen speichern' : 'Rezept speichern'}
                </button>
                {existingRecipe && (
                    <button type="button" onClick={onCancel}>
                        Abbrechen
                    </button>
                )}
            </div>
        </form>
    );
}