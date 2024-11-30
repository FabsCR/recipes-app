import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
          RecipeApp
        </Link>
        <div className="space-x-4">
          <Link href="/recipes" className="hover:underline">
            Recipes
          </Link>
          <Link href="/add-recipe" className="hover:underline">
            Add Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
}