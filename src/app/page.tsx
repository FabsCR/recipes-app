import { supabase } from '@/utils/supabaseClient';

export default async function Home() {
  const { data: recipes, error } = await supabase
    .from('recipes')
    .select('*');

  if (error) {
    console.error(error);
  }

  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold mb-6">Recipes App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes?.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded shadow">
            <h2 className="text-2xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}