/// <reference types="react-scripts" />

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        SUPERBASE_URL: string;
        SUPERBASE_API_KEY: string;
      }
    }
  }
  export { };

