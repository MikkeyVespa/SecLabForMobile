type Item = {
    id: number;
    language: string;
    experience: number;
    logo: string;
  }[];
  
  export default [
    {
      id: 1,
      language: "JavaScript",
      experience: 3,
      logo: require("./assets/images/JS_logo.png"),
    },
    {
      id: 2,
      language: "C#",
      experience: 2,
      logo: require("./assets/images/Csharp_Logo.png"),
    },
  ] satisfies Item;