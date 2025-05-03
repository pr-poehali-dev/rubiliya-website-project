
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Шапка */}
      <header className="bg-blue-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Главная</h1>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:underline font-semibold">Главная</Link>
            <Link to="/rubilia" className="hover:underline">Рубилия</Link>
          </nav>
          <Button variant="outline" className="bg-blue-700 hover:bg-blue-600 md:hidden">
            <Icon name="Menu" className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto py-16 px-4 flex-grow flex flex-col items-center justify-center">
        <Card className="max-w-2xl w-full shadow-xl">
          <CardHeader className="text-center bg-blue-50">
            <CardTitle className="text-3xl text-blue-800">Добро пожаловать</CardTitle>
            <CardDescription>Ознакомьтесь с виртуальным государством</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1550431720-0c8b5e384d86?q=80&w=800&auto=format&fit=crop"
                alt="Флаг Рубилии" 
                className="mx-auto w-full max-w-md rounded-md shadow-md"
              />
            </div>
            <p className="text-center text-gray-700 mb-4">
              Открой для себя новое виртуальное государство — Республику Рубилия.
            </p>
            <p className="text-center text-gray-700">
              Узнай о символике, истории и статистике этого уникального цифрового пространства.
            </p>
          </CardContent>
          <CardFooter className="justify-center bg-blue-50">
            <Link to="/rubilia">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Перейти к Рубилии
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </main>
      
      {/* Подвал */}
      <footer className="bg-blue-800 text-white p-4 text-center">
        <p>© 2025 Виртуальные государства. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
