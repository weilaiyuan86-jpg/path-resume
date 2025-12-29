'use client';
import React, { createContext, useContext, useState } from 'react';

// 严格按照设计稿文字进行多语言映射
const translations = {
  en: {
    console: "Console",
    builder: "Resume Builder",
    smartMatch: "SmartMatch™",
    library: "Library",
    visa: "US Visa Hub",
    identityMatrix: "Identity Matrix",
    identityDesc: "Refine your core contact information for global recruitment standard.",
    exportBtn: "EXPORT MASTER CV",
    auditTitle: "FAANG PROTOCOL AUDIT",
    givenName: "GIVEN NAME",
    familyName: "FAMILY NAME",
    matched: "MATCHED"
  },
  zh: {
    console: "控制台",
    builder: "简历构建器",
    smartMatch: "智能匹配™",
    library: "资源库",
    visa: "签证中心",
    identityMatrix: "身份矩阵",
    identityDesc: "优化您的核心联系信息，以符合全球招聘标准。",
    exportBtn: "导出主简历",
    auditTitle: "FAANG 协议审计",
    givenName: "名 (GIVEN NAME)",
    familyName: "姓 (FAMILY NAME)",
    matched: "匹配度"
  },
  es: {
    console: "Consola",
    builder: "Constructor",
    smartMatch: "SmartMatch™",
    library: "Biblioteca",
    visa: "Centro de Visa",
    identityMatrix: "Matriz de Identidad",
    identityDesc: "Refine su información de contacto para el estándar global.",
    exportBtn: "EXPORTAR CV MAESTRO",
    auditTitle: "AUDITORÍA FAANG",
    givenName: "NOMBRE",
    familyName: "APELLIDO",
    matched: "EMPAREJADO"
  }
};

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<'en' | 'zh' | 'es'>('en');
  const dict = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);