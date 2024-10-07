const parseEnv = () => {
  let output = "";

  for (const [name, value] of Object.entries(process.env)) {
    if (name.startsWith("RSS_")) {
      if (output) {
        output += "; ";
      }
      output += `${name}=${value}`;
    }
  }

  if (output) {
    console.log(output);
  }
};

parseEnv();
