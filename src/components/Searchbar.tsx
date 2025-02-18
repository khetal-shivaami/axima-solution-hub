
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

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
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-md border border-white/10 hover:border-white/20"
      >
        <Search className="w-4 h-4" />
        <span className="hidden md:inline">Search...</span>
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-white/20 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-white/40">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {["Products", "Team", "Services"].map((category) => (
            <CommandGroup key={category} heading={category}>
              {searchData
                .filter((item) => item.category === category)
                .map((item) => (
                  <CommandItem
                    key={item.title}
                    onSelect={() => handleSelect(item.path)}
                  >
                    <div>
                      <div className="text-sm font-medium">{item.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {item.description}
                      </div>
                    </div>
                  </CommandItem>
                ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
