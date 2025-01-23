import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-900 tech-background p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Our Products</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-black/40 border-none text-white">
            <CardHeader>
              <CardTitle>MS Office</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src="/lovable-uploads/photo-1488590528505-98d2b5aba04b" 
                alt="MS Office" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-300">
                [MS Office product details will go here]
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-none text-white">
            <CardHeader>
              <CardTitle>JioCloud - MS Azure from Jio Region</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src="/lovable-uploads/photo-1461749280684-dccba630e2f6" 
                alt="JioCloud" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-300">
                [JioCloud product details will go here]
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-none text-white">
            <CardHeader>
              <CardTitle>MS Azure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition">
                    <div className="w-12 h-12 rounded-lg bg-gray-700 mb-2" />
                    <p className="text-sm">Azure Service {item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-none text-white">
            <CardHeader>
              <CardTitle>Product List from Shiviom</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition">
                    <h3 className="font-semibold">Product {item}</h3>
                    <p className="text-sm text-gray-400">Description placeholder</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Products;