
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Rubilia = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Шапка */}
      <header className="bg-blue-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Республика Рубилия</h1>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:underline">Главная</Link>
            <Link to="/rubilia" className="hover:underline font-semibold">Рубилия</Link>
          </nav>
          <Button variant="outline" className="bg-blue-700 hover:bg-blue-600 md:hidden">
            <Icon name="Menu" className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto py-8 px-4 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Левая колонка - Символика */}
          <Card className="col-span-1 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-center text-blue-800">Государственные символы</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium">Государственный флаг</h3>
                <div className="border border-gray-200 p-2 rounded-md">
                  <img 
                    src="https://images.unsplash.com/photo-1550431720-0c8b5e384d86?q=80&w=800&auto=format&fit=crop" 
                    alt="Флаг Рубилии" 
                    className="w-full h-auto rounded shadow-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Государственный герб</h3>
                <div className="border border-gray-200 p-2 rounded-md">
                  <img 
                    src="https://images.unsplash.com/photo-1551670081-a194656e1e05?q=80&w=800&auto=format&fit=crop" 
                    alt="Герб Рубилии" 
                    className="w-full h-auto rounded shadow-sm"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Центральная колонка - Основная информация */}
          <Card className="col-span-1 lg:col-span-2 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-center text-blue-800">О государстве</CardTitle>
              <CardDescription className="text-center">Виртуальная республика будущего</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Tabs defaultValue="info" className="w-full">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="info">Основное</TabsTrigger>
                  <TabsTrigger value="statistics">Статистика</TabsTrigger>
                  <TabsTrigger value="history">История</TabsTrigger>
                </TabsList>
                
                <TabsContent value="info" className="space-y-4">
                  <p className="text-gray-700">
                    Республика Рубилия — виртуальное государство, основанное в 2025 году. 
                    Расположено в цифровом пространстве и представляет собой уникальный 
                    эксперимент по созданию виртуального общества с собственными 
                    законами и традициями.
                  </p>
                  <p className="text-gray-700">
                    Название "Рубилия" происходит от славянского корня, символизирующего 
                    силу и решительность. Государство стремится к развитию 
                    цифровых технологий и инноваций.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h3 className="font-semibold text-blue-800 mb-2">Девиз:</h3>
                    <p className="italic">"В единстве цифр — наша сила"</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="statistics" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-md flex items-center">
                      <Icon name="Users" className="h-10 w-10 text-blue-600 mr-3" />
                      <div>
                        <h3 className="font-semibold">Граждане</h3>
                        <p className="text-2xl font-bold">1</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-md flex items-center">
                      <Icon name="MapPin" className="h-10 w-10 text-blue-600 mr-3" />
                      <div>
                        <h3 className="font-semibold">Территория</h3>
                        <p className="text-2xl font-bold">0 км²</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-md flex items-center">
                      <Icon name="Shield" className="h-10 w-10 text-blue-600 mr-3" />
                      <div>
                        <h3 className="font-semibold">Армия</h3>
                        <p className="text-2xl font-bold">0</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-md flex items-center">
                      <Icon name="Anchor" className="h-10 w-10 text-blue-600 mr-3" />
                      <div>
                        <h3 className="font-semibold">Флот</h3>
                        <p className="text-2xl font-bold">0</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="history" className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="bg-blue-100 p-2 rounded-full h-fit">
                        <Icon name="CalendarDays" className="h-6 w-6 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold">3 мая 2025</h3>
                        <p className="text-gray-700">Основание Республики Рубилия</p>
                      </div>
                    </div>
                    <Separator />
                    <p className="text-gray-700">
                      История Рубилии только начинается. Будущие события будут записаны здесь.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="bg-blue-50 flex justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Стать гражданином
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      {/* Подвал */}
      <footer className="bg-blue-800 text-white p-4 text-center">
        <p>© 2025 Республика Рубилия. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Rubilia;
