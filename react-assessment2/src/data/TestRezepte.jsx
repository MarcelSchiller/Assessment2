export const initialRecipes = [
    {
        id: '1',
        title: 'Rührei mit Schnittlauch',
        description: 'Ein schnelles und einfaches Frühstück.',
        category: 'Frühstück',
        ingredients: [
            { name: 'Eier', amount: '3 Stück' },
            { name: 'Milch', amount: '2 EL' },
            { name: 'Schnittlauch', amount: '1 TL, fein gehackt' },
            { name: 'Butter', amount: '1 TL' },
            { name: 'Salz & Pfeffer', amount: 'nach Geschmack' }
        ],
        steps: [
            'Eier mit Milch verquirlen.',
            'Butter in einer Pfanne erhitzen.',
            'Eimischung hinzugeben und bei mittlerer Hitze stocken lassen.',
            'Schnittlauch einrühren und mit Salz & Pfeffer würzen.'
        ],
        rating: 4
    },
    {
        id: '2',
        title: 'Spaghetti Bolognese',
        description: 'Ein klassisches italienisches Hauptgericht.',
        category: 'Hauptgericht',
        ingredients: [
            { name: 'Spaghetti', amount: '250g' },
            { name: 'Hackfleisch', amount: '300g' },
            { name: 'Tomaten (gehackt)', amount: '400g' },
            { name: 'Zwiebel', amount: '1 Stück' },
            { name: 'Knoblauch', amount: '1 Zehe' },
            { name: 'Olivenöl', amount: '1 EL' },
            { name: 'Oregano', amount: '1 TL' },
            { name: 'Salz & Pfeffer', amount: 'nach Geschmack' }
        ],
        steps: [
            'Zwiebel und Knoblauch fein hacken und in Olivenöl anbraten.',
            'Hackfleisch dazugeben und krümelig anbraten.',
            'Tomaten und Gewürze hinzufügen, 15 Minuten köcheln lassen.',
            'Spaghetti nach Packungsanweisung kochen.',
            'Sauce über die Spaghetti geben und servieren.'
        ],
        rating: 5
    },
    {
        id: '3',
        title: 'Apfelkuchen',
        description: 'Süßer, saftiger Apfelkuchen für den Nachmittag.',
        category: 'Dessert',
        ingredients: [
            { name: 'Äpfel', amount: '3 Stück' },
            { name: 'Mehl', amount: '250g' },
            { name: 'Zucker', amount: '150g' },
            { name: 'Butter', amount: '150g' },
            { name: 'Eier', amount: '2 Stück' },
            { name: 'Backpulver', amount: '1 TL' },
            { name: 'Zimt', amount: '1 TL' }
        ],
        steps: [
            'Butter, Zucker und Eier schaumig rühren.',
            'Mehl, Backpulver und Zimt dazugeben und verrühren.',
            'Äpfel schälen, schneiden und unterheben.',
            'Teig in eine Form geben und bei 180°C ca. 40 Minuten backen.'
        ],
        rating: 5
    },
    {
        id: '8',
        title: 'Tomatensuppe',
        description: 'Leichte Suppe mit mediterranem Geschmack.',
        category: 'Hauptgericht',
        ingredients: [
            { name: 'Tomaten (gehackt)', amount: '800g' },
            { name: 'Zwiebel', amount: '1' },
            { name: 'Knoblauch', amount: '1 Zehe' },
            { name: 'Gemüsebrühe', amount: '500ml' },
            { name: 'Olivenöl', amount: '1 EL' },
            { name: 'Basilikum', amount: 'ein paar Blätter' }
        ],
        steps: [
            'Zwiebel und Knoblauch andünsten.',
            'Tomaten und Brühe dazugeben, 15 Minuten köcheln.',
            'Pürieren und mit Basilikum garnieren.'
        ],
        rating: 4
    },
    {
        id: '7',
        title: 'Schoko-Cookies',
        description: 'Außen knusprig, innen weich.',
        category: 'Dessert',
        ingredients: [
            { name: 'Butter', amount: '100g' },
            { name: 'Zucker', amount: '100g' },
            { name: 'Ei', amount: '1' },
            { name: 'Mehl', amount: '200g' },
            { name: 'Backpulver', amount: '1 TL' },
            { name: 'Schokostücke', amount: '100g' }
        ],
        steps: [
            'Butter, Zucker und Ei verrühren.',
            'Mehl und Backpulver dazugeben, dann Schokostücke unterheben.',
            'Teig portionieren und bei 180°C ca. 12 Minuten backen.'
        ],
        rating: 5
    },
    {
        id: '6',
        title: 'Mac and Cheese',
        description: 'Cremige Käsesoße trifft auf Nudeln.',
        category: 'Hauptgericht',
        ingredients: [
            { name: 'Makkaroni', amount: '250g' },
            { name: 'Butter', amount: '30g' },
            { name: 'Mehl', amount: '2 EL' },
            { name: 'Milch', amount: '400ml' },
            { name: 'Cheddar', amount: '200g' },
            { name: 'Muskat', amount: 'Prise' }
        ],
        steps: [
            'Makkaroni kochen.',
            'Butter schmelzen, Mehl einrühren, Milch langsam dazugeben.',
            'Käse einrühren und schmelzen lassen.',
            'Nudeln untermischen und servieren.'
        ],
        rating: 5
    },
    {
        id: '5',
        title: 'Caesar Salad',
        description: 'Frischer Salat mit knusprigen Croutons und Parmesan.',
        category: 'Hauptgericht',
        ingredients: [
            { name: 'Römersalat', amount: '1 Kopf' },
            { name: 'Croutons', amount: '1 Handvoll' },
            { name: 'Parmesan', amount: '50g' },
            { name: 'Caesar Dressing', amount: 'nach Geschmack' },
            { name: 'Hähnchenbrust (optional)', amount: '1 Stück' }
        ],
        steps: [
            'Salat waschen und schneiden.',
            'Mit Croutons, Parmesan und Dressing vermischen.',
            'Optional gebratene Hähnchenstreifen hinzufügen.'
        ],
        rating: 3
    },
    {
        id: '4',
        title: 'Pfannkuchen',
        description: 'Klassisches Frühstück mit wenigen Zutaten.',
        category: 'Frühstück',
        ingredients: [
            { name: 'Mehl', amount: '200g' },
            { name: 'Milch', amount: '300ml' },
            { name: 'Eier', amount: '2 Stück' },
            { name: 'Prise Salz', amount: '1' },
            { name: 'Butter (zum Braten)', amount: 'etwas' }
        ],
        steps: [
            'Mehl, Milch, Eier und Salz zu einem glatten Teig verrühren.',
            'In einer Pfanne Butter erhitzen.',
            'Teig portionsweise ausbacken, bis die Pfannkuchen goldbraun sind.'
        ],
        rating: 4
    }
];