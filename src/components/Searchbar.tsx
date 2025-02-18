
import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

type SearchResult = {
  title: string;
  description: string;
  path: string;
  category: string;
};

const searchData: SearchResult[] = [
  // Products
  { 
    title: "Microsoft 365", 
    description: "Complete cloud productivity solution",
    path: "/products",
    category: "Products"
  },
  { 
    title: "Azure", 
    description: "Cloud computing platform",
    path: "/products",
    category: "Products"
  },
  
  // Management Team
  { 
    title: "Punit Thakkar", 
    description: "Chairman",
    path: "/about",
    category: "Team"
  },
  { 
    title: "Akshay Thakkar", 
    description: "CEO",
    path: "/about",
    category: "Team"
  },
  { 
    title: "Ashika Suresh", 
    description: "Deputy General Manager",
    path: "/about",
    category: "Team"
  },
  
  // Services
  { 
    title: "Microsoft Copilot", 
    description: "AI-powered productivity assistant",
    path: "/copilot",
    category: "Services"
  },
  { 
    title: "Cloud Solutions", 
    description: "Enterprise cloud services",
    path: "/services",
    category: "Services"
  }
];

export function Searchbar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredResults = searchData.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path: string) => {
    setQuery("");
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 hover:border-white/20 bg-black/20">
        <Search className="w-4 h-4 text-white/60" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onClick={() => setIsOpen(true)}
          placeholder="Search..."
          className="bg-transparent text-sm text-white outline-none w-full placeholder:text-white/60"
        />
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-white/20 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-white/40">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      {isOpen && query.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-black/95 border border-white/10 rounded-md shadow-lg backdrop-blur-sm py-2 z-50">
          {filteredResults.length === 0 ? (
            <div className="px-4 py-2 text-sm text-white/60">
              No results found
            </div>
          ) : (
            filteredResults.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(item.path)}
                className="px-4 py-2 hover:bg-white/5 cursor-pointer group"
              >
                <div className="text-sm font-medium text-white group-hover:text-axima-blue">
                  {item.title}
                </div>
                <div className="text-xs text-white/60">
                  {item.description}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
