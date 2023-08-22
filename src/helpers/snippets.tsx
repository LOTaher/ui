export const nextjsLanguageLabel = `
import * as React from "react";

export interface LanguageLabelProps {
  language: keyof typeof languageColorMap;
}

const languageColorMap = {
  Javascript: "#f1e05a",
  Typescript: "#2b7489",
  Python: "#3572A5",
  Java: "#b07219",
  CSharp: "#178600",
  HTML: "#e34c26",
  CSS: "#563d7c",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
  Swift: "#ffac45",
  Kotlin: "#F18E33",
  Rust: "#dea584",
  C: "#555555",
  Cplusplus: "#f34b7d",
  Scala: "#c22d40",
  Dart: "#00B4AB",
  R: "#198CE7",
  Elixir: "#6e4a7e",
  Lua: "#000080",
  Assembly: "#6E4C13",
  Perl: "#0298c3",
  Matlab: "#e16737",
  Shell: "#89e051",
  Powershell: "#012456",
  Crystal: "#000100",
  OCaml: "#3be133",
} as const;

const LanguageLabel: React.FC<LanguageLabelProps> = ({ language }) => {
  const displayName =
    (language == "Cplusplus" && "C++") ||
    (language == "CSharp" && "C#") ||
    language;

  return (
    <span className="flex items-center">
      <span
        className="w-[13px] h-[13px] rounded-full mr-1"
        style={{ backgroundColor: languageColorMap[language] }}
      ></span>
      <span className="text-[14px] pt-[2px] leading-none text-[#78818c]">
        {displayName}
      </span>
    </span>
  );
};

LanguageLabel.displayName = "LanguageLabel";

export default LanguageLabel;
`;

export const reactjsLanguageLabel = `
import * as React from "react";

export interface LanguageLabelProps {
  language: keyof typeof languageColorMap;
}

const languageColorMap = {
  Javascript: "#f1e05a",
  Typescript: "#2b7489",
  Python: "#3572A5",
  Java: "#b07219",
  CSharp: "#178600",
  HTML: "#e34c26",
  CSS: "#563d7c",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
  Swift: "#ffac45",
  Kotlin: "#F18E33",
  Rust: "#dea584",
  C: "#555555",
  Cplusplus: "#f34b7d",
  Scala: "#c22d40",
  Dart: "#00B4AB",
  R: "#198CE7",
  Elixir: "#6e4a7e",
  Lua: "#000080",
  Assembly: "#6E4C13",
  Perl: "#0298c3",
  Matlab: "#e16737",
  Shell: "#89e051",
  Powershell: "#012456",
  Crystal: "#000100",
  OCaml: "#3be133",
} as const;

const LanguageLabel: React.FC<LanguageLabelProps> = ({ language }) => {
  const displayName =
    (language == "Cplusplus" && "C++") ||
    (language == "CSharp" && "C#") ||
    language;

  return (
    <span className="flex items-center">
      <span
        className="w-[13px] h-[13px] rounded-full mr-1"
        style={{ backgroundColor: languageColorMap[language] }}
      ></span>
      <span className="text-[14px] pt-[2px] leading-none text-[#78818c]">
        {displayName}
      </span>
    </span>
  );
};

LanguageLabel.displayName = "LanguageLabel";

export default LanguageLabel;
`;
