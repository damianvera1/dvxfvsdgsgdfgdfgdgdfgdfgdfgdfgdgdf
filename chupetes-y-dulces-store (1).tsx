import { ShoppingCart, Star, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const products = [
  { 
    id: 1, 
    name: "Chupete Arcoíris", 
    brand: "NUK",
    price: 5.99, 
    image: "/placeholder.svg?height=200&width=200&text=🌈",
    age: "0-6 meses",
    rating: 4.5,
    type: "pacifier"
  },
  { 
    id: 2, 
    name: "Chupete Espacial", 
    brand: "MAM",
    price: 7.99, 
    image: "/placeholder.svg?height=200&width=200&text=🚀",
    age: "6-18 meses",
    rating: 4.8,
    type: "pacifier"
  },
  { 
    id: 3, 
    name: "Chupete Plop Estrella", 
    brand: "Plop",
    price: 9.99, 
    image: "/placeholder.svg?height=200&width=200&text=⭐",
    age: "0-24 meses",
    rating: 4.9,
    bestseller: true,
    type: "pacifier"
  },
  { 
    id: 4, 
    name: "Piruletas Multicolor", 
    brand: "DulceAlegría",
    price: 3.99, 
    image: "/placeholder.svg?height=200&width=200&text=🍭",
    age: "3+ años",
    rating: 4.7,
    type: "candy"
  },
  { 
    id: 5, 
    name: "Ositos de Goma", 
    brand: "GomiGom",
    price: 2.50, 
    image: "/placeholder.svg?height=200&width=200&text=🐻",
    age: "4+ años",
    rating: 4.6,
    type: "candy"
  },
  { 
    id: 6, 
    name: "Chupete Anatómico Floral", 
    brand: "Suavinex",
    price: 7.50, 
    image: "/placeholder.svg?height=200&width=200&text=🌸",
    age: "0-6 meses",
    rating: 4.6,
    type: "pacifier"
  },
  { 
    id: 7, 
    name: "Caramelos Ácidos Surtidos", 
    brand: "SourPower",
    price: 1.99, 
    image: "/placeholder.svg?height=200&width=200&text=🍋",
    age: "6+ años",
    rating: 4.3,
    type: "candy"
  },
  { 
    id: 8, 
    name: "Chupete Ecológico Animal", 
    brand: "Natursutten",
    price: 12.99, 
    image: "/placeholder.svg?height=200&width=200&text=🐘",
    age: "0-12 meses",
    rating: 4.4,
    eco: true,
    type: "pacifier"
  },
  { 
    id: 9, 
    name: "Caramelos de Menta", 
    brand: "FrescoMint",
    price: 1.50, 
    image: "/placeholder.svg?height=200&width=200&text=🍃",
    age: "8+ años",
    rating: 4.5,
    type: "candy"
  },
  { 
    id: 10, 
    name: "Caramelos de Leche", 
    brand: "LecheDulce",
    price: 2.25, 
    image: "/placeholder.svg?height=200&width=200&text=🥛",
    age: "5+ años",
    rating: 4.7,
    type: "candy"
  },
  { 
    id: 11, 
    name: "Caramelos de Café", 
    brand: "EnergyCoffee",
    price: 2.75, 
    image: "/placeholder.svg?height=200&width=200&text=☕",
    age: "12+ años",
    rating: 4.2,
    type: "candy"
  },
  { 
    id: 12, 
    name: "Caramelos de Frutas", 
    brand: "FrutiFresh",
    price: 1.80, 
    image: "/placeholder.svg?height=200&width=200&text=🍎",
    age: "4+ años",
    rating: 4.8,
    type: "candy"
  }
]

export default function ChupetesYDulcesStore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-purple-200 to-blue-200">
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Chupetes y Dulces
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Buscar productos..." 
                className="pl-10 pr-4 py-2 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Button variant="outline" size="icon" className="rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Carrito de compras</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <CardHeader className="p-0 relative">
                  <div className="bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 p-1">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
                  </div>
                  {product.bestseller && (
                    <Badge className="absolute top-2 right-2 bg-yellow-400 text-yellow-900">Bestseller</Badge>
                  )}
                  {product.eco && (
                    <Badge className="absolute top-2 right-2 bg-green-400 text-green-900">Eco</Badge>
                  )}
                </CardHeader>
                <CardContent className="p-4 bg-white">
                  <CardTitle className="text-lg font-semibold text-purple-700">{product.name}</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">{product.brand}</p>
                  <p className="text-pink-600 font-bold mt-2">${product.price.toFixed(2)}</p>
                  <p className="text-sm text-blue-600 mt-1">
                    {product.type === 'pacifier' ? `Edad: ${product.age}` : `Recomendado: ${product.age}`}
                  </p>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 bg-white">
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600 transition duration-300">
                    Añadir al carrito
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white shadow-lg mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2023 Chupetes y Dulces. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}