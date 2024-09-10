const fs = require("fs");
const path = require("path");

// Function to get the project root directory
function getProjectRoot() {
  let currentDir = __dirname || "";

  while (currentDir !== path.parse(currentDir).root) {
    if (fs.existsSync(path.join(currentDir, "package.json"))) {
      return currentDir;
    }
    currentDir = path.dirname(currentDir);
  }

  throw new Error("Could not find project root directory.");
}

// Function to dynamically load JSON files
function loadJSON(relativePath) {
  const projectRoot = getProjectRoot(); // Get project root
  const resolvedPath = path.resolve(projectRoot, relativePath); // Resolve path dynamically

  if (fs.existsSync(resolvedPath)) {
    return JSON.parse(fs.readFileSync(resolvedPath, "utf8"));
  } else {
    throw new Error(`File not found: ${resolvedPath}`);
  }
}

const transformKey = (key) => {
  return key.toLowerCase().replace(/\s/g, "").replace(/-/g, "");
};

const transformPremitiveKey = (key) => {
  return key.toLowerCase().replace(/\s/g, "-");
};

// Dynamically load JSON files using dynamic paths
const premitives = loadJSON("src/Tokens/_Premitives/myPremitives.json");
const semantics = loadJSON("src/Tokens/_Semantics/mySemantic.json");

// JSON to Typography converter function (same as before)
const jsonToTypography = (json) => {
  const transformValue = (value) => {
    return value
      .replace("{Typography.Weight.", "var(--joy-fontWeight-")
      .replace("{Typography.Font.Font-family}", "var(--joy-fontFamily-inter)")
      .replace("{Typography.Size.", "var(--joy-fontSize-")
      .replace("{Typography.Line Height.", "var(--joy-lineHeight-")
      .replace("{Typography.Paragraph Spacing.", "var(--joy-paragraphSpacing-")
      .replace("{Typography.Letter Spacing.", "var(--joy-letterSpacing-")
      .replace("}", ")");
  };

  const convertTypography = (typography) => {
    const result = {};
    for (const [header, styles] of Object.entries(typography)) {
      for (const [variant, styleProps] of Object.entries(styles)) {
        const key = `${header.toLowerCase()}.${transformKey(variant)}`;
        //@ts-ignore
        result[key] = {};
        for (const [prop, valueObj] of Object.entries(styleProps)) {
          const transformedKey = transformKey(prop);
          //@ts-ignore
          result[key][transformedKey] = transformValue(valueObj.value);
        }
      }
    }
    return result;
  };

  return convertTypography(semantics.Typography);
};
const jsonToColor = (json) => {
  const transformKey = (key) => {
    return key.toLowerCase().replace(/\s/g, "").replace(/-/g, "");
  };

  const transformValue = (name, shade) => {
    return `var(--joy-palette-${name.toLowerCase().replace(/\s/g, "-")}-${shade
      .toLowerCase()
      .replace(/\s/g, "-")})`;
  };

  const convertColors = (colors) => {
    const result = {};
    for (const [category, colorShades] of Object.entries(colors)) {
      for (const [name, shades] of Object.entries(colorShades)) {
        for (const [shade, shadeValue] of Object.entries(shades)) {
          const key = `${name.toLowerCase()}.${transformKey(shade)}`;
          //@ts-ignore
          result[key] = transformValue(name, shade);
        }
      }
    }
    return result;
  };

  return convertColors(json.Colors);
};

function convertoSematics(semantics) {
  const result = { colors: {} };

  for (const category in semantics) {
    if (category === "Colors") {
      for (const name in semantics[category]) {
        for (const shade in semantics[category][name]) {
          const formattedName = `${shade.toLowerCase().replace(" ", "-")}`;
          console.log(name.toLowerCase(), shade.toLowerCase());
          const formattedValue = `var(--joy-palette-${name
            .toLowerCase()
            .replace(" ", "-")}-${shade})`;
          result[category?.toLowerCase()][formattedName] = formattedValue; // Add to "colors" key
        }
      }
    } else if (category === "Typography") {
      //@ts-ignore
      result[category?.toLowerCase()] = jsonToTypography(category);
    }
  }
  console.log("result", result);
  createFile(result, "semantics.ts", "semantics");

  return result;
}

// Convert primitives function (same as before)
function convertPremitives(premitives) {
  const result = {};

  function extractValues(obj) {
    if (typeof obj === "object" && !Array.isArray(obj)) {
      if (obj.value !== undefined) {
        return obj.value;
      }
      const newObj = {};
      for (const key in obj) {
        newObj[transformPremitiveKey(key)] = extractValues(obj[key]);
      }
      return newObj;
    }
    return obj;
  }

  for (const category in premitives) {
    result[transformPremitiveKey(category)] = extractValues(
      premitives[category]
    );
  }
  console.log("Transformed result:", result);
  createFile(result, "premitives.ts", "premitives");
}

// Create file function (same as before)
const createFile = (result, fileName, objname) => {
  const fileContent = `export const ${objname} = ${JSON.stringify(
    result,
    null,
    2
  )};`;

  // Get the root directory of the project
  const projectRoot = getProjectRoot();

  // Define the file path
  const outputDir = path.join(projectRoot, "covertedTokens");
  const filePath = path.join(outputDir, fileName);

  // Check if directory exists; if not, create it
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log("Output directory created.");
  }

  // Write the file
  fs.writeFileSync(filePath, fileContent, "utf8");
  console.log(`File has been written to ${filePath}`);
};

function myFunction() {
  console.log("Function is running!");
  convertPremitives(premitives);
  convertoSematics(semantics);
}

myFunction();
