import logger from "app/app.logger";
import env from "app/app.env";
import { main } from "app/main";

jest.mock("app/app.logger");
jest.mock("app/app.env");

describe("main function", () => {
  it("should call logger.info with the correct messages", () => {
    const loggerInfoMock = jest.fn();
    logger.info = loggerInfoMock;

    env.apiKey = "dummy-api-key";

    main();

    expect(loggerInfoMock).toHaveBeenCalledWith("Starting app...");
    expect(loggerInfoMock).toHaveBeenCalledWith("Environment: dummy-api-key");
  });
});
