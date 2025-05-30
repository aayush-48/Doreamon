import { createContext, useContext, useState, ReactNode } from "react";

// Translation dictionary
const translations = {
  en: {
    Dashboard: "Dashboard",
    "Welcome to Doraemon - your inventory management hub": "Welcome to Doraemon - your inventory management hub",
    "Total Stock": "Total Stock",
    "increase": "increase",
    "Sales": "Sales",
    "Returns": "Returns",
    "Decrease": "Decrease",
    "Last 30 days": "Last 30 days",
    "All Warehouses": "All Warehouses",
    "Deliveries": "Deliveries",
    "Overview": "Overview",
    "Inventory Activity": "Inventory Activity",
    "Stock Levels Over Time": "Stock Levels Over Time",
    "Inventory Alerts": "Inventory Alerts",
    "Low Stock Items": "Low Stock Items",
    "Product A": "Product A",
    "Warehouse A": "Warehouse A",
    "Warehouse C": "Warehouse C",
    "Approaching Expiry": "Approaching Expiry",
    "Product B": "Product B",
    "Toggle language": "Toggle language"
  },
  hi: {
    Dashboard: "डैशबोर्ड",
    "Welcome to Doraemon - your inventory management hub": "डोरेमॉन में आपका स्वागत है - आपका इन्वेंटरी प्रबंधन केंद्र",
    "Total Stock": "कुल स्टॉक",
    "increase": "वृद्धि",
    "Sales": "बिक्री",
    "Returns": "वापसी",
    "Decrease": "कमी",
    "Last 30 days": "पिछले 30 दिन",
    "All Warehouses": "सभी गोदाम",
    "Deliveries": "डिलीवरी",
    "Overview": "अवलोकन",
    "Inventory Activity": "इन्वेंटरी गतिविधि",
    "Stock Levels Over Time": "समय के साथ स्टॉक स्तर",
    "Inventory Alerts": "इन्वेंटरी चेतावनियाँ",
    "Low Stock Items": "कम स्टॉक वाले आइटम",
    "Product A": "उत्पाद ए",
    "Warehouse A": "गोदाम ए",
    "Warehouse C": "गोदाम सी",
    "Approaching Expiry": "समाप्ति के निकट",
    "Product B": "उत्पाद बी",
    "Toggle language": "भाषा बदलें"
  }
};

const LanguageContext = createContext<{
  language: "en" | "hi";
  setLanguage: (lang: "en" | "hi") => void;
  t: (key: string) => string;
} | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
