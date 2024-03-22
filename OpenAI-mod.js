import { Configuration, OpenAIApi } from "openai";
export class OpenAI {
  constructor() {
    // Create the Configuration and OpenAIApi instances
    this.openai = new OpenAIApi(new Configuration({ apiKey:"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" }));
  }
  // Asynchronous function to generate text from the OpenAI API
  async transcribeText(file, model) 
  {
    this.openai
    .audio
    .speech.create({
        file: file,
        model: model,
        response_format: "json",
      })
      .then((response) => console.log(response.data)); //need to modify so it is saved somehwere
      
  }
}
