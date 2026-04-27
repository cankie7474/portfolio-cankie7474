const fullCode = `const developer = {
  role: "Full Stack Developer",
  age: "18 years old",
  stack: "web + backend + mobile",
  location: "Austria, Salzburg",
  currentStatus: "Student"
};`;

const tokenPattern =
  /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b(?:const|string|number|boolean)\b|[{}:;,])/g;

function getTokenClass(token: string) {
  if (token.startsWith('"') || token.startsWith("'")) {
    return "text-emerald-300";
  }

  if (token === "const") {
    return "text-fuchsia-300";
  }

  if (["{", "}", ":", ";", ","].includes(token)) {
    return "text-zinc-500";
  }

  return "text-cyan-200";
}

function Cursor() {
  return (
    <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 animate-pulse bg-zinc-200" />
  );
}

function renderLine(line: string, lineIndex: number, isLastLine: boolean) {
  const parts = line.split(tokenPattern).filter(Boolean);

  return (
    <span className="block min-h-[1.45em]" key={`${lineIndex}-${line}`}>
      {parts.map((part, partIndex) => {
        if (tokenPattern.test(part)) {
          tokenPattern.lastIndex = 0;

          return (
            <span className={getTokenClass(part)} key={`${part}-${partIndex}`}>
              {part}
            </span>
          );
        }

        tokenPattern.lastIndex = 0;

        return (
          <span className="text-zinc-300" key={`${part}-${partIndex}`}>
            {part}
          </span>
        );
      })}
      {isLastLine ? <Cursor /> : null}
    </span>
  );
}

export default function TypingCodeBlock() {
  return (
    <pre className="m-0 overflow-x-auto bg-transparent p-0 font-mono text-sm leading-relaxed text-zinc-300">
      <code className="block bg-transparent">
        {fullCode
          .split("\n")
          .map((line, lineIndex, lines) =>
            renderLine(line, lineIndex, lineIndex === lines.length - 1),
          )}
      </code>
    </pre>
  );
}
