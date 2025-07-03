import Commands from "@moonlight-mod/wp/commands_commands";
import { CommandType, InputType, OptionType, NumberCommandOption } from "@moonlight-mod/types/coreExtensions/commands";

Commands.registerCommand({
  id: "httpcat",
  description: "Post a cat image from https://http.cat/ depending on the status code",
  inputType: InputType.BUILT_IN_TEXT,
  type: CommandType.CHAT,
  options: [
    {
      name: "statuscode",
      description: "HTTP Status Code",
      type: OptionType.NUMBER,
      required: true
    }
  ],
  execute: (options) => {
    const httpCode = options.find((o): o is NumberCommandOption => o.name === "statuscode")!;
    return { content: "https://http.cat/" + String(httpCode.value) };
  }
});
