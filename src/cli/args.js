const parseArgs = () => {
  const args = process.argv.reduce((acc, cur) => {
    const lastElementDoesntHaveValueProp = acc.length && !acc[acc.length - 1].hasOwnProperty("value");

    if (lastElementDoesntHaveValueProp) {
      acc[acc.length - 1].value = cur;

      return acc;
    }

    if (cur.startsWith("--")) {
      acc.push({ name: cur.slice(2) });
    }

    return acc;
  }, []);

  if (!args.length) {
    return;
  }

  let output = "";

  for (const { name, value } of args) {
    if (output) {
      output += ", ";
    }

    output += `${name} is ${value}`;
  }

  console.log(output);
};

parseArgs();
