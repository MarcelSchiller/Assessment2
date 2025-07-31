import {useEffect, useState} from 'react';
import RezeptForm from './components/RezeptForm.jsx';
import {initialRecipes} from './data/TestRezepte.jsx';
import RezeptList from './components/RezeptList.jsx';
import RezeptDetail from './components/RezeptDetail';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState(() => {
      const saved = localStorage.getItem('recipes');
      return saved ? JSON.parse(saved) : initialRecipes;
  });
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [view, setView] = useState('list'); // 'list', 'form', 'detail', 'edit'

    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);

    const handleShowList = () => {
        setSelectedRecipe(null);
        setEditMode(false);
        setView('list');
    };

    const handleShowForm = () => {
        setSelectedRecipe(null);
        setEditMode(false);
        setView('form');
    };

    const handleSelectRecipe = (recipe) => {
        setSelectedRecipe(recipe);
        setView('detail');
    };

    const handleDeleteRecipe = (id) => {
        setRecipes(recipes.filter((r) => r.id !== id));
        setSelectedRecipe(null);
        setView('list');
    };

    const handleSaveNewRecipe = (recipe) => {
        setRecipes([...recipes, recipe]);
        setView('list');
    };

    const handleSaveEditedRecipe = (updated) => {
        setRecipes(recipes.map((r) => (r.id === updated.id ? updated : r)));
        setSelectedRecipe(null);
        setEditMode(false);
        setView('list');
    };

    const handleCancelEdit = () => {
     //   setSelectedRecipe(null);
        setEditMode(false);
     //   setView('list');
    };

    const handleStartEdit = () => {
        setEditMode(true);
    };

    const handleDeleteStorage = () =>{
        localStorage.removeItem('recipes');
        setRecipes(initialRecipes);
    }

  return (
      <div className="appContainer">
          <h1>Persönliche Rezeptsammlung</h1>
          <div style={{ marginBottom: '1rem' }}>
              <button onClick={handleShowList}>📋 Rezepte</button>
              <button onClick={handleShowForm} style={{ marginLeft: '1rem' }}>➕</button>
              <button onClick={handleDeleteStorage} style={{ marginLeft: '1rem' }}> Delete Storage</button>
          </div>

          {view === 'list' && !selectedRecipe && (
              <RezeptList recipes={recipes} onSelect={handleSelectRecipe} onDelete={handleDeleteRecipe} />
          )}

          {view === 'form' && (
              <RezeptForm onSave={handleSaveNewRecipe} />
          )}

          {view === 'detail' && selectedRecipe && !editMode && (
              <RezeptDetail
                  recipe={selectedRecipe}
                  onBack={handleShowList}
                  onEdit={handleStartEdit}
                  onDelete={handleDeleteRecipe}
              />
          )}

          {editMode && selectedRecipe && (
              <RezeptForm
                  existingRecipe={selectedRecipe}
                  onSave={handleSaveEditedRecipe}
                  onCancel={handleCancelEdit}
              />
          )}

      </div>
  );
}

export default App;
